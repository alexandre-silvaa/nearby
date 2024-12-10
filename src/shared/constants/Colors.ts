import tailwindConfig from '../../../tailwind.config';

export const Colors = {
  dark: false,
  colors: tailwindConfig.theme?.extend?.colors as ColorsType,
} as const;

export type ColorsType = {
  primary: string;
  background: string;
  text: string;
};
