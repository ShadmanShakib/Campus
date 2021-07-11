import React from 'react';
import {View,Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'



function HomeScreen({naviagation}) {
    const navigation=useNavigation()
    return (
        <View>
            <Text>
                This is HomeScreen
                <Button
                title="Sign Out"
                onPress={()=>localStorage.clear("authToken")}
                 />
                       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />

                 
            </Text>
           
        </View>
    )
}

export default HomeScreen
