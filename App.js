import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

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
      <Text>Wellness Logger</Text>
      <Button
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        title="START"
        color="#1dacc1"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: 'Poppins_400Regular'
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },
  bold: {
    fontFamily: 'Poppins_700Bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
