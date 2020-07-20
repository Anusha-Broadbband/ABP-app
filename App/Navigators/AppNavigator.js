import HomeScreen from 'App/Containers/Home/HomeScreen'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import StartScreen from 'App/Containers/Main/StartScreen'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import RequestConnectionScreen from 'App/Containers/Request-Connection/RequestConnectionScreen'
import ThankyouScreen from 'App/Containers/Thankyou/ThankyouScreen'
import UserIdScreen from '../Containers/UserId/UserIdScreen'
import SignupScreen from '../Containers/Signup/SignupScreen'
const tabNavigatorScreen = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={30} color="#004d40" />,
    },
  },
  Payment: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Payment',
      tabBarIcon: () => <MaterialIcon name="payment" size={30} color="#004d40" />,
    },
  },
  Profile: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => <MaterialIcon name="payment" size={30} color="#004d40" />,
    },
  },
})

const StackNavigator = createStackNavigator(
  {
    Main: StartScreen,
    Login: LoginScreen,
    Home: tabNavigatorScreen,
    RequestConnection: RequestConnectionScreen,
    Thankyou: ThankyouScreen,
    UserId: UserIdScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
