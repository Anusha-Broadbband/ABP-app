import Loader from 'App/Components/Loader'
import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './UserIdScreenStyles'

class UserIdScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <Text style={Fonts.h3}>User Id</Text>
        <TextInput
          style={ApplicationStyles.input}
          underlineColorAndroid="transparent"
          placeholder="User Id"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ userId: text })}
        />

        <TouchableOpacity
          style={ApplicationStyles.button}
          onPress={() => this.props.verifyUserId(this.state.userId)}
        >
          <Text style={styles.submitButtonText}> Next </Text>
        </TouchableOpacity>
        {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.login.loginLoading,
  errorMessage: state.login.loginErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  verifyUserId: (userId) => dispatch(LoginActions.verifyUserId(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIdScreen)