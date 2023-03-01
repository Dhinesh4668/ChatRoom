import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,Platform
} from 'react-native';
import { platforms } from "nativewind/dist/utils/platforms";
export default function MassageInput() {
  // text input hook
  const [massage, setMassage] = useState('');

  // send massage
  const senMassage= () =>{
    console.log('sending: ', massage);
    setMassage('')
  }
  const onPlusClicked = () => {
    console.log("on plus click");
  }

  // onpreess
  const click = () => {
    if (massage){
      senMassage();
    }else{
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView style={styles.Container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={massage}
          onChangeText={setMassage}
          placeholder="type something....."
        />
      </View>
      <Pressable onPress={click} style={styles.buttonContainer}>
        {massage ? (
          <Text
            style={{
              color: '#fff',
            }}>
            m
          </Text>
        ) : (
          <Text
            style={{
              color: '#fff',
            }}>
            +
          </Text>
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    padding: 10,
    // backgroundColor: 'red',
  },
  inputContainer: {
    backgroundColor: 'lightgray',
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
