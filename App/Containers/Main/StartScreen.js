import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './StartScreenStyle'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient colors={['#004d40', '#009688']} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
)

const App = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleText}>ABP</Text>
      <View style={styles.screenContainer}>
        <AppButton title="Login!" size="sm" backgroundColor="#007bff"  onPress={()=> navigation.navigate('Login')}/>
        <AppButton title="Request for a connection" size="sm" backgroundColor="#007bff" onPress={()=> navigation.navigate('RequestConnection')}/>
        <AppButton title="Sign up" size="sm" backgroundColor="#007bff" />
      </View>
    </View>
  )
}

export default App
