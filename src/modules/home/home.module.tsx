import { FlatList, View } from 'react-native';
import useHome from './home.hook';
import Category from '@/src/shared/components/Category/Category';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Place from '@/src/shared/components/Place/Place';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { Typography } from '@/src/shared/components/Typography/Typography';

export default function HomeModule() {
  const { pallet } = useThemeColor();
  const { states, methods } = useHome();

  return (
    <View className="flex-1 bg-[#CECECE]">
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
      <BottomSheet
        ref={states.bottomSheetRef}
        snapPoints={[states?.snapPoints.min, states?.snapPoints.max]}
        backgroundStyle={{ backgroundColor: pallet.colors.gray[100] }}
        handleIndicatorStyle={{ width: 80, height: 4, backgroundColor: pallet.colors.gray[400] }}
        enableOverDrag={false}
      >
        <BottomSheetFlatList
          data={states?.markets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Place place={item} />}
          contentContainerClassName="p-6 pb-[100px]"
          contentContainerStyle={{ gap: 12 }}
          ListHeaderComponent={() => (
            <Typography size={16} color="gray.600" weight="regular" className="mb-4">
              Explore locais perto de você!
            </Typography>
          )}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </View>
  );
}
