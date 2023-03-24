import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { removeUser } from '../store/slice/user_slice';



const UserList = () => {
  const data = useSelector((state: any) => {
    return state.users;
  });

  const dispatch =  useDispatch();
   const deleteUser=(item:string)=>{
      dispatch(removeUser(item));
   }

  return <View style={{flex: 1, backgroundColor: '#127986'}}>
        <FlatList 
        data={data.value }
        renderItem={({item})=>{return (<View style={{flexDirection:'row', justifyContent:'space-between', margin:4,borderBottomWidth:1,paddingBottom:4}}>

          <Text>{item}</Text>
          <Button title='delete' onPress={()=>{deleteUser(item)}}/>
        </View> );
          }}/>
  </View>;
};

export default UserList;

const styles = StyleSheet.create({});
