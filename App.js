<<<<<<< HEAD
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

=======
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,SignIn,SignUpScreen } from './screens';


const Stack = createStackNavigator();

function App() {
  const [isSignIn, setIsSignIn]=React.useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isSignIn?
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
          :
          <>
          <Stack.Screen name="Sign In" component={SignIn}/>
           <Stack.Screen name="Sign Up" component={SignUpScreen}/>
          </>
        }
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

>>>>>>> 814fd7d7d51dc23aca62e6e12fd4c5bac6ac5058
export default App;