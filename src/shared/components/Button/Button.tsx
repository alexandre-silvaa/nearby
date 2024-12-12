import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useThemeColor } from '../../hooks/useThemeColor';
import { Typography } from '../Typography/Typography';
import React from 'react';
import { IconProps } from '@tabler/icons-react-native';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  fontSize?: number;
  icon?: React.ComponentType<IconProps>;
  isLoading?: boolean;
}

export default function Button({ label, style, fontSize = 16, isLoading = false, icon: Icon, ...rest }: Readonly<ButtonProps>) {
  const { pallet } = useThemeColor();
  const styles = makeStyles(pallet);

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} disabled={isLoading} {...rest}>
      <Typography size={fontSize} weight="semibold" color="gray.100">
        {Icon && <Icon size="small" color={pallet.colors.gray[100]} />}
        {isLoading && <ActivityIndicator />}
        {!isLoading && label && label}
      </Typography>
    </TouchableOpacity>
  );
}

const makeStyles = ({ colors }: typeof Colors) =>
  StyleSheet.create({
    button: {
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: colors.green.base,
    },
  });
