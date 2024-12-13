import { Modal, ScrollView, View } from 'react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import useMarketDetails from './market-details.hook';
import { Market } from '@/src/shared/components/Market';
import Button from '@/src/shared/components/Button/Button';
import { CameraView } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';

export default function MarketDetailsModule() {
  const { states, methods } = useMarketDetails();

  return (
    <View className="flex-1">
      <StatusBar style="inverted" hidden={states.isVisible} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Market.Cover uri={states?.market?.cover} />
        <Market.Details details={states?.market} />
        {states.coupon && <Market.Coupon coupon="FM434T6" />}
      </ScrollView>

      <View className="p-8">
        <Button label="Ler QR Code" onPress={methods.handleOpenCamera} />
      </View>

      <Modal className="flex-1" visible={states.isVisible}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={(data) => {
            if (data && !methods.qrLock.current) {
              methods.qrLock.current = true;
              setTimeout(() => methods.handleUseCoupon(data?.data), 500);
            }
          }}
        />
        <View className="absolute left-12 bottom-12 right-12">
          <Button label="Voltar" onPress={methods.toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
