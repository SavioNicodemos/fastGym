import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}

    </NativeBaseProvider>
  );
}