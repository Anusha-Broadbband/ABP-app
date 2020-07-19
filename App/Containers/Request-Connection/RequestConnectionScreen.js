import FormInput from 'App/Components/FormInput/FormInput'
import Loader from 'App/Components/Loader'
import RequestConnectionActions from 'App/Stores/RequestConnection/Actions'
import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import FormButton from '../../Components/FormButton/FormButton'
import styles from './RequestConnectionScreenStyles'
class RequestConnection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      plan: '1 year',
      email: '',
      mobileNumber: '',
      landMark: '',
      address: '',
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <Text style={Fonts.h3}>Request for connection form</Text>
        <View style={styles.container}>
          <Loader loading={this.props.isLoading} />
          <FormInput
            name="Name"
            value={this.state.userId}
            placeholder="Please enter name"
            autoCapitalize="none"
            onChangeText={(name) => this.setState({ name })}
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
            onChangeItem={(item) =>
              this.setState({
                plan: item.value,
              })
            }
          />

          <FormInput
            name="Email"
            value={this.state.email}
            placeholder="Please enter email"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
            iconName="email"
            iconColor="#2C384A"
          />

          <FormInput
            name="mobileNumber"
            value={this.state.mobileNumber}
            placeholder="Please enter mobile number"
            autoCapitalize="none"
            onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
            iconName="mobile"
            iconColor="#2C384A"
          />

          <FormInput
            name="landMark"
            value={this.state.landMark}
            placeholder="Please enter landMark"
            autoCapitalize="none"
            onChangeText={(landMark) => this.setState({ landMark })}
            iconName="address"
            iconColor="#2C384A"
          />

          <FormInput
            name="address"
            value={this.state.address}
            placeholder="Please enter address"
            autoCapitalize="none"
            onChangeText={(address) => this.setState({ address })}
            multiline={true}
            numberOfLines={4}
            iconName="address"
            iconColor="#2C384A"
          />

          <View style={ApplicationStyles.button}>
            <FormButton
              buttonType="outline"
              onPress={() => this.props.request(this.state)}
              title="Request"
              buttonColor="#fff"
            />
          </View>
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
