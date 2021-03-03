import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_700Bold_Italic } from '@expo-google-fonts/poppins';
import {styles} from './globalStyles';
import MyButton from './components/MyButton';
const logo = require('./src/assets/images/Grupo-914.png');
const imageApp = require('./src/assets/images/Grupo-1509.png');

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
    <View style={[styles.container, localStyles.container]}>
      <StatusBar style="auto" />
      <Image
        style={localStyles.logo}
        source={logo}
      />
      <View>
        <Text style={styles.h1}>Welcome to</Text>
        <Text style={[styles.h1, styles.bold]}>Bowhead<Text style={{fontFamily: 'Poppins_700Bold_Italic'}}>'</Text>s</Text>
      </View>
      <Image
        style={localStyles.imageApp}
        source={imageApp}
      />
      <Text style={styles.wellness_logger}>Wellness Logger</Text>
      <MyButton title="START"/>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 54,
    paddingBottom: 79
  },
  logo: {
    width: 79.64,
    height: 50.65,
  },
  imageApp: {
    width: 302.39,
    height: 252.41
  }
});