import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { LoginStyle } from "./LoginStyle";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
    Main: undefined;
}

export const LoginScreen = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleLogin = () => {
        navigation.navigate('Main');
    };
    return (
        <SafeAreaView style={LoginStyle.screenContainer}>
            <View style={LoginStyle.titleContainer}>
                <ImageBackground source={require('./../../assets/img/pelota.png')} style={LoginStyle.imageContainer} imageStyle={LoginStyle.image}>
                    <View style={LoginStyle.transparentContainer}>
                        <Text style={LoginStyle.title} >LigApp</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={LoginStyle.formContainer}>
                <TextInput value={user} onChangeText={setUser} placeholder="User" style={LoginStyle.input}/>
                <TextInput value={password} onChangeText={setPassword} placeholder="Password" style={LoginStyle.input}/>
                <TouchableHighlight onPress={handleLogin} style={LoginStyle.button} underlayColor={'rgba(45,194,176,1)'} activeOpacity={0.9}>
                    <Text style={LoginStyle.buttonTitle}>Login</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};
