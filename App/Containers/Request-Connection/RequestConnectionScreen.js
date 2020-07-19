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
import styles from './RequestConnectionScreenStyles'
import { Formik } from 'formik'
import { curryN } from 'ramda'

class RequestConnection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  curry = (fn, value) => fn(value)

  render() {
    return (
      <KeyboardAwareScrollView>
        <Text style={Fonts.h3}>Request for connection form</Text>
        <View style={styles.container}>
          <Loader loading={this.props.isLoading} />
          <Formik
            initialValues={{
              name: '',
              plan: '1 year',
              email: '',
              mobileNumber: '',
              landMark: '',
              address: '',
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values))
            }}
          >
            {({ handleChange, values, handleSubmit }) => (
              <Fragment>
                <FormInput
                  name="Name"
                  value={values.name}
                  placeholder="Please enter name"
                  autoCapitalize="none"
                  onChangeText={handleChange('name')}
                  iconName="user"
                  iconColor="#2C384A"
                />

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
                  itemStyle={{
                    justifyContent: 'center',
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={(text) => curryN(1, handleChange('plan'))(text.value)}
                />

                <FormInput
                  name="Email"
                  value={values.email}
                  placeholder="Please enter email"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  iconName="email"
                  iconColor="#2C384A"
                />

                <FormInput
                  name="mobileNumber"
                  value={values.mobileNumber}
                  placeholder="Please enter mobile number"
                  autoCapitalize="none"
                  onChangeText={handleChange('mobileNumber')}
                  iconName="mobile"
                  iconColor="#2C384A"
                />

                <FormInput
                  name="landMark"
                  value={values.landMark}
                  placeholder="Please enter landMark"
                  autoCapitalize="none"
                  onChangeText={handleChange('landMark')}
                  iconName="address"
                  iconColor="#2C384A"
                />

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
                />

                <View style={ApplicationStyles.button}>
                  <FormButton
                    buttonType="outline"
                    onPress={handleSubmit}
                    title="Request"
                    buttonColor="#fff"
                  />
                </View>
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
