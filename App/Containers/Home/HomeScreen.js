import Drawer from 'App/Components/Drawer/Drawer'
import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import {Header} from 'react-native-elements'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      password: null,
    }
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={<Drawer/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Text>Welcome {this.props.userDetails.name}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.login.userDetails,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
