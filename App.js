import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SignIn, SignUpScreen } from "./screens";

const Stack = createStackNavigator();

function App() {
  const [isSignIn, setIsSignIn] = React.useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
