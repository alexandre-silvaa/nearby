import { StyleSheet, Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { ColorsType } from '../../constants/Colors';

export type TypographyProps = TextProps & {
  color?: keyof ColorsType;
  size?: number;
  maxFontSizeMultiplier?: number;
  weight?: 'thin' | 'extralight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
};

export function Typography({ style, weight = 'regular', color, size = 14, maxFontSizeMultiplier = 1.2, ...rest }: TypographyProps) {
  const { pallet } = useThemeColor();

  return (
    <Text
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={[{ color: color ? pallet.colors[color] : pallet.colors.text }, { fontSize: size }, styles[weight], style]}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  thin: {
    fontWeight: '100',
    fontFamily: 'Inter_100Thin',
  },
  extralight: {
    fontWeight: '100',
    fontFamily: 'Inter_200ExtraLight',
  },
  light: {
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  regular: {
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  semibold: {
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  bold: {
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  extrabold: {
    fontWeight: '800',
    fontFamily: 'Inter_800ExtraBold',
  },
  black: {
    fontWeight: '900',
    fontFamily: 'Inter_900Black',
  },
});
