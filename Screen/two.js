import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const DATA =[
    {
        id:1,
        title: 'NVV',
    },
    {
        id:2,
        title : "NKV",
    },
    {
        id:3,
        title :'END',
        
        
    },
    {
        id:4,
        title :'END',
        
        
    },
    {
        id:5,
        title :'END',
        
        
    },
    {
        id:6,
        title :'END',
        
        
    },
];
//  type ItemProps = {title: string};/*unresolved*/ 

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.btn}> 
        <View >
            <Text style={{color:'white',fontSize:'16px'}}>Chat</Text>
        </View>
    </TouchableOpacity>
  </View>
);
const menu = props => {
    const {navigation, route} = props;
    const {navigate, goBack} = navigation; 
    return(
        <SafeAreaView> 
            <FlatList  
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title}/> }
                    keyExtractor={item=> item.id}
            
            />

        </SafeAreaView>
    );

} ;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    title: {
        fontSize: 32,
      },
    btn:{
        alignItems :'center',justifyContent:'center',
        width :"25%",
        borderColor : "black",
        backgroundColor : 'red',
        borderWidth :1,
        height :'50px',
        left : '240px',
    }  
      
  });
export default menu;