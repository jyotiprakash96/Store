import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {deviceWidth} from './Helper';
export const DateField = ({dateValue, setDateFunc, label, ...rest}) => {
  const [showDateModal, setShowDateModal] = useState(false);
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateValue;
    setShowDateModal(false);
    setDateFunc(currentDate);
    
  };
  const getFormattedDate = date => {
    console.log(date,'date======')
    if (date) {
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      return day + '/' + month + '/' + year;
    } else {
      const temp_date = new Date();
      var month = temp_date.getMonth() + 1;
      var day = temp_date.getDate();
      var year = temp_date.getFullYear();
      return day + '/' + month + '/' + year;
    }
  };

  return (
    <View style={{marginTop: 12}}>
      <TouchableOpacity
        onPress={() => setShowDateModal(true)}
        style={styles.input}
        // style={{ borderWidth: 0.8, height: 58, marginTop: 18, justifyContent: "center", borderColor: "#fff", borderRadius: 4 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>
            {dateValue ? getFormattedDate(dateValue) : label}
          </Text>
          <FontAwesome
            type="FontAwesome5"
            name="calendar"
            style={{color: '#898989', fontSize: 18, paddingRight: 10}}
          />
        </View>
      </TouchableOpacity>
      {showDateModal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateValue ? dateValue : new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
          {...rest}
        />
      )}
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
    justifyContent: 'center',
   
  },
});
