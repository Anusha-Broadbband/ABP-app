import HomeScreen from 'App/Containers/Home/HomeScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import StartScreen from 'App/Containers/Main/StartScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import RequestConnectionScreen from 'App/Containers/Request-Connection/RequestConnectionScreen'
import ThankyouScreen from 'App/Containers/Thankyou/ThankyouScreen'
const StackNavigator = createStackNavigator(
  {
    MainScreen: StartScreen,
    Login: LoginScreen,
    Home: HomeScreen,
    RequestConnection: RequestConnectionScreen,
    Thankyou: ThankyouScreen
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
