import HomeScreen from 'App/Containers/Home/HomeScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import StartScreen from 'App/Containers/Main/StartScreen'
import RequestConnectionScreen from 'App/Containers/Request-Connection/RequestConnectionScreen'
import ThankyouScreen from 'App/Containers/Thankyou/ThankyouScreen'
import DrawerNavigator from 'App/Navigators/DrawerNavigator'
import { Colors } from 'App/Theme'
import React from 'react'
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

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={30} color={Colors.primary} />,
    },
  },
  Payment: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Payment',
      tabBarIcon: () => <MaterialIcon name="payment" size={30} color={Colors.primary} />,
    },
  },
  Profile: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => <MaterialIcon name="payment" size={30} color={Colors.primary} />,
    },
  },
})

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
    initialRouteName: 'Main',
    headerMode: 'none',
  }
)

const MainNavigator = createDrawerNavigator(
  {
    Stack: StackNavigator,
    drawer: DrawerNavigator,
  },
  {
    initialRouteName: 'Stack',
    headerMode: 'none',
    overlayColor: 'trasnsparent'
  }
)

export default createAppContainer(MainNavigator)
