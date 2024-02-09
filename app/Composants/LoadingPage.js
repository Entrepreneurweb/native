import { View, Text ,  ImageBackground  } from "react-native";
import { ActivityIndicator } from "react-native";
import MesStyle from "../Styles/MesStyles";
import im1 from '../Ressource/images/im1.jpg';
import im2 from '../Ressource/images/im2.jpg';
import im3 from '../Ressource/images/im3.jpg';
import im4 from '../Ressource/images/im4.jpg';
import im5 from '../Ressource/images/im5.jpg';
import im6 from '../Ressource/images/im6.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { useContext } from "react";
import { Moncontext } from "./MonProvider";



const LoadingPage=({navigation})=>{

    const { globalImage, userData, ModifierUserDat, globalCitations } = useContext(Moncontext);

    const random = Math.ceil(Math.random() * 6);
    const selectedImage = [im1, im2, im3, im4, im5, im6][random - 1];
  
    const getFormData = async () => {
      try {
        const formDataString = await AsyncStorage.getItem('userData');
        if (formDataString !== null) {
          const formData = JSON.parse(formDataString);
          return formData;
        } else {
          console.log('Aucune donnée trouvée dans AsyncStorage.');
          return null;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        return null;
      }
    };
  
    const fetchData = async () => {
      const formData = await getFormData();
      console.log("avant", JSON.stringify(formData));
      if (formData) {
        ModifierUserDat(JSON.stringify(formData));  // Mettez à jour userData avec les données récupérées
       // console.log( "vrai", JSON.stringify(formData))
      } else {
        console.log('Aucune donnée à récupérer.');
      }
    };
  
    useEffect(() => {
      fetchData();
      
    }, []);
  
    console.log("ici"+userData);
    setTimeout(()=>{
        if( userData.nom===null ){
            navigation.navigate('loging');
        }else{
            navigation.navigate('home');
        }
    }, 3000)

    

    return(
        <View style={{
            height:"100%"
            
        }} >

            <ImageBackground  source={ selectedImage } style={{ width:"100%", height:"100%"}}  >
                <View style={{ width:"100%", height:"100%", display:"flex", 
                alignItems:"center", justifyContent:"center" }}  > 
                < ActivityIndicator size="large" color="#0000ff"   />
                </View>

            </ImageBackground>
            
            
        </View>
    )
}

export default LoadingPage;