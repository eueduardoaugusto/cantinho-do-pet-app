import { Image, Text, View } from 'react-native';
import { AppButton } from '@/components/Button/buttonLogin';
import Input from '@/components/Input/input';

export default function ScreenLogin({ goToServicos }: any) {
  return (
    <View className="flex-1 justify-center bg-[#EC5C14]">
      <View className="mx-5 items-center rounded-3xl bg-white p-6">
        <Image
          source={require('@/assets/Logo-Pet.png')}
          className="h-72 w-72 "
          resizeMode="contain"
        />

        <Text className="mb-10 px-10 text-center text-2xl color-[#6B7280]">
          Realize login para acessar o painel de controle.
        </Text>

        <Input label="Usuário" placeholder="Seu nome de usuário" />

        <Input label="Senha" placeholder="Insira sua Senha" secureTextEntry />

        <AppButton variant="primary" onPress={goToServicos}>
          LOGIN
        </AppButton>
      </View>
    </View>
  );
}
