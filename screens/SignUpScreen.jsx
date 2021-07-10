import React from 'react'
import { View, Text } from 'react-native';
import {SignUpForm} from '../components/auth'

const SignUpScreen = () => {
    const onSubmit=(data)=>console.log(data)
    return (
        <View>
          <SignUpForm onSubmit={onSubmit}/>
        </View>
    )
}

export default SignUpScreen
