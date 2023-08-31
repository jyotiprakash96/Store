import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BackHeader = ({ navigation,title='' }) => {
    return (
        <View style={{flexDirection: 'row',paddingVertical:15}}>
        <TouchableOpacity  
        onPress={() => navigation.goBack()}
        >
            <FontAwesome name="angle-left" style={{ color: "#fff", fontSize: 26, paddingBottom: 10 }} />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 16, marginLeft: 20}}>
          {title}
        </Text>
      </View>
    )
}
export default BackHeader;