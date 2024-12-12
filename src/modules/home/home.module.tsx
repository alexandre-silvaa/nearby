import { FlatList, View } from 'react-native';
import useHome from './home.hook';
import Category from '@/src/shared/components/Category/Category';

export default function HomeModule() {
  const { states, methods } = useHome();

  return (
    <View className="flex-1">
      <FlatList
        data={states?.categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category name={item?.name} iconId={item.id} isSelected={states?.category === item} onPress={() => methods.onSelectedCategory(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-9 z-10"
        contentContainerStyle={{ gap: 8 }}
      />
    </View>
  );
}
