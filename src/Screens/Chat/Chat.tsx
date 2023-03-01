import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// import ChatRoom from './Massage/ChatRoomItem';
import ChatRoomData from '../../../components/Data/ChatRoomData';
import ChatRoomItem from './Massage/ChatRoomItem';

// //dommy data
// const ChatRoom1 = ChatRoomData[1];
// const ChatRoom2 = ChatRoomData[2];
// const ChatRoom3 = ChatRoomData[3];
const Chat = () => {
  return (
    //chats components
    <View>
      {/*  storee section*/}
      {/*<FlatList*/}
      {/*  data={ChatRoomData}*/}
      {/*  renderItem={({item}) => <ChatRoomItem chatRoom={item} />}*/}
      {/*  showsVerticalScrollIndicator={true}*/}
      {/*  horizontal*/}
      {/*/>*/}

      <FlatList
        data={ChatRoomData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({});
