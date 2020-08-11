import React from 'react';
import { Text, View,TouchableOpacity, TextInput  } from 'react-native';

export default () => {
  const [value, onChangeText] = React.useState('email');
  return (
    <View>
      <View>
       <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}value={value}></TextInput>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}