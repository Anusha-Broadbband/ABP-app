import HomeScreen from 'App/Containers/Home/HomeScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import StartScreen from 'App/Containers/Main/StartScreen'
import RequestConnectionScreen from 'App/Containers/Request-Connection/RequestConnectionScreen'
import ThankyouScreen from 'App/Containers/Thankyou/ThankyouScreen'
import { Colors, Fonts } from 'App/Theme'
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation'
import SignupScreen from '../Containers/Signup/SignupScreen'
import UserIdScreen from '../Containers/UserId/UserIdScreen'
import { Avatar } from 'react-native-elements'
import Profile from 'App/Components/Profile/Profile'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={30} color={focused ? Colors.primary : Colors.grey} />
        ),
      },
    },
    Payment: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Payment',
        tabBarIcon: ({ focused }) => (
          <MaterialIcon name="payment" size={30} color={focused ? Colors.primary : Colors.grey} />
        ),
      },
    },
    Profile: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <MaterialIcon name="payment" size={30} color={focused ? Colors.primary : Colors.grey} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'gray',
    },
  }
)

const StackNavigator = createStackNavigator(
  {
    Main: StartScreen,
    Login: LoginScreen,
    Home: TabNavigator,
    RequestConnection: RequestConnectionScreen,
    Thankyou: ThankyouScreen,
    UserId: UserIdScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const MainNavigator = createDrawerNavigator(
  {
    Stack: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    One: HomeScreen,
  },

  {
    initialRouteName: 'Stack',
    headerMode: 'none',
    overlayColor: 'trasnsparent',
    drawrBackgroundColor: 'white',
    contentComponent: (props) => (
      <View style={{flex: 1}}>
        <Profile></Profile>
      </View>
    ),
  }
)

export default createAppContainer(MainNavigator)
