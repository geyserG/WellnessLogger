import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_700Bold_Italic
} from '@expo-google-fonts/poppins';
import Start from './components/Start';
import ViewPassword from './components/ViewPassword';

const Stack = createStackNavigator();

export default App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_700Bold_Italic
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Start} options={{ title: 'Wellcome' }} />
        <Stack.Screen name="Password" component={ViewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}