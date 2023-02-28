import react from 'react';
import {StyleSheet, View} from 'react-native';
import ChatRoom from './Massage/ChatRoomItem';
const Chat = () => {
  return (
    //chats components
    <View style={styles.page}>
      <ChatRoom />
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
