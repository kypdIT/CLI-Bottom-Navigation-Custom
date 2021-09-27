import React from 'react';

import {StyleSheet, View, Image, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          evevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeTab',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {/* <Image
                source={require('Icon Custom')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              /> */}
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeTab',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {/* <Image
        source={require('Icon Custom')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? '#e32f45' : '#748c94',
        }}
      /> */}
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Find
              </Text>
            </View>
          ),
        }}
        name="Find"
        component={FindScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeTab',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('Icon Custom')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeTab',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {/* <Image
        source={require('Icon Custom')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? '#e32f45' : '#748c94',
        }}
      /> */}
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Setting
              </Text>
            </View>
          ),
        }}
        name="Post"
        component={PostScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeTab',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {/* <Image
        source={require('Icon Custom')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? '#e32f45' : '#748c94',
        }}
      /> */}
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Chat
              </Text>
            </View>
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
