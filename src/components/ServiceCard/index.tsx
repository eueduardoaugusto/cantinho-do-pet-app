import { View, Text } from 'react-native';
import { AppButton } from '@/components/Button/buttonLogin';

export function CardServico({ item }: any) {
  return (
    <View className="mx-4 my-2  rounded-xl bg-white p-4 shadow">
      <View className="flex-row justify-around">
        <View>
          <Text className="text-lg font-bold">{item.nome}</Text>
          <Text className="text-lg font-bold">{item.proprietario}</Text>
          <Text className="text-lg font-bold">Previsão de Saída: {item.saida}</Text>
        </View>
        <View>
          <AppButton>{item.servico}</AppButton>
        </View>
      </View>

      <View className="flex-row">
        <AppButton>INICIAR</AppButton>
        <AppButton>FINALIZAR</AppButton>
      </View>
    </View>
  );
}
