import React from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'
import IonIcon from 'react-native-vector-icons/Ionicons'

class Drawer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <IonIcon name={'menu'} size={32} color={'#fff'} />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Drawer)
