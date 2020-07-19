import Loader from 'App/Components/Loader'
import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import FormInput from '../../Components/FormInput/FormInput'
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

        <FormInput
          name="userId"
          value={this.state.userId}
          placeholder="Please enter name"
          autoCapitalize="none"
          onChangeText={(userId) => this.setState({ userId })}
          iconName="user"
          iconColor="#2C384A"
        />

        <View style={ApplicationStyles.button}>
          <FormButton
            buttonType="outline"
            onPress={() => this.props.verifyUserId(this.state.userId)}
            title="Next"
            buttonColor="#fff"
          />
        </View>
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
