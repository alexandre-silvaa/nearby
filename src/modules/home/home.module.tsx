import { FlatList, View } from 'react-native';
import useHome from './home.hook';
import Category from '@/src/shared/components/Category/Category';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Place from '@/src/shared/components/Place/Place';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { Typography } from '@/src/shared/components/Typography/Typography';
import MapView, { Callout, Marker } from 'react-native-maps';
import { currentLocation } from '@/src/shared/constants/Location';

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
        className="max-h-10 z-10 absolute top-[7%] px-5"
        contentContainerStyle={{ gap: 8 }}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
          image={require('@/src/shared/assets/images/location.png')}
        />

        {states?.markets?.map((market) => (
          <Marker
            key={market.id}
            identifier="current"
            coordinate={{ latitude: market.latitude, longitude: market.longitude }}
            image={require('@/src/shared/assets/images/pin.png')}
          >
            <Callout>
              <View>
                <Typography size={14} color="gray.600" weight="medium">
                  {market.name}
                </Typography>
                <Typography size={12} color="gray.600" weight="regular">
                  {market.address}
                </Typography>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

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
