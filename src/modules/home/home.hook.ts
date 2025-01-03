import { ICategory } from '@/src/shared/assets/@types/category.type';
import { IMarket } from '@/src/shared/assets/@types/market.type';
import useDimensions from '@/src/shared/hooks/useDimensions';
import { api } from '@/src/shared/services/api';
import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

export default function useHome() {
  const { height } = useDimensions();

  const [categories, setCategories] = useState<ICategory[]>();
  const [category, setCategory] = useState<ICategory>();
  const [markets, setMarkets] = useState<IMarket[]>();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
      setCategory(data[0]);
    } catch (error) {
      console.log(error);
      Alert.alert('Categorias', 'Não foi possível carregar as categorias.');
    }
  };

  const fetchMarkets = async () => {
    try {
      const { data } = await api.get(`/markets/category/${category?.id}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Categorias', 'Não foi possível carregar os locais.');
    }
  };

  const getCurrentLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.log(error);
      Alert.alert('Localização', 'Não foi possível recuperar sua localização atual.');
    }
  };

  const onSelectedCategory = (category: ICategory) => {
    setCategory(category);
  };

  const snapPoints = {
    min: 278,
    max: height - height * 0.2,
  };

  useEffect(() => {
    fetchCategories();
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (!category) return;

    fetchMarkets();
  }, [category]);

  return { states: { categories, category, markets, bottomSheetRef, snapPoints, location }, methods: { onSelectedCategory } };
}
