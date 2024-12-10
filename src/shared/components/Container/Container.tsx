import { useThemeColor } from '@/src/shared/hooks/useThemeColor';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';

export type ContainerProps = SafeAreaViewProps & {
  color?: string;
  variant?: 'safe' | 'main';
};

export function Container({ style, color, variant = 'safe', ...otherProps }: ContainerProps) {
  const { pallet } = useThemeColor();
  const styles = makeStyles(pallet);

  const components = {
    safe: <SafeAreaView {...otherProps} style={[{ backgroundColor: pallet.colors.background }, style]} />,
    main: <ScrollView scrollToOverflowEnabled contentContainerStyle={[styles.main, style]} {...otherProps} />,
  };

  return components[variant];
}

const makeStyles = ({ colors }: typeof Colors) =>
  StyleSheet.create({
    main: {
      flexGrow: 1,
      backgroundColor: colors.background,
      paddingBottom: 60,
    },
  });
