import { StyleSheet, Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { ColorsType } from '../../constants/Colors';
import { FontsType } from '../../assets/fonts/rubik';

export type TypographyProps = TextProps & {
  color?: keyof ColorsType;
  size?: number;
  maxFontSizeMultiplier?: number;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
};

export function Typography({ style, weight = 'regular', color, size = 14, maxFontSizeMultiplier = 1.2, ...rest }: TypographyProps) {
  const { fonts } = useThemeColor();
  const styles = makeStyles(fonts);

  return (
    <Text
      className={`${color ?? 'text-gray-600'}`}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={[{ fontSize: size }, styles[weight], style]}
      {...rest}
    />
  );
}
const makeStyles = (fonts: FontsType) =>
  StyleSheet.create({
    regular: {
      fontWeight: '400',
      fontFamily: fonts.regular,
    },
    medium: {
      fontWeight: '500',
      fontFamily: fonts.medium,
    },
    semibold: {
      fontWeight: '600',
      fontFamily: fonts.semiBold,
    },
    bold: {
      fontWeight: '700',
      fontFamily: fonts.bold,
    },
  });
