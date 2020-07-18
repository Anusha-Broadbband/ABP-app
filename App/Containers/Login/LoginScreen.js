import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles } from 'App/Theme'
import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import styles from "./LoginScreenStyles"

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userDetails !== this.props.userDetails) {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ApplicationStyles.input}
          underlineColorAndroid="transparent"
          placeholder="User Id"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ userName: text })}
        />

        <TextInput
          style={ApplicationStyles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ password: text })}
        />

        <TouchableOpacity
          style={ApplicationStyles.button}
          onPress={() => this.props.login(this.state.userName, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Login </Text>
        </TouchableOpacity>
        {this.props.isLoading && <Text>Logging in</Text>}
        {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  userDetails: state.login.userDetails,
  isLoading: state.login.loginLoading,
  errorMessage: state.login.loginErroMessage,
})

const mapDispatchToProps = (dispatch) => ({
  login: (userName, password) => dispatch(LoginActions.authenticate(userName, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
