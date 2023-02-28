import react from 'react';
import {View, Text, TextInput} from 'react-native';
const Chat = () => {
  return (
    <>
      <View>
        <Text className="font-bold text-8xl">chat Screen</Text>
        <TextInput
          placeholder="Search ...."
          className="w-2 h-3 bg-amber-300 caret-emerald-800"
        />
      </View>
    </>
  );
};

export default Chat;
