import { ApplicationStyles, Fonts } from 'App/Theme'
import React, { Component } from 'react'
import {
   Text,

   TextInput, TouchableOpacity, View
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import styles from './RequestConnectionStyles'


class RequestConnection extends Component {
  state = {
    name: '',
    plan: '1 year',
    email: '',
    mobileNumber: '',
    landMark: '',
    address: '',
  }
  request = () => {}

  render() {
    return (
      <KeyboardAwareScrollView>
        <Text style={Fonts.h3}>Request for connection form</Text>
        <View style={styles.container}>
          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(name) => this.setState({ name })}
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
            defaultValue={this.state.plan}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) =>
              this.setState({
                plan: item.value,
              })
            }
          />

          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Mobile Number"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
          />

          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Land Mark"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(landMark) => this.setState({ landMark })}
          />

          <TextInput
            style={ApplicationStyles.input}
            underlineColorAndroid="transparent"
            placeholder="Address"
            placeholderTextColor="black"
            autoCapitalize="none"
            multiline={true}
            numberOfLines={4}
            onChangeText={(address) => this.setState({ address })}
          />
          <TouchableOpacity
            style={ApplicationStyles.button}
            onPress={() => this.request(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  request: (details) => dispatch(requestActions.submit(details)),
})
export default connect(
  null,
  mapDispatchToProps
)(RequestConnection)
