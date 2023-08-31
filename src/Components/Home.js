import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Cards from './Cards';
import {Colors} from '../Common/Helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from './AuthContext';
import { useSelector } from 'react-redux';
import CommonEmptyComponent from '../Common/CommonEmptyComponent';
import CommonModal from '../Common/CommonModal';

const HomeScreen = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  const { data:productList = [] } = useSelector(state => state.ProductListReducer);
  const Item = ({item}) => <Cards item={item} />;

  return (
    <SafeAreaView style={styles.containerstyle}>
      <View style={styles.viewstyle}>
        <Text style={styles.fontstyle}>Hi User</Text>
        <TouchableOpacity
          onPress={() => signOut()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons
            size={20}
            color={Colors.white}
            name={'logout'}
            style={{paddingRight: 5}}
          />
          <Text style={styles.fontstyle}>Sign out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewstyle}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.productfontstyle}>Products</Text>
        </View>
        <TouchableOpacity
          style={styles.addbtnstyle}
          onPress={() => navigation.navigate('AddProduct')}>
          <Ionicons size={20} color={Colors.white} name={'add'} />
          <Text style={{color: Colors.white, paddingLeft: 5}}>Add</Text>
        </TouchableOpacity>
      </View>
      {productList.length ? 
      <FlatList
      data={productList}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={(item, index) => index}
      ListFooterComponent={<View style={{paddingBottom: 40}}></View>}
      />
      :
      <CommonEmptyComponent />
      }
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fontstyle: {
    color: Colors.white,
    fontWeight: '900',
    fontSize: 20,
  },
  productfontstyle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  containerstyle: {
    padding: 10,
    backgroundColor: Colors.primary,
    flex: 1,
  },
  viewstyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  addbtnstyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: Colors.secondary,
    borderRadius: 16,
  },

});
