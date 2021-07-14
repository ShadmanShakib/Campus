import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "./screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AlumniSignIn,
  AlumniSignUp,
  CompanySignIn,
  CompanySignUp,
  SignInHome,
  AdminSignIn,
  StudentSignIn,
  StudentSignUp,
} from "./screens/Auth";

function App() {
  //for make Stack screen
  const Stack = createStackNavigator();

  //checking is user is authenticated or not
  const [isSignIn, setIsSignIn] = React.useState(false);

  //Checking is app is loaded or not
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const authToken = AsyncStorage.getItem("authToken");
    setIsLoading(false);
    if (authToken) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [isSignIn]);
  if (isLoading)
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignIn ? (
          <>
            <Stack.Screen name="Home" component={MainScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Sign In" component={SignInHome} />
            <Stack.Screen name="Alumni Sign In" component={AlumniSignIn} />
            <Stack.Screen name="Alumni Sign Up" component={AlumniSignUp} />
            <Stack.Screen name="Company Sign In" component={CompanySignIn} />
            <Stack.Screen name="Company Sign Up" component={CompanySignUp} />
            <Stack.Screen name="Admin Sign In" component={AdminSignIn} />
            <Stack.Screen name="Student Sign In" component={StudentSignIn} />
            <Stack.Screen name="Student Sign Up" component={StudentSignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
