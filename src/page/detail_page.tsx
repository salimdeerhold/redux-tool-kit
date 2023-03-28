import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailPage = () => {
  return (
    <View>
      <Text>DetailPage</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="-" />
        <Text>0</Text>
        <Button title="+" />
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({});
