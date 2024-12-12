import { api } from '@/src/shared/services/api';
import { useEffect, useState } from 'react';
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

      toggleModal();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível abrir sua câmera.');
    }
  };

  const toggleModal = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    if (!id) return;
    fetchMarketById();
  }, [id]);

  return { states: { market, coupon, isVisible }, methods: { toggleModal, handleOpenCamera } };
}
