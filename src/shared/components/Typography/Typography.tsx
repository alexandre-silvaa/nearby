import { StyleSheet, Text, type TextProps } from 'react-native';
import { ColorKeys } from '../../constants/Colors';

export type TypographyProps = TextProps & {
  color?: ColorKeys;
  size?: number;
  maxFontSizeMultiplier?: number;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
};

export function Typography({ style, weight = 'regular', color, size = 14, maxFontSizeMultiplier = 1.2, ...rest }: TypographyProps) {
  return (
    <Text
      className={`${color ?? 'text-gray-600'}`}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={[{ fontSize: size }, styles[weight], style]}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  regular: {
    fontWeight: '400',
    fontFamily: 'Rubik_400Regular',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'Rubik_500Medium',
  },
  semibold: {
    fontWeight: '600',
    fontFamily: 'Rubik_600SemiBold',
  },
  bold: {
    fontWeight: '700',
    fontFamily: 'Rubik_700Bold',
  },
});
