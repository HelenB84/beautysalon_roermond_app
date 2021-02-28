import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Homescreen from "./Screens/Homescreen";
import ViewClients from "./Screens/ViewClients";

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen}/>
          <Stack.Screen name="ViewClients" component={ViewClients}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 250,
    height: 90,
    marginBottom: 25,
  },

  text1:{
      marginBottom: 25,
      fontWeight: "500"
  },

  text2:{
      fontWeight: "500",
  },

  input:{
      backgroundColor: '#648081',
      height:40,
      width: "auto",
      padding: 10,
      borderRadius:4,
  }
});

export default App;
