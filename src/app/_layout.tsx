import { Slot } from 'expo-router';
import '../shared/assets/styles/global.css';
import { Container } from '../shared/components/Container/Container';

export default function Layout() {
  return (
    <Container className="flex-1">
      <Slot />
    </Container>
  );
}
