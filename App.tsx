import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Groups, Options} from './src/Screens/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500',
              color: '#a191cc',
            },
          }}>
          <Tab.Screen name="Massage" component={Chat} />
          <Tab.Screen name="Groups" component={Groups} />
          <Tab.Screen name="Settings" component={Options} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
