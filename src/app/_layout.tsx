import { Slot } from 'expo-router';
import '../shared/assets/styles/global.css';
import { Container } from '../shared/components/Container/Container';
import { useFonts } from 'expo-font';
import { Fonts } from '../shared/assets/fonts/rubik';
import Loading from '../shared/components/Loading/Loading';

export default function Layout() {
  const [loaded] = useFonts(Fonts);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <Container className="flex-1">
      <Slot />
    </Container>
  );
}
