import { View, Text } from 'react-native';
import { AppButton } from '@/components/Button/buttonLogin';
import Header from '@/components/Header/header';

export default function ScreenSettings({ goBack }: any) {
  return (
    <View className="flex-1">
      <Header />
      <Text>Configurações</Text>
      <AppButton variant="primary" onPress={goBack}>
        VOLTAR TELA LOGIN
      </AppButton>
    </View>
  );
}
