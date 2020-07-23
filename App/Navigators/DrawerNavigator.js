import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from "App/Containers/Login/LoginScreen"
import HomeScreen from '../Containers/Home/HomeScreen';



const DrawerNavigator = createDrawerNavigator({
  One: HomeScreen,
});

export default DrawerNavigator;