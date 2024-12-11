import '../shared/assets/styles/global.css';
import { useFonts } from 'expo-font';
import { Fonts } from '../shared/assets/fonts/rubik';
import Loading from '../shared/components/Loading/Loading';
import Root from '../modules/root';

export default function Layout() {
  const [loaded] = useFonts(Fonts);

  if (!loaded) {
    return <Loading />;
  }

  return <Root />;
}
