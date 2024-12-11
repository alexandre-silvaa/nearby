import { Fonts } from '../assets/fonts/rubik';
import { Colors } from '../constants/Colors';

export function useThemeColor() {
  const pallet = Colors;
  const fonts = Fonts;

  return { pallet, fonts };
}
