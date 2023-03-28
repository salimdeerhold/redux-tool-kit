import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../slice/cart_slice';

const DetailPage = ({route}: any) => {
  const {item} = route.params;

  const dispatch = useDispatch();
  console.log(item, 'item from detail page');
  const [itemNumber, setItemNumber] = useState(1);

  return (
    <View>
      <Text>DetailPage</Text>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          title="-"
          onPress={() => {
            setItemNumber(itemNumber - 1);
          }}
        />
        <Text>{itemNumber}</Text>
        <Button
          title="+"
          onPress={() => {
            setItemNumber(itemNumber + 1);
          }}
        />
      </View>
      <Button
        title="add"
        //onPress={() => dispatch(addProduct(item))}
        onPress={() => dispatch(addProduct({...item, quantity: itemNumber,itemTotalPrice:itemNumber*item.price}))}
      />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({});
