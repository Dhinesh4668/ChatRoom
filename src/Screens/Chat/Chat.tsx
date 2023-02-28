import react from 'react';
import {StyleSheet, View} from 'react-native';
import ChatRoom from './Massage/ChatRoomItem';
import ChatRoomData from '../../../components/Data/ChatRoomData';

//dommy data
const ChatRoom1 = ChatRoomData[1];
const ChatRoom2 = ChatRoomData[2];
const ChatRoom3 = ChatRoomData[3];
const Chat = () => {
  return (
    //chats components
    <View style={styles.page}>
      <ChatRoom chatRoom={ChatRoom1} />
      <ChatRoom chatRoom={ChatRoom2} />
      <ChatRoom chatRoom={ChatRoom3} />
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
