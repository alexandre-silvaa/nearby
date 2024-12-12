import { ImageBackground } from 'expo-image';
import { View } from 'react-native';
import Button from '../../Button/Button';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { router } from 'expo-router';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';

interface CoverProps {
  uri?: string;
}

export default function Cover({ uri }: Readonly<CoverProps>) {
  const { pallet } = useThemeColor();

  return (
    <ImageBackground source={uri} contentFit="cover" style={{ width: '100%', height: 232, marginBottom: -32, backgroundColor: pallet.colors.gray[200] }}>
      <View className="p-6 pt-14 w-1/4">
        <Button onPress={() => router.back()} icon={IconArrowLeft} />
      </View>
    </ImageBackground>
  );
}
