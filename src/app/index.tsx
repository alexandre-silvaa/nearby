import { View } from 'react-native';
import { Typography } from '../shared/components/Typography/Typography';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Typography size={20} color="text">
        Hello World!
      </Typography>
    </View>
  );
}
