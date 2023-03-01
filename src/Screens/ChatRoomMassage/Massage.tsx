import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// colors
const Blue = '#366acd';
const Gray = 'lightgray';
const Black = 'black';
const White = '#ffffff';

const myId = 'u1';
export default function ({massage}) {
  const myMsg = massage.user.id === myId;
  return (
    <View
      style={[
        styles.ChatContainer,
        {
          backgroundColor: myMsg ? Gray : Blue,
          marginLeft: myMsg ? 'auto' : 10,
          marginRight: myMsg ? 10 : 'auto',
        },
      ]}>
      <Text style={{color: myMsg ? Black : White}}>{massage.content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  ChatContainer: {
    backgroundColor: '#366acd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
});
