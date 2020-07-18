import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './ThankyouScreenStyles'
import { Fonts } from 'App/Theme'

class ThankyouScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={Fonts.h3}>
          Thank you for registering with us. Will contact soon to this number{' '}
          {this.props.connectionDetails.mobileNumber}. Your user id will get sent to this{' '}
          {this.props.connectionDetails.email}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  connectionDetails: state.requestConnection.connectionDetails,
})

export default connect(
  mapStateToProps,
  null
)(ThankyouScreen)
