import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Home from './Composants/Home';
import Screen from './Composants/Screen';
import Historique from "./Composants/Historique";
import LoadingPage from "./Composants/LoadingPage";
import Seance from './Composants/Seance';
import MonProvider from './Composants/MonProvider';
import MonImage from './Ressource/images/profile.jpg'
import Profile from './Composants/Profile';
import Loging from './Composants/Loging';
import { useContext, useEffect, useState } from 'react';
import { Moncontext } from './Composants/MonProvider';
import hamber from './Ressource/images/hamber.png'
import { useNavigation } from '@react-navigation/native';

const Main=()=>{
 
  const stack = createNativeStackNavigator();
  const { globalImage, userData, ModifierUserDat, globalCitations } = useContext(Moncontext);
 const [localnom, setlocalnom]=useState("");

  let userDataObject;
  useEffect(() => {
    if (userData) {
      const userDataObject = typeof userData === 'string' ? JSON.parse(userData) : userData;
      console.log('userData.nom:', userDataObject.nom);
      setlocalnom(userDataObject.nom);
    }
  }, [userData]);

const navigation = useNavigation();
//     loadingPage
  return(


 <stack.Navigator  initialRouteName='loadingPage'  >

 <stack.Screen   name='screen'  component={Screen}   />
 <stack.Screen   name='historique'  component={Historique}  
 options={{
  headerTitleAlign:"center"
 }}
 />
 <stack.Screen   name='loging'  component={Loging} 
 options={{
  title:"CREEZ VOTRE COMPTE",
  headerTitleAlign: 'center',
  headerLeft:()=>(
    <View>

    </View>
  )
 }}   />
 <stack.Screen   name='seance'  component={Seance} 
 options={ {
  title:'NOUVELLE SEANCE',
  headerTitleAlign:'center'
 } }   />
 <stack.Screen   name='profile'  component={Profile} 
 options={{
  headerTitleAlign: 'center',
 }}

 />
  <stack.Screen   name='home'  component={Home}  
    options={{
      title:  `Bienvenue , Mr ${localnom} `  ,
      headerStyle: {
        backgroundColor: '#838996', 
      },
      headerTintColor: 'black', 
    headerLeft:()=>(
      <View>

      </View>
    ) ,
headerRight:()=>(
  <View style={{ marginRight: 10 }}>
   <TouchableOpacity onPress={()=>{
   
   navigation.navigate('profile');
   }} >
   < Image source={hamber}  style={{ 
      width:50, height:50
    }}  />
   </TouchableOpacity>
  </View>
), 

    }}
  
   />    
  <stack.Screen   name='loadingPage'  component={LoadingPage} 
  options={{ headerShown:false}}  />  


 </stack.Navigator>
 



  )

}

export default function App() {
  
  //const { globalImage, userData, ModifierUserDat, globalCitations } = useContext(Moncontext);
 // const navigation = useNavigation();
  return (
    < NavigationContainer >
  <MonProvider>   
  <Main  />
 </MonProvider>
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
});
