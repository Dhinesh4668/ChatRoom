import { Text, View } from 'react-native'
import React from 'react'
import Onbord from './components/onbord/Onbord';
// aws amplify config
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig)




const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Onbord />
    </View>
  )
}

export default App