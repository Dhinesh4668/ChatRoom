import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Massage from './Massage';
import ChatData from '../../../components/Data/Chat';
export default function ChatRoomMassageScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatData.messages}
        renderItem={({item}) => <Massage massage={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
