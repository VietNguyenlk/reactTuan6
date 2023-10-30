import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./Screen/fisrt.js"
import menu  from './Screen/two.js';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'   screenOptions={{
          headerShown: true,
          headerStyle:{
            backgroundColor :'orange'
          } ,
          headerTintColor: 'red',
          headerTitle :'Kula',
          headerRight : () => (
            <Button title="Update count" />
          ),

        }} >

          <Stack.Screen    name="HomeScreen" component={HomeScreen}/>
        

          <Stack.Screen name= "menu" component={menu}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



