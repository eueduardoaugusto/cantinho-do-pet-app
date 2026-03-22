import { Image, View } from 'react-native';

export default function Header() {
  return (
    <View className=" w-full items-center justify-center bg-[#EC5C14] p-4">
      <Image source={require('@/assets/Logo-Pet.png')} className="h-20 w-20" />
    </View>
  );
}
