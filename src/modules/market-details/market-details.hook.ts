import { api } from '@/src/shared/services/api';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { IMarketDetails } from '@/src/shared/assets/@types/market.type';
import { useCameraPermissions } from 'expo-camera';

export default function useMarketDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [market, setMarket] = useState<IMarketDetails>();
  const [coupon, setCoupon] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [_, requestPermission] = useCameraPermissions();

  console.log(id);

  const qrLock = useRef(false);

  const fetchMarketById = async () => {
    try {
      const { data } = await api.get(`/markets/${id}`);
      setMarket(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do lugar.', [{ text: 'Ok', onPress: () => router.back() }]);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('Câmera', 'Você precisa habilitar o uso da câmera!');
        return;
      }

      qrLock.current = false;
      toggleModal();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível utilizar sua câmera.');
    }
  };

  const getCoupon = async (id: string) => {
    try {
      const { data } = await api.patch(`/coupons/${id}`);
      Alert.alert('Cupom', data.coupon);
      setCoupon(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível utilizar o cupom.');
    }
  };

  const handleUseCoupon = (id: string) => {
    toggleModal();

    Alert.alert('Cupom', `Deseja resgatar o cupom de ${market?.name}?`, [
      { style: 'cancel', text: 'Não' },
      { text: 'Sim', onPress: () => getCoupon(id) },
    ]);
  };

  const toggleModal = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    if (!id) return;
    fetchMarketById();
  }, [id, coupon]);

  return { states: { market, coupon, isVisible }, methods: { toggleModal, handleOpenCamera, handleUseCoupon, qrLock } };
}
