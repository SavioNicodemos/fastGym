import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <View /> : <Loading />}

    </NativeBaseProvider>
  );
}