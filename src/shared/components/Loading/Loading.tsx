import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { ActivityIndicator, View } from 'react-native';

export default function Loading() {
  const { pallet } = useThemeColor();

  return (
    <View className="flex-1 absolute z-50 bg-[rgba(0,0,0,0.1)] justify-center items-center h-full w-full">
      <ActivityIndicator size="large" color={pallet.colors.green.base} />
    </View>
  );
}
