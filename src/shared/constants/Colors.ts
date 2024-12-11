import tailwindConfig from '../../../tailwind.config';

export const Colors = {
  colors: tailwindConfig.theme?.extend?.colors as ColorsType,
} as const;

export type ColorsType = {
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };

  green: {
    soft: string;
    light: string;
    base: string;
    dark: string;
  };

  red: {
    light: string;
    base: string;
  };
};

export type ColorKeys =
  | {
      [K in keyof ColorsType]: `${K}.${keyof ColorsType[K] & (string | number)}`;
    }[keyof ColorsType]
  | keyof ColorsType;
