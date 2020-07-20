import Loader from 'App/Components/Loader'
import LoginActions from 'App/Stores/Login/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import FormInput from '../../Components/FormInput/FormInput'
import styles from './UserIdScreenStyles'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  userId: yup
    .string()
    .label('user id')
    .required('Please enter user id.'),
})
class UserIdScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <Text style={Fonts.h3}>User Id</Text>

        <Formik
          initialValues={{
            userId: '',
          }}
          onSubmit={(values) => this.props.verifyUserId(values.userId)}
          validationSchema={validationSchema}
        >
          {({ handleChange, values, handleSubmit, errors }) => (
            <Fragment>
              <FormInput
                name="userId"
                value={values.userId}
                placeholder="Please enter name"
                autoCapitalize="none"
                onChangeText={handleChange('userId')}
                iconName="user"
                iconColor="#2C384A"
                errorMessage={errors.userId}
                errorStyle={{fontSize: 10}}
              />
              {/* <ErrorMessage errorValue={errors.userId} /> */}

              <FormButton
                buttonType="solid"
                onPress={handleSubmit}
                title="Next"
                buttonColor="#fff"
                butt
              />
              {this.props.errorMessage && <Text>{this.props.errorMessage}</Text>}
            </Fragment>
          )}
        </Formik>
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
