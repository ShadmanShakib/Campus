import React from 'react';
import {View,Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function HomeScreen() {
    const naviagation=useNavigation()
    return (
        <View>
            <Text>
                This is HomeScreen
                <Button
                title="Sign Out"
                onPress={()=>localStorage.clear("authToken")}
                 />
            </Text>
           
        </View>
    )
}

export default HomeScreen
