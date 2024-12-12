import { IMarketDetails } from '@/src/shared/assets/@types/market.type';
import { Typography } from '../../Typography/Typography';
import { View } from 'react-native';
import Info from '../../Info/Info';
import { IconMapPin, IconPhone, IconTicket } from '@tabler/icons-react-native';

interface DetailsProps {
  details?: IMarketDetails;
}

export default function Details({ details }: DetailsProps) {
  return (
    <View className="p-9 pb-0 bg-gray-100 rounded-tr-2xl rounded-tl-2xl">
      <Typography size={20} weight="bold" color="gray.600">
        {details?.name}
      </Typography>
      <Typography size={16} weight="regular" color="gray.500" className="mt-3 mb-8 leading-5">
        {details?.description}
      </Typography>

      <View className="w-full border-b-2 border-b-gray-200 pb-4 mb-4">
        <Typography size={12} weight="medium" color="gray.500" className="mb-3">
          Informações
        </Typography>
        <Info description={`${details?.coupons} cupons disponíveis`} icon={IconTicket} />
        <Info description={details?.address} icon={IconMapPin} />
        <Info description={details?.phone} icon={IconPhone} />
      </View>

      <View className="w-full border-b-2 border-b-gray-200 pb-4 mb-4">
        <Typography size={12} weight="medium" color="gray.500" className="mb-3">
          Regulamento
        </Typography>
        {details?.rules.map((rule) => (
          <Typography key={rule.id}>{`\u2022 ${rule.description}`}</Typography>
        ))}
      </View>
    </View>
  );
}
