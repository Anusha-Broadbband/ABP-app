import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import SignupActions from 'App/Stores/Signup/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import styles from './SignupScreenStyles'

class SignupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: '',
      confirmPassword: '',
      matched: false,
    }
  }

  handleOnSignUp = () => {
    const { userId, password } = this.state
    this.props.signup({ userId, password })
  }

  verifyPassword = () => {
    const { password, confirmPassword } = this.state
    if (password === confirmPassword) {
      this.setState({
        matched: true,
      })
    } else {
      this.setState({
        matched: false,
      })
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <Text style={Fonts.h3}>Sign Up</Text>
        <View style={styles.container}>
          <Loader loading={this.props.isLoading} />
          <FormInput
            name="User id"
            defaultValue={this.props.userId}
            placeholder="User id"
            autoCapitalize="none"
            onChangeText={(userId) => this.setState({ userId })}
            iconName="user"
            iconColor="#2C384A"
            editable={false}
          />

          <FormInput
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={(password) =>
              this.setState({ password }, () => {
                this.state.confirmPassword ? this.verifyPassword() : null
              })
            }
            iconName="lock"
            iconColor="#2C384A"
          />

          <FormInput
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder="Enter confirm password"
            secureTextEntry
            onChangeText={(confirmPassword) => {
              this.setState({ confirmPassword }, () => {
                this.verifyPassword()
              })
            }}
            iconName="lock"
            iconColor="#2C384A"
          />

          {this.state.confirmPassword ? (
            this.state.matched ? (
              <Icon name="check" color="green" size={20} />
            ) : (
              <Icon name="cross" color="red" size={20} />
            )
          ) : null}

          <View style={ApplicationStyles.button}>
            <FormButton
              buttonType="outline"
              onPress={this.handleOnSignUp}
              title="Sign Up"
              buttonColor="#fff"
            />
          </View>

          {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signup: (details) => dispatch(SignupActions.signup(details)),
})

export const mapStateToProps = (state) => ({
  userId: state.login.userId,
  isLoading: state.signup.isLoading,
  errorMessage: state.signup.errorMessage,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen)
