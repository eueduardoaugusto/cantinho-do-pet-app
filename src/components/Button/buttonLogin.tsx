import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  children: string;
  variant?: 'primary' | 'secondary';
}

export function AppButton({ children, variant = 'primary', ...rest }: AppButtonProps) {
  const baseStyle = 'w-full px-4 py-6 rounded-3xl items-center justify-center items-center mt-6';

  const variants = {
    primary: 'bg-[#EC5C14]',
    secondary: 'bg-gray-200',
  };

  const textVariants = {
    primary: 'text-white',
    secondary: 'text-black',
  };

  return (
    <TouchableOpacity activeOpacity={0.4} className={`${baseStyle} ${variants[variant]}`} {...rest}>
      <Text className={`font-semibold ${textVariants[variant]}`}>{children}</Text>
    </TouchableOpacity>
  );
}
