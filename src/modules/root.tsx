import { Slot } from 'expo-router';
import { Container } from '../shared/components/Container/Container';

export default function Root() {
  return (
    <Container className="flex-1 p-10">
      <Slot />
    </Container>
  );
}
