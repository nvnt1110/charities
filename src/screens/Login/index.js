import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import BaseButton from '../../common/components/BaseButton';
import BaseInput from '../../common/components/Input';

import styles from './styles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Text style={styles.logo}>Login</Text>
                    </View>
                    <View style={styles.containerForm}>
                        <BaseInput placeholder='Please enter username' onChangeText={text => setUsername(text)} styleContainer={styles.input} />
                        <BaseInput placeholder='Please enter password' onChangeText={text => setPassword(text)} styleContainer={styles.input} />
                        <BaseButton>Login</BaseButton>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Login;
