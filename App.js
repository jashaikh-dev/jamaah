
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register'

const nav = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(nav);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hayya A'las-salah</Text>
      
//       <Register />
//       <Login />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
