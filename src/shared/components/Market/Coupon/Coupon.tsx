import { Typography } from '../../Typography/Typography';
import { View } from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';

interface DetailsProps {
  coupon?: string;
}

export default function Coupon({ coupon }: DetailsProps) {
  const { pallet } = useThemeColor();

  return (
    <View className="px-10">
      <Typography size={14} weight="medium" color="gray.500" className="mb-3">
        Utilize esse cupom
      </Typography>
      <View className="flex-row bg-green-soft px-2 py-3 rounded-lg items-center" style={{ gap: 8 }}>
        <IconTicket size={24} color={pallet.colors.green.light} />
        <Typography size={16} weight="semibold" color="gray.600" className="uppercase">
          {coupon ?? '-'}
        </Typography>
      </View>
    </View>
  );
}
