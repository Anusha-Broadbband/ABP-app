import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import SignupActions from 'App/Stores/Signup/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import styles from './SignupScreenStyles'
import * as yup from 'yup'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import { Formik } from 'formik'

const validationSchema = yup.object({
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

class SignupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <Text style={Fonts.h3}>Sign Up</Text>
        <View style={styles.container}>
          <Loader loading={this.props.isLoading} />
          <Formik
            initialValues={{
              userId: this.props.userId,
              password: '',
              confirmPassword: '',
            }}
            onSubmit={({ userId, password }) => this.props.signup({ userId, password })}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleSubmit, errors }) => (
              <Fragment>
                <FormInput
                  name="User id"
                  defaultValue={values.userId}
                  placeholder="User id"
                  autoCapitalize="none"
                  iconName="user"
                  iconColor="#2C384A"
                  editable={false}
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

                <FormInput
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="Enter confirm password"
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  iconName="lock"
                  iconColor="#2C384A"
                />

                <ErrorMessage errorValue={errors.confirmPassword} />

                <View style={ApplicationStyles.button}>
                  <FormButton
                    buttonType="outline"
                    onPress={handleSubmit}
                    title="Sign Up"
                    buttonColor="#fff"
                  />
                </View>
                {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
              </Fragment>
            )}
          </Formik>
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
