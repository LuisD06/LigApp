import React, { FC } from 'react'
import { TextInput, View } from 'react-native'
import { InputStyle } from './input-style';
interface InputProps {
  placeholder: string
  onChange: (value:string) => void
  variant?: 'default' | 'notRounded'
  secureTextEntry?: boolean
}

export const Input: FC<InputProps> = ({ placeholder, onChange, variant='default', secureTextEntry=false }) => {
  return (
    <View style={[InputStyle.wrapper, InputStyle[variant]]}>
      <TextInput 
        style={[InputStyle.text]} 
        placeholderTextColor='#fff'  
        placeholder={placeholder} 
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}