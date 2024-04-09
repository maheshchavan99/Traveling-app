import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import SearchDestination from '../screen/search/SearchDestination';
import TripPlan from '../screen/trip-plan/TripPlan';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="tab" component={BottomTabNavigator} />
      <Stack.Screen name="search" component={SearchDestination} />
      <Stack.Screen name="trip-plan" component={TripPlan} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
