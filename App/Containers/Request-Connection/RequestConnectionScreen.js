import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import RequestConnectionActions from 'App/Stores/RequestConnection/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import styles from './RequestConnectionScreenStyles'
import { Formik } from 'formik'
import { curryN } from 'ramda'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .label('Name')
    .required('Please enter name.'),
  mobile: yup
    .number()
    .label('MobileNumber')
    .required('Please enter mobile number.')
    .min(10, 'Mobile number should be at least 10 digits.')
    .max(10, 'Mobile number should be at least 10 digits.'),
  email: yup
    .string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter valid email.'),
  landMark: yup
    .string()
    .label('LandMark')
    .required('Please enter land mark.'),
  plan: yup
    .string()
    .label('Plan')
    .required('Please choose one of the plan.'),
  address: yup
    .string()
    .label('Address')
    .required('Please enter address.'),
})

class RequestConnection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={Fonts.h3}>Request for connection form</Text>
          <Loader loading={this.props.isLoading} />
          <Formik
            initialValues={{
              name: '',
              plan: '',
              email: '',
              mobileNumber: '',
              landMark: '',
              address: '',
            }}
            onSubmit={(values) => this.props.request(values)}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleSubmit, errors }) => (
              <Fragment>
                <FormInput
                  name="Name"
                  value={values.name}
                  placeholder="Please enter name"
                  autoCapitalize="none"
                  onChangeText={handleChange('name')}
                  iconName="user"
                  iconColor="#2C384A"
                  errorMessage={errors.name}
                  errorStyle={{ fontSize: 10 }}
                />
                {/* <ErrorMessage errorValue={errors.name} /> */}

                <DropDownPicker
                  style={ApplicationStyles.dropdown}
                  items={[
                    { label: '3 months', value: '3 months' },
                    {
                      label: '6 months',
                      value: '6 months',
                    },
                    {
                      label: '1 year',
                      value: '1 year',
                    },
                  ]}
                  placeholder="Please choose plan"
                  placeholderStyle={{ color: 'grey', fontSize: 15 }}
                  itemStyle={{
                    justifyContent: 'center',
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={(text) => curryN(1, handleChange('plan'))(text.value)}
                />
                <ErrorMessage errorValue={errors.plan} />

                <FormInput
                  name="Email"
                  value={values.email}
                  placeholder="Please enter email"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  iconName="email"
                  iconColor="#2C384A"
                  errorMessage={errors.email}
                  errorStyle={{ fontSize: 10 }}
                />
                {/* <ErrorMessage errorValue={errors.email} /> */}

                <FormInput
                  name="mobileNumber"
                  value={values.mobileNumber}
                  placeholder="Please enter mobile number"
                  autoCapitalize="none"
                  onChangeText={handleChange('mobile')}
                  iconName="mobile"
                  iconColor="#2C384A"
                  errorMessage={errors.mobile}
                  errorStyle={{ fontSize: 10 }}
                />
                {/* <ErrorMessage errorValue={errors.mobile} /> */}

                <FormInput
                  name="landMark"
                  value={values.landMark}
                  placeholder="Please enter landMark"
                  autoCapitalize="none"
                  onChangeText={handleChange('landMark')}
                  iconName="address"
                  iconColor="#2C384A"
                  errorMessage={errors.landMark}
                  errorStyle={{ fontSize: 10 }}
                />
                {/* <ErrorMessage errorValue={errors.landMark} /> */}

                <FormInput
                  name="address"
                  value={values.address}
                  placeholder="Please enter address"
                  autoCapitalize="none"
                  onChangeText={handleChange('address')}
                  multiline={true}
                  numberOfLines={4}
                  iconName="address"
                  iconColor="#2C384A"
                  errorMessage={errors.address}
                  errorStyle={{ fontSize: 10 }}
                />
                {/* <ErrorMessage errorValue={errors.address} /> */}

                <FormButton
                  buttonType="solid"
                  onPress={handleSubmit}
                  title="Request"
                  buttonColor="#fff"
                />
              </Fragment>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  request: (details) => dispatch(RequestConnectionActions.requestConnection(details)),
})

const mapStateToProps = (state) => ({
  isLoading: state.requestConnection.requestConnectionLoading,
  errorMessage: state.requestConnection.requestConnectionErrorMessage,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestConnection)
