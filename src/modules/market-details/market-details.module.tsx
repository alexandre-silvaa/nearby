import { Modal, View } from 'react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import useMarketDetails from './market-details.hook';
import { Market } from '@/src/shared/components/Market';
import Button from '@/src/shared/components/Button/Button';
import { CameraView } from 'expo-camera';

export default function MarketDetailsModule() {
  const { pallet } = useThemeColor();
  const { states, methods } = useMarketDetails();

  return (
    <View className="flex-1">
      <Market.Cover uri={states?.market?.cover} />
      <Market.Details details={states?.market} />
      {states.coupon && <Market.Coupon coupon="FM434T6" />}

      <View className="p-8">
        <Button label="Ler QR Code" onPress={methods.handleOpenCamera} />
      </View>

      <Modal className="flex-1" visible={states.isVisible}>
        <CameraView style={{ flex: 1 }} />
        <View className="absolute left-12 bottom-12 right-12">
          <Button label="Voltar" onPress={methods.toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
