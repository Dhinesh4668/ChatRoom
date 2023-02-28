import react from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
const Chat = () => {
  return (
    //chats components
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true',
        }}
        style={styles.image}
      />
      <View>
        <View style={styles.row}>
          <Text style={styles.name}>Dhinesh Kumar</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text style={styles.text}>seome Massage</Text>
      </View>
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  row: {},
  name: {},
  text: {},
});
