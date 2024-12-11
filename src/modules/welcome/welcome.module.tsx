import Step from '@/src/shared/components/Step/Step';
import { Typography } from '@/src/shared/components/Typography/Typography';
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';
import { Image } from 'expo-image';
import { View } from 'react-native';

export default function WelcomeModule() {
  return (
    <View className="flex-1" style={{ gap: 10 }}>
      <Image style={{ width: 48, height: 48, marginTop: 24, marginBottom: 28 }} source={require('@/src/shared/assets/images/logo.png')} />
      <Typography size={24} weight="bold" color="gray.600">
        Boas vindas ao Nearby!
      </Typography>
      <Typography size={16} color="gray.500">
        Tenha cupons de vantagem para usar em {'\n'}
        seus estabelecimentos favoritos.
      </Typography>
      <View className="flex-1 pt-4" style={{ gap: 24 }}>
        <Typography size={16} color="gray.500">
          Veja como funciona:
        </Typography>
        <Step icon={IconMapPin} title="Encontre estabelecimentos" description="Veja locais perto de você que são parceiros Nearby" />
        <Step icon={IconQrcode} title="Ative o cupom com QR Code" description="Escaneie o código no estabelecimento para usar o benefício" />
        <Step icon={IconTicket} title="Garanta vantagens perto de você" description="Ative cupons onde estiver, em diferentes tipos de estabelecimento" />
      </View>
    </View>
  );
}
