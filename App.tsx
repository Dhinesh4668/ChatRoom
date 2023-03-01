import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, ChatRoomMassageScreen, } from './src/Screens/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

// color property
const meterialBlue = '#e1ebf8';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarShowLabel: true,
            tabBarStyle: {
              bottom: 0,
              height: 60,
              gap: 10,
              backgroundColor: '#e1ebf8',

            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500',
              color: '#000000',
            },
            headerStyle: {
              backgroundColor: '#e1ebf8',
            },
          }}>
          <Tab.Screen name="Massage" component={Chat} />
          <Tab.Screen name="Story" component={ChatRoomMassageScreen} />
          {/*<Tab.Screen name="Settings" component={Options} />*/}
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={meterialBlue} barStyle="dark-content" />
    </SafeAreaProvider>
  );
};
export default App;
