import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

import ScreenLogin from '@/screens/Login';
import ScreenServicos from '@/screens/Servicos';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'servicos'>('login');

  return (
    <SafeAreaView className="flex-1">
      {screen === 'login' && <ScreenLogin goToServicos={() => setScreen('servicos')} />}

      {screen === 'servicos' && <ScreenServicos goBack={() => setScreen('login')} />}
    </SafeAreaView>
  );
}
