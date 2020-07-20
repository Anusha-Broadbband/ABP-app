import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import styles from './LoginScreenStyles'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .label('Password')
    .required('Please enter password.'),
})
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <Text style={Fonts.h3}>Login</Text>

        <Formik
          initialValues={{
            password: '',
          }}
          onSubmit={(values) => {
            this.props.login(this.props.userId, values.password)
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, values, handleSubmit, errors }) => (
            <Fragment>
              <FormInput
                name="userId"
                placeholder="Please enter user id"
                autoCapitalize="none"
                defaultValue={this.props.userId}
                editable={false}
                iconName="user"
                iconColor="#2C384A"
              />

              <FormInput
                name="password"
                value={values.password}
                placeholder="Enter password"
                secureTextEntry
                onChangeText={handleChange('password')}
                iconName="lock"
                iconColor="#2C384A"
              />
              <ErrorMessage errorValue={errors.password} />

              <View style={ApplicationStyles.button}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="Login"
                  buttonColor="#fff"
                />
              </View>
              {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
            </Fragment>
          )}
        </Formik>
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
