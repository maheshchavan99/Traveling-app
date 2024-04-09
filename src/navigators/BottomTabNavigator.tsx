import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/homescreen/HomeScreen';
import {Image} from 'react-native';
import ProfileScreen from '../screen/profile/profileScreen';
import Icon from 'react-native-vector-icons/FontAwesome'

const homeActive = require('../assets/images/active-home.png');
const homeInActive = require('../assets/images/incative-home.png');

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: {fontSize: 16},
        tabBarStyle: {
          height: 60,
          // backgroundColor: '#c21a0c',
        },
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={"home" }size={30} color={focused?"#0096FF":"#A9A9A9"} />
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={"home" }size={30} color={focused?"#0096FF":"#A9A9A9"} />

          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={"home" }size={30} color={focused?"#0096FF":"#A9A9A9"} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={"user" }size={30} color={focused?"#0096FF":"#A9A9A9"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
