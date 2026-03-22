import { Text, TouchableOpacity } from 'react-native';

export function FilterButton({ title }: { title: string }) {
  return (
    <TouchableOpacity className="rounded-full bg-gray-200 px-4 py-2">
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
