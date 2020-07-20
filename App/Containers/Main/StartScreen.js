import React, { Fragment } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './StartScreenStyle'
import { Header } from 'react-native-elements'
import { Colors } from 'App/Theme'
import Icon from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient colors={['#004d40', '#009688']} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
)

const App = ({ navigation }) => {
  return (
    <Fragment>
      <Header
        backgroundColor={Colors.primary}
        centerComponent={{
          text: 'Welcome to ABP Broadband',
          style: { fontSize: 18, color: 'white' },
        }}
      />

      <View />
      <View style={styles.screenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('UserId')}>
          <View style={styles.card}>
            <Icon name="login" size={40} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 20, margin: 10 }}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RequestConnection')}>
          <View style={styles.card}>
            <IonIcon name="add" size={40} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 20, margin: 10, textAlign: 'center' }}>
              New Connection
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default App
