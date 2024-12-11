import { View } from 'react-native';
import { Typography } from '../Typography/Typography';
import { IconProps } from '@tabler/icons-react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

interface StepProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export default function Step({ title, description, icon: Icon }: Readonly<StepProps>) {
  const { pallet } = useThemeColor();

  return (
    <View className="w-full flex-row" style={{ gap: 16 }}>
      {Icon && <Icon size={32} color={pallet.colors.red.base} />}
      <View className="flex-1">
        <Typography size={16} weight="semibold" color="gray.600">
          {title}
        </Typography>
        <Typography size={14} color="gray.500">
          {description}
        </Typography>
      </View>
    </View>
  );
}
