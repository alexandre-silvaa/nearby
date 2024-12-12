import { ICategory } from '@/src/shared/assets/@types/category.type';
import { api } from '@/src/shared/services/api';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function useHome() {
  const [categories, setCategories] = useState<ICategory[]>();
  const [category, setCategory] = useState<ICategory>();

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

  const onSelectedCategory = (category: ICategory) => {
    setCategory(category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { states: { categories, category }, methods: { onSelectedCategory } };
}
