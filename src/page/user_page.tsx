import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addUser, clearAllUsers} from '../store/slice/user_slice';
import {fakeUserData} from '../api/api';
import UserList from './userlist';

const UserPage = () => {

  const dispatch = useDispatch();
  const addNewUser = (payload: string) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  const deleteAllUsers =() =>{
    dispatch(clearAllUsers([]));
  }

  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
      <View
        style={{
          height: 45,
          padding: 4,
          backgroundColor: '#072d32',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Button title="Add user" onPress={() => addNewUser(fakeUserData())} />
        <Button title="Clear user" onPress={()=>{deleteAllUsers()}}/>
      </View>
      <UserList/>
    </SafeAreaView>
  );
};







export default UserPage;

const styles = StyleSheet.create({});
