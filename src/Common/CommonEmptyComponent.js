import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from './Helper';

const CommonEmptyComponent = () => {
  return (
    <View style={styles.bodyStyle}>
      <Text style={styles.fontstyle}>Sorry No Products Added</Text>
    </View>
  );
};

export default CommonEmptyComponent;

const styles = StyleSheet.create({
  bodyStyle: {
    height: 60,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.secondary,
    marginVertical:10
  },
  fontstyle: {
    color: Colors.white,
  },
});
