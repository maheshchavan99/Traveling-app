import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignScreen from '../screen/signup/SignInScreen';
import SignUpScreen from '../screen/signup/SignUpScreen';
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="signin" component={SignScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
