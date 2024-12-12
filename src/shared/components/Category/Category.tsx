import { Pressable, PressableProps } from 'react-native';
import { Typography } from '../Typography/Typography';
import { CategoriesIcons } from '../../constants/CategoriesIcons';
import { useThemeColor } from '../../hooks/useThemeColor';

interface CategoryProps extends PressableProps {
  iconId: string;
  isSelected?: boolean;
  name: string;
}
export default function Category({ iconId, name, isSelected = false, ...rest }: Readonly<CategoryProps>) {
  const { pallet } = useThemeColor();
  const Icon = CategoriesIcons[iconId];

  return (
    <Pressable
      className={`flex-row px-3 h-9 border-gray-300 rounded-lg justify-center items-center ${isSelected ? 'bg-green-base border-0' : 'bg-gray-100 border-2'}`}
      style={{ gap: 10 }}
      {...rest}
    >
      <Icon size={16} color={pallet.colors.gray[isSelected ? 100 : 400]} />
      <Typography size={14} color={`${isSelected ? 'gray.100' : 'gray.500'}`}>
        {name}
      </Typography>
    </Pressable>
  );
}
