import { View, Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import MyImage from "../Ressource/images/profile.jpg"
import muscle from "../Ressource/images/muscles.png"
import { StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react"; 
import { Moncontext } from "./MonProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile=({navigation})=>{

   
    const {globalImage,userData, ModifierUserDat, globalCitations} = useContext(Moncontext);
    const[localnom, setlocalnom]=useState("test");
    const[localtaille, setlocaltaille]=useState(0);
    const[localmasse, setlocalmasse]=useState(0);

    useEffect(() => {
        if (userData) {
          const userDataObject = typeof userData === 'string' ? JSON.parse(userData) : userData;
          console.log('userData.nom:', userDataObject.nom);
          setlocalnom(userDataObject.nom);
          setlocaltaille(userDataObject.taille);
          setlocalmasse(userDataObject.masse);
        }
      }, [userData]);

    //console.log( JSON.stringify(userData) );

    const deleteFormData = async () => {
        try {
          // Supprimer les données de AsyncStorage en utilisant la clé 'userData'
          await AsyncStorage.removeItem('userData');
          await removeDataFromAsyncStorage();
          console.log('Données supprimées avec succès !');
        } catch (error) {
          console.error('Erreur lors de la suppression des données :', error);
          Alert.alert("Une erreur s'est produite lors de la suppression des données.");
        }
      };
      
      const removeDataFromAsyncStorage = async () => {
        try {
            await AsyncStorage.removeItem('stackExercices');
            console.log(`Les données  ont été supprimées avec succès.`);
        } catch (error) {
            console.error('Erreur lors de la suppression des données depuis AsyncStorage:', error);
        }
    };

    return(
        <View
        style={{ 
             display:"flex",
             flexDirection:"column",
             width:"100%",
             height:"100%", 
             backgroundColor:"#838996"
        }}
        >
           <View style={{ width:"100%", height:"50%", alignSelf:"center" }}  >
           <Image source={muscle} style={{ borderRadius:50, 
             alignSelf:"center",height:"100%", margin:20  }}  />
           </View>
           <View style={{width:"100%",   alignSelf:"center",
           height:"100%", margin:20, 
        display:"flex", flexDirection:"column"  }} >
           <TouchableOpacity style={monstyle.mestouchable} >
               <Text style={ monstyle.text } > {localnom} </Text>
            </TouchableOpacity >
            <TouchableOpacity style={monstyle.mestouchable}  >
                <Text style={ monstyle.text }  >  {localtaille} cm</Text>
            </TouchableOpacity  >
            <TouchableOpacity style={monstyle.mestouchable}  >
                <Text style={ monstyle.text }  >  {localmasse} kg</Text>
            </TouchableOpacity >
            <TouchableOpacity style={monstyle.mestouchable}  >
                <Text style={ monstyle.text }  > IMC { (localmasse/((localtaille/100)*(localtaille/100) )).toFixed(2) } </Text>
            </TouchableOpacity >


            <View style={{ width:"100%", display:"flex", flexDirection:"row", alignSelf:"center" }} >
            <TouchableOpacity style={{ 
                width:"40%",
                backgroundColor:"#4CAF50", borderRadius:10, margin:"5%"
            }}  >
                <Text style={ monstyle.text } onPress={()=>{
                    navigation.navigate('loging');
                }}   >METTRE A JOUR</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{ width:"40%",
                backgroundColor:"#800000", borderRadius:10 , margin:"5%" }}  >
                <Text style={ monstyle.text }  onPress={deleteFormData}  > SUPPRIMER MON COMPTE </Text>
            </TouchableOpacity >
            </View>
           </View>
            
        </View>
    )
}
 
const monstyle = StyleSheet.create({

    mestouchable:{
        width:"80%",
        backgroundColor:"whitesmoke",
        padding:5,
        margin:5,
        alignSelf:"center",
        borderRadius:10,
        
    },
    text:{
        alignSelf:"center",
        textAlign:"center"
    }

})

export default Profile;