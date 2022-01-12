import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";
import { Login } from "../../screens/Login";
import { SignUp } from "../../screens/SignUp";


const Stack= createNativeStackNavigator();
function Routes() {


return(
  <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        
        </Stack.Navigator>
    </NavigationContainer>


);
}
export default Routes;