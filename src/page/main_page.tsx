import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const MainPage = () => {
    const items = useSelector((state:any)=> state.allCart);
    console.log(items);
    
    return (
    <View>
      <Text>MainPage</Text>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})