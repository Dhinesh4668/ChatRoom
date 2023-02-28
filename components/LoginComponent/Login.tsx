import { View, Text } from 'react-native'
import React from 'react'
// auth
import {Amplify ,Auth } from 'aws-amplify'
import awsconfig from '../../src/aws-exports';
Amplify.configure(awsconfig)


const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login