import { api } from '@/src/shared/services/api';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { IMarketDetails } from '@/src/shared/assets/@types/market.type';

export default function useMarketDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [market, setMarket] = useState<IMarketDetails>();

  const fetchMarketById = async () => {
    try {
      const { data } = await api.get(`/markets/${id}`);
      setMarket(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do lugar.', [{ text: 'Ok', onPress: () => router.back() }]);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchMarketById();
  }, [id]);

  return { states: { market }, methods: {} };
}
