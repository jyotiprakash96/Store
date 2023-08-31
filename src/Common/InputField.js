import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { deviceWidth } from './Helper';

export const InputField = ({style, label, onChange,name, value,type='default', ...rest}) => {
  return (
    <View style={{marginTop: 12}}>
        <TextInput
          placeholder={label}
          keyboardType={type}
          style={styles.input}
          placeholderTextColor={'#fff'}
          name={name}
            onChangeText={(text)=>onChange(name,text)}
            value={value}
            {...rest}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      width: deviceWidth * 0.8,
      margin: 10,
      borderRadius: 16,
      borderWidth: 1,
      padding: 10,
      color: '#fff',
      borderColor: '#fff',
    },
})
