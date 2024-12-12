import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { IPlace } from '../../assets/@types/place.type';
import { Image } from 'expo-image';
import { Typography } from '../Typography/Typography';
import { IconTicket } from '@tabler/icons-react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { router } from 'expo-router';

interface PlaceProps extends TouchableOpacityProps {
  place: IPlace;
}

export default function Place({ place, ...rest }: Readonly<PlaceProps>) {
  const { pallet } = useThemeColor();

  return (
    <TouchableOpacity
      className="h-36 w-full p-2 border-[1px] border-gray-200 rounded-xl flex-row items-center"
      style={{ gap: 16 }}
      onPress={() => router.push({ pathname: '/market-details', params: { id: place.id } })}
      {...rest}
    >
      <Image source={place?.cover} style={{ width: 116, height: 104, backgroundColor: pallet.colors.gray[200], borderRadius: 8 }} />
      <View className="flex-1" style={{ gap: 4 }}>
        <Typography weight="medium" color="gray.600">
          {place?.name}
        </Typography>
        <Typography size={12} weight="regular" color="gray.500" numberOfLines={2}>
          {place?.description}
        </Typography>

        <View className="flex-row mt-2" style={{ gap: 7 }}>
          <IconTicket size={16} color={pallet.colors.red.base} />
          <Typography size={12} weight="regular" color="gray.400">
            {place?.coupons} cupons disponíveis
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}
