import React from 'react'
import { Platform, Text, View, TextInput, Button, Alert} from 'react-native'
import { connect } from 'react-redux'
import {Helpers, Metrics } from 'App/Theme'
import LoginActions from 'App/Stores/Login/Actions'


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */
class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      password: null
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props, "hello")
    if(prevProps.userDetails !== this.props.userDetails) {
      this.props.navigation.navigate('Home')
    }
  }
  
  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        <View style={{alignContent: 'center', justifyContent: 'center'}}>
          <Text>User Id:</Text>
          <TextInput
          style={{height: 40, borderColor: "gray", borderWidth: 0.2}}
          placeholder="Enter username"
          onChangeText={text => this.setState({userName: text})}
         />
         <Text>Password:</Text>
          <TextInput
          style={{height: 40, borderColor: "gray", borderWidth: 0.2}}
          placeholder="Enter password"
          onChangeText={text => this.setState({password: text})}
         />
         <Button
        title="Login"
        color="#f194ff"
        onPress={() => this.props.login(this.state.userName, this.state.password)}
      />
      {this.props.isLoading && <Text>Logging in</Text>}
      {this.props.errorMessage&& <Text>{this.props.errorMessage}</Text>}
        </View>
      </View>
    )
  }

}

LoginScreen.propTypes = {
}

const mapStateToProps = (state) => ({
  userDetails: state.login.userDetails,
  isLoading: state.login.loginLoading,
  errorMessage: state.login.loginErroMessage
})

const mapDispatchToProps = (dispatch) => ({
  login: (userName, password)=> dispatch(LoginActions.authenticate(userName, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
