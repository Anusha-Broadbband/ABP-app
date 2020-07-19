import HomeScreen from 'App/Containers/Home/HomeScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import StartScreen from 'App/Containers/Main/StartScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import RequestConnectionScreen from 'App/Containers/Request-Connection/RequestConnectionScreen'
import ThankyouScreen from 'App/Containers/Thankyou/ThankyouScreen'
import UserIdScreen from '../Containers/UserId/UserIdScreen'
import SignupScreen from '../Containers/Signup/SignupScreen'
const StackNavigator = createStackNavigator(
  {
    Main: StartScreen,
    Login: LoginScreen,
    Home: HomeScreen,
    RequestConnection: RequestConnectionScreen,
    Thankyou: ThankyouScreen,
    UserId: UserIdScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
