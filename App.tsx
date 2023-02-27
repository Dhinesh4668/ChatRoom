/**
 * myself dhinesh kumar im dooing my colllage mini project
 * https://github.com/Dhinesh4668/ChatRoom
 *
 * @format
 */ /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import react from 'react';
import { View, Text, StatusBar } from "react-native";
// amplify install
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
// import navigation
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
// amplify config
Amplify.configure(awsconfig);


const Tab=createBottomTabNavigator();
// main app
const App = () => {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};


// HomeScreen
function HomeScreen() {
  return(
    <>
    <Text>Home</Text>
    </>
  )
}
export default App;
