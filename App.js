import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './src/screens/Chat/ChatList';
import Chat from './src/screens/Chat/Chat';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hayya A'las-salah</Text>
      <ChatList />
      <Chat />
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
