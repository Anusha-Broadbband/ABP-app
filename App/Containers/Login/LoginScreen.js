import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import styles from './LoginScreenStyles'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <Text style={Fonts.h3}>Login</Text>

        <FormInput
          name="userId"
          value={this.state.userId}
          placeholder="Please enter user id"
          autoCapitalize="none"
          onChangeText={(userId) => this.setState({ userId })}
          editable={false}
          iconName="user"
          iconColor="#2C384A"
        />

        <FormInput
          name="password"
          value={this.state.password}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
          iconName="lock"
          iconColor="#2C384A"
        />

        <View style={ApplicationStyles.button}>
          <FormButton
            buttonType="outline"
            onPress={() => this.props.login(this.state.userId, this.state.password)}
            title="Login"
            buttonColor="#fff"
          />
        </View>

        {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  userId: state.login.userId,
  isLoading: state.login.loginLoading,
  errorMessage: state.login.loginErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  login: (userId, password) => dispatch(LoginActions.authenticate(userId, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
