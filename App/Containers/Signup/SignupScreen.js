import Loader from 'App/Components/Loader'
import SignupActions from 'App/Stores/Signup/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import styles from './SignupScreenStyles'
import Icon from 'react-native-vector-icons/Entypo'

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
          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            defaultValue={this.props.userId}
            placeholder="User id"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(userId) => this.setState({ userId })}
          />

          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(password) =>
              this.setState({ password }, () => {
                this.state.confirmPassword ? this.verifyPassword() : null
              })
            }
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextInput
              style={[ApplicationStyles.input, { flex: 1 }]}
              underlineColorAndroid="transparent"
              placeholder="Confirm password"
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={(confirmPassword) => {
                this.setState({ confirmPassword }, () => {
                  this.verifyPassword()
                })
              }}
            />
            {this.state.confirmPassword ? (
              this.state.matched ? (
                <Icon name="check" color="green" size={20}/>
              ) : (
                <Icon name="cross" color="red" size={20}/>
              )
            ) : null}
          </View>

          <TouchableOpacity
            style={ApplicationStyles.button}
            onPress={() =>
              this.props.signup({ userId: this.state.userId, password: this.state.password })
            }
            disabled={!this.state.matched}
          >
            <Text style={styles.submitButtonText}> Sign Up </Text>
            {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
          </TouchableOpacity>
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
