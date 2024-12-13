import { StyleSheet, Text, type TextProps } from 'react-native';
import { ColorKeys } from '../../constants/Colors';
import { useThemeColor } from '../../hooks/useThemeColor';

export type TypographyProps = TextProps & {
  color?: ColorKeys;
  size?: number;
  maxFontSizeMultiplier?: number;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
};

export function Typography({ style, weight = 'regular', color = 'gray.600', size = 14, maxFontSizeMultiplier = 1.2, ...rest }: TypographyProps) {
  const { pallet } = useThemeColor();

  const resolveColor = (key: ColorKeys): string | undefined => {
    const [group, shade] = key.split('.') as [keyof typeof pallet.colors, string];
    const groupColors = pallet.colors[group];
    if (typeof groupColors === 'object' && groupColors !== null && shade in groupColors) {
      return groupColors[shade as keyof typeof groupColors];
    }
    if (typeof groupColors === 'string') {
      return groupColors;
    }
    return undefined;
  };

  const textColor = color ? resolveColor(color) : pallet.colors.gray[600];

  return <Text maxFontSizeMultiplier={maxFontSizeMultiplier} style={[{ fontSize: size, color: textColor }, styles[weight], style]} {...rest} />;
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
