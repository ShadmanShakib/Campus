import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SignInHome = () => {
    const navigation=useNavigation()
    return (
        <View>
            <Button 
            title="Sign in as Student"
            onPress={()=>navigation.navigate('Student Sign In')}
            />
            <Button 
            title="Sign in as Company"
            onPress={()=>navigation.navigate('Company Sign In')}
            />
            <Button 
            title="Sign in as Alumni"
            onPress={()=>navigation.navigate('Alumni Sign In')}
            />
               <Button 
            title="Sign in as Admin"
            onPress={()=>navigation.navigate('Admin Sign In')}
            />
            
        </View>
    )
}

export default SignInHome
