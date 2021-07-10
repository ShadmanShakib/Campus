import React from 'react';
import {View,Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function HomeScreen() {
    const naviagation=useNavigation()
    return (
        <View>
            <Text>
                This is HomeScreen

            </Text>
            <Button
            onPress={()=>naviagation.navigate("Sign In")}
             title="Sign In" 
             />
        </View>
    )
}

export default HomeScreen
