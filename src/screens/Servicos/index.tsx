import { View, FlatList, Text } from 'react-native';
import { AppButton } from '@/components/Button/buttonLogin';
import Header from '@/components/Header/header';
import { FilterButton } from '@/components/FilterButton';
import { CardServico } from '@/components/ServiceCard';
import Input from '@/components/Input/input';

export default function ScreenServicos({ goToConfiguracoes }: any) {
  const data = [
    { id: '1', nome: 'Max', proprietario: 'Ricardo Silva', saida: '10h30', servico: 'BT' },
    { id: '2', nome: 'Max', proprietario: 'Ricardo Silva', saida: '10h30', servico: 'BT' },
    { id: '3', nome: 'Max', proprietario: 'Ricardo Silva', saida: '10h30', servico: 'BT' },
    { id: '4', nome: 'Max', proprietario: 'Ricardo Silva', saida: '10h30', servico: 'BT' },
  ];
  return (
    <View className="flex-1">
      <Header />
      <Text>Serviços</Text>

      <Input placeholder="Buscar serviços..." />

      <View className="my-2 flex-row gap-2 px-4">
        <FilterButton title="Todos" />
        <FilterButton title="Banho" />
        <FilterButton title="Tosa" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardServico item={item} />}
      />
      <AppButton onPress={goToConfiguracoes}>Configuracoes</AppButton>
    </View>
  );
}
