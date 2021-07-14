import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ naviagation }) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>
        This is HomeScreen
        <Button
          title="Sign Out"
          onPress={() => AsyncStorage.removeItem("authToken")}
        />
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      </Text>
    </View>
  );
}

export default HomeScreen;
