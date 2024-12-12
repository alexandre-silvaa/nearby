import { View } from 'react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import useMarketDetails from './market-details.hook';
import { Market } from '@/src/shared/components/Market';

export default function MarketDetailsModule() {
  const { pallet } = useThemeColor();
  const { states, methods } = useMarketDetails();

  return (
    <View className="flex-1">
      <Market.Cover uri={states?.market?.cover} />
      <Market.Details details={states?.market} />
    </View>
  );
}
