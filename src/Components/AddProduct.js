import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {InputField} from '../Common/InputField';
import {DateField} from '../Common/DateField';
import BackHeader from '../Common/BackHeader';
import {Colors} from '../Common/Helper';
import {useDispatch, useSelector} from 'react-redux';
import {PRODUCT_LIST_SUCCESS} from '../redux/actions/ActionTypes';
import uuid from 'react-native-uuid';

const AddProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const {data: productList = []} = useSelector(
    state => state.ProductListReducer,
  );

  const [formdata, setFormData] = useState({
    ProductId: '',
    ProductName: '',
    Vendor: '',
    MRP: '',
    BatchNum: '',
    BatchDate: null,
    Quantity: '',
    Status: 'Pending',
  });

  let {
    ProductId = '',
    ProductName = '',
    Vendor = '',
    MRP = '',
    BatchNum = '',
    BatchDate = null,
    Quantity = '',
    Status = '',
  } = formdata;
  const handleChange = (name, value) => {
    console.log(name, value, 'val------');
    setFormData({...formdata, [name]: value});
  };
  const handledate = date => {
    setFormData({...formdata, BatchDate: date});
  };

  const handleSubmit = () => {
    const bodyData = {
      productId: uuid.v4(),
      ProductName: ProductName,
      Vendor: Vendor,
      MRP: MRP,
      BatchNum: BatchNum,
      BatchDate: BatchDate,
      Quantity: Quantity,
      Status:'Pending'
    };

    // PRODUCT_LIST_SUCCESS
    console.log(bodyData, 'bodyData');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: [...productList, bodyData],
    });
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.primary, flex: 1}}>
      <ScrollView style={{paddingHorizontal: 25}}>
        <BackHeader title={'Add New Product'} navigation={navigation} />

        <InputField
          label="Product Name"
          value={ProductName}
          name={'ProductName'}
          onChange={handleChange}
        />
        <InputField
          label="Vendor"
          value={Vendor}
          name={'Vendor'}
          onChange={handleChange}
        />
        <InputField
          label="MRP"
          type="number-pad"
          value={MRP}
          name={'MRP'}
          onChange={handleChange}
        />
        <InputField
          label="Batch Number "
          value={BatchNum}
          type="number-pad"
          name={'BatchNum'}
          onChange={handleChange}
        />
        <DateField
          label="Batch Date"
          dateValue={BatchDate}
          setDateFunc={handledate}
        />
        <InputField
          label="Quantity"
          value={Quantity}
          type="number-pad"
          name={'Quantity'}
          onChange={handleChange}
        />
        <TouchableOpacity
          style={{
            borderRadius: 2,
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            marginTop: 20,
            marginVertical: 30,
          }}
          onPress={handleSubmit}>
          <Text style={{paddingVertical: 7, color: '#ffff', fontSize: 15}}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({});
