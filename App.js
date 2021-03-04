import 'react-native-gesture-handler';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React                    from 'react';
import AppLoading               from 'expo-app-loading';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_700Bold_Italic
}                               from '@expo-google-fonts/poppins';
import ScreenHome               from './screens/ScreenHome';
import ScreenPassword           from './screens/ScreenPassword';
import ScreenTrackForm          from './screens/ScreenTrackForm';

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
        {/* <Stack.Screen name="Home" component={ScreenHome} options={{ title: 'Wellcome' }} />
        <Stack.Screen name="Password" component={ScreenPassword} /> */}
        <Stack.Screen name="Track" component={ScreenTrackForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}