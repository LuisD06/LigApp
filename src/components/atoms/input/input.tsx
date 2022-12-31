import React, { FC } from 'react'
import { TextInput, View } from 'react-native'
import { InputStyle } from './input-style';
interface InputProps {
  placeholder: string
  onChange: (value:string) => void
  variant?: 'default' | 'notRounded'
}

export const Input: FC<InputProps> = ({ placeholder, onChange, variant='default' }) => {
  return (
    <View style={[InputStyle.wrapper, InputStyle[variant]]}>
      <TextInput 
        style={[InputStyle.text]} 
        placeholderTextColor='#fff'  
        placeholder={placeholder} onChangeText={onChange}
      />
    </View>
  );
}