import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Massage from './Massage';
import ChatData from '../../../components/Data/Chat';
import MassageInput from "./MassageInput";
export default function ChatRoomMassageScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatData.messages}
        renderItem={({item}) => <Massage massage={item} />}
        inverted
      />
      <MassageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
