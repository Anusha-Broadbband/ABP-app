import { Helpers, Metrics } from 'App/Theme'
import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      password: null
    }
  }
  
  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        <View style={{alignContent: 'center', justifyContent: 'center'}}>
      <Text>Welcome {this.props.userDetails.name}</Text>
        </View>
      </View>
    )
  }

}

HomeScreen.propTypes = {
}

const mapStateToProps = (state) => ({
  userDetails: state.login.userDetails,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)