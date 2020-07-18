import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from 'App/Containers/Login/LoginScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import StartScreen from 'App/Containers/Main/StartScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    MainScreen: StartScreen,
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
