import React from 'react'
import { Button } from 'react-native-elements'
import { Colors } from 'App/Theme'

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor: buttonColor, borderRadius: 20, height: 40,backgroundColor: Colors.primary}}
    titleStyle={{ color: buttonColor }}
  />
)

export default FormButton