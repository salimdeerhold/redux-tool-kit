import {Button, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../slice/cart_slice';

// cart_rtk branch ->>  add product and displayed card item in the same page 
// cart_rtk-2-detail-page branch ->>  detail page and adding item to card to from there


const MainPage = ({navigation}:any) => {
  const product = useSelector((state: any) => state.carts);
  console.log(product,'************');
  
  //console.log(product);
  return (
    <View style={{flex: 1}}>
      <Text>----MainPage----</Text>
      <Text>{product.totalQuantity}</Text>
      <Text>{product.totalPrice}</Text>


      <View style={{flex: 1}}>
        <FlatList
          data={product.items}
          renderItem={({item}) => {
            //console.log(item.image);

            return (
              <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.img, height: 100, width: 100}} />
                <TouchableOpacity onPress={() => navigation.navigate('DetailPage',{item:item})}>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>

                  
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {/* item in cart  */}
      <View style={{flex: 1}}>
        <FlatList
          data={product.cartItem}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor:'orange',margin:4}}>
                <Text>{item.title}</Text>
                <Text>{item.quantity}</Text>
                <Text>unit price {item.price}</Text>
                <Text>total price {item.itemTotalPrice}</Text>
                {/* <Button title="add" onPress={() => dispatch(addProduct(product.items))} /> */}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MainPage;
