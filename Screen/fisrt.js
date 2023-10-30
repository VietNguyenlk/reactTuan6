import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = props => {
    const {navigation, route} = props;
    const {navigate, goBack} = navigation; 
    return(
        <View style = {styles.container}>
                <TouchableOpacity onPress={()=>navigate('menu')}>
                  <View>Test</View>
                </TouchableOpacity>
        </View>
    );

} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default HomeScreen;