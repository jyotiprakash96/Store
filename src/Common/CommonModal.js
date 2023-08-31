import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, deviceHeight, deviceWidth} from './Helper';

const CommonModal = ({
  visible,
  onpressNo,
  onpressyes,
  heading,

}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          <Text
            style={{
              fontSize: 15,
              color: Colors.primary,
              alignSelf: 'center',
              margin: 10,
              fontWeight: '700',
            }}>
            {heading}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 20,
            }}>
            <TouchableOpacity
              onPress={onpressyes}
              style={[styles.buttons, {backgroundColor: Colors.secondary}]}>
              <Text
                style={{
                  alignItems: 'center',
                  color: Colors.white,
                  alignSelf: 'center',
                }}>
                {' '}
                {'Yes'}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onpressNo}
              style={[styles.buttons, {backgroundColor: Colors.red}]}>
              <Text
                style={{
                  alignItems: 'center',
                  color: Colors.white,
                  alignSelf: 'center',
                }}>
                {' '}
                {'No'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    borderRadius: 10,
    height: 200,
    width: deviceWidth * 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    height: 30,
    width: 60,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
