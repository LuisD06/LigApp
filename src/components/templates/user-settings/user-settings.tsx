import React from 'react'
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../atoms/button/button';
import { SettingsForm } from '../../organisms/settings-form/settings-form';
import { UserSettingsStyle } from './user-settings-style';
export const UserSettings = () => {
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={UserSettingsStyle.wrapper}>
      <Text>Ajustes</Text>
      <View style={UserSettingsStyle.imageWrapper}>
        <Image style={UserSettingsStyle.image} source={require('./../../../assets/img/user.png')}/>
      </View>
      <View style={UserSettingsStyle.formWrapper}>
        <SettingsForm/>
      </View>
      <View style={UserSettingsStyle.buttonWrapper}>
        <Button text='Salir' onPress={() => console.log('Salir')} variant='void' textSize='small' color='primary'/>
      </View>
    </LinearGradient>
  );
}