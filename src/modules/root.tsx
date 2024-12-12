import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Root() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Slot />
    </GestureHandlerRootView>
  );
}
