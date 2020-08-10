import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hayya A'las-salah</Text>
      
      <Register />
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
