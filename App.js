import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Alert, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import {styles} from './globalStyles';

export default App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Welcome to</Text>
      <Text style={[styles.h1, styles.bold]}>Bowhead's</Text>
      <Text style={styles.wellness_logger}>Wellness Logger</Text>
      <Button
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        title="START"
        color="#1dacc1"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}


