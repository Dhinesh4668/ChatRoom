import react from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ChatRoomItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true',
        }}
        style={styles.image}
      />
      <View style={styles.right}>
        <View style={styles.row}>
          <Text style={styles.name}>Dhinesh Kumar</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          seome Massage
        </Text>
      </View>
    </View>
  );
};
export default ChatRoomItem;
// stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  text: {
    color: 'gray',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
  },
});
