import { IconProps } from '@tabler/icons-react-native';
import { View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { Typography } from '../Typography/Typography';

interface InfoProps {
  description?: string;
  icon: React.ComponentType<IconProps>;
}

export default function Info({ description, icon: Icon }: InfoProps) {
  const { pallet } = useThemeColor();

  return (
    <View className="flex-row items-center" style={{ gap: 8 }}>
      <Icon size={16} color={pallet.colors.gray[400]} />
      <Typography className="flex-1 leading-6" size={14} weight="regular">
        {description ?? '-'}
      </Typography>
    </View>
  );
}
