import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, deviceWidth} from '../Common/Helper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PRODUCT_LIST_SUCCESS} from '../redux/actions/ActionTypes';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import CommonModal from '../Common/CommonModal';

const Cards = ({item, data}) => {
  const dispatch = useDispatch();
  const {
    productId = '',
    ProductName = '',
    Vendor = '',
    MRP = '',
    BatchNum = '',
    BatchDate = '',
    Quantity = '',
    Status = '',
  } = item;
  const {data: productList = []} = useSelector(
    state => state.ProductListReducer,
  );
  const [modalFlag, setModalFlag] = useState(false);
  const [approvemodalFlag, setApprovemodalFlagg] = useState(false);
  const dialogOpen = () => {
    setModalFlag(true);
  };
  const dialogClose = () => {
    setModalFlag(false);
  };

  const approveDialogOpen = () => {
    setApprovemodalFlagg(true);
  };
  const approveDialogClose = () => {
    setApprovemodalFlagg(false);
  };
  const handleApprove = () => {
    let List = [...productList];
    const selectedProduct = List.find(row => row.productId == productId);
    console.log(List, productId, 'ProductId-----', selectedProduct);

    selectedProduct.Status = 'Approved';
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: [...List],
    });
    approveDialogClose();
  };
  const handleRemove = () => {
    let List = [...productList];
    console.log(List, productId, 'ProductId-----',item);
    const selectedProduct = List.filter(row => row.productId !== productId);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: [...selectedProduct],
    });
    dialogClose();
  };

  const modalProps = {
    visible: modalFlag,
    onpressNo: dialogClose,
    onpressyes: handleRemove,
    heading: 'are You Sure to delete the Product ?',
    
  };
  const approveModalProps = {
    visible: approvemodalFlag,
    onpressNo: approveDialogClose,
    onpressyes: handleApprove,
    heading: 'are You Sure to Approve the Product ?',
    
  };
  return (
    <TouchableOpacity style={styles.cardStyle}>
      {modalFlag && <CommonModal {...modalProps} />}
      {approvemodalFlag && <CommonModal {...approveModalProps} />}
      <View>
        <Text style={styles.titlestyle}>{ProductName}</Text>
        <Text>
          Quantity : <Text style={{fontWeight: '800'}}>{Quantity}</Text>
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>{Vendor}</Text>
          <Text
            style={{
              color: '#a00',
              paddingLeft: 5,
              fontWeight: '800',
            }}>{`₹ ${MRP}`}</Text>
        </View>
        <Text>Batch : {`${moment(BatchDate).format('LL')} (${BatchNum})`}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        {Status == 'Approved' ? (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <FontAwesome size={20} color={'green'} name={'check'} />
            <Text>{Status}</Text>
          </View>
        ) : (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 6}} onPress={() => dialogOpen()}>
              <FontAwesome size={20} color={'red'} name={'close'} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 6}} onPress={approveDialogOpen}>
              <FontAwesome size={20} color={'green'} name={'check'} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardStyle: {
    height: 100,
    // width:deviceWidth,
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
    backgroundColor: Colors.secondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titlestyle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.white,
  },
});
