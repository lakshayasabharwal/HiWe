import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import OTPScreen from '../screens/OTPScreen';
import ConsistentScreen from '../screens/ConsistentScreen';
import BuzzScreen from '../screens/BuzzScreen';
import SkillScreen from '../screens/SkillScreen';
import SportsMingleScreen from '../screens/SportsMingleScreen';
import CitySelectionScreen from '../screens/CitySelectionScreen';
import CalanderScreen1 from '../screens/CalanderScreen1';
import CalanderScreen2 from '../screens/CalanderScreen2';
import MasterScreen from '../screens/MasterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Consistent" component={ConsistentScreen} />
        <Stack.Screen name="Buzz" component={BuzzScreen} />
        <Stack.Screen name="Skill" component={SkillScreen} />
        <Stack.Screen name="SportsMingle" component={SportsMingleScreen} />
        <Stack.Screen name="CitySelection" component={CitySelectionScreen} />
        <Stack.Screen name="Calander1" component={CalanderScreen1} />
        <Stack.Screen name="Calander2" component={CalanderScreen2} />
        <Stack.Screen name="Master" component={MasterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
