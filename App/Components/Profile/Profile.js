
import { Avatar } from 'react-native-elements'
import { View, Text } from 'react-native'
import React from 'react'
import {Fonts} from 'App/Theme'
import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View
        style={{
          height: 250,
          width: '100%',
          alignItems: 'center',
          padding: 30,
        }}
      >
        <Avatar
          size="xlarge"
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          overlayContainerStyle={{ backgroundColor: 'grey' }}
          onPress={() => alert('Works!')}
          activeOpacity={0.7}
        />
        <Text style={[Fonts.h3, { padding: 5 }]}>Hi, {this.props.userId}</Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  userId: state.login.userId,
})



export default connect(
  mapStateToProps,
  null
)(Profile)

