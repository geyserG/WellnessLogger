import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Welcome to</Text>
      <Text style={styles.h1}>Bowhead's</Text>
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
    fontSize: 30
  },
  h2: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
