import { Slot } from 'expo-router';
import { Container } from '../shared/components/Container/Container';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Root() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Container className="flex-1 py-10 px-4">
        <Slot />
      </Container>
    </GestureHandlerRootView>
  );
}
