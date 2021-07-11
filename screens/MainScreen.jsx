import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';
import HomeScreen from './HomeScreen';
import { WriteBlog } from '../components/Student';
  

  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }
  
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  export default function MainScreen() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Write Blog" component={WriteBlog}/>
      </Drawer.Navigator>
    );
  }