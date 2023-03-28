import {Button, FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../slice/cart_slice';

const MainPage = () => {
  const product = useSelector((state: any) => state.carts);
  //console.log(product);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <Text>----MainPage----</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={product.items}
          renderItem={({item}) => {
            //console.log(item.image);

            return (
              <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.img, height: 100, width: 100}} />
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>

                  <Button
                    title="add"
                    onPress={() => dispatch(addProduct(item))}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* item in cart  */}
      <View style={{flex: 1}}>
        <FlatList
          data={product.cart}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.title}</Text>
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
