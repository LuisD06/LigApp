import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserForm } from '../../organisms/user-form/user-form';
import { UserLoginStyle } from './user-login-style';
export const UserLogin = () => {
  return (
    <SafeAreaView style={UserLoginStyle.screen}>
      <ImageBackground source={require('./../../../assets/img/background.jpg')} style={UserLoginStyle.imageWrapper}>
        <View style={UserLoginStyle.transparencyWrapper}>
          <Text style={UserLoginStyle.title}>
            LigApp
          </Text>
          <View style={UserLoginStyle.formWrapper}>
            <UserForm/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}