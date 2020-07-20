import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Icon name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor='grey'
      name={name}
      value={value}
      placeholder={placeholder}
      style={styles.input}
      containerStyle={{margin: 0}}
    />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    margin: 5
  },
  iconStyle: {
    marginRight: 10
  }
})

export default FormInput