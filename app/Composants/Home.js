import { View, Text, FlatList, Alert  } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import image1 from '../Ressource/images/im1.jpg';
import image2 from '../Ressource/images/im10.jpg';
import { Image } from "react-native"; 
import { useContext } from "react";
import { Moncontext } from "./MonProvider";
import { StyleSheet } from "react-native";
import text from '../Ressource/gifs/eleFronEpa.jpg'

const Home=({navigation})=>{
    const random = Math.ceil(Math.random() * 2);
    const randomCitation = Math.ceil(Math.random() * 20);
    const selectedImage = [image1, image2][random - 1];
    //globalImage,userData, ModifierUserDat

    const {globalImage,userData, ModifierUserDat, globalCitations} = useContext(Moncontext);
       
    const Card = ({ item }) => {
        return (
          <View  style={{ backgroundColor: 'white',
          borderRadius: 8,
          margin: 10,
          padding: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,}}>
            <Image source={item.image} style={{width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    }} />
            <Text style={{ fontSize: 16,
    fontWeight: 'bold',}} >{item.nom}</Text>
          </View>
        );
      };

      const tmp = JSON.parse(userData);
console.log('user '+ tmp.nom);

    return(
        <View style={{ width:"100%", height:"100%" , backgroundColor:"#838996"}} >
            <ImageBackground source={selectedImage} style={{
              width:"100%" , height:250, borderRadius:20,
              marginBottom:20
            }} >
                <View style={{width:"100%",height:"100%",
                    display:"flex",
                    flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: 20

                }} >
                <Text style={{ color:'whitesmoke',
                fontSize:20,
                
                
             }} >
                    FITNESS PROGRESS
                </Text>

                </View>
                
            </ImageBackground>


            <View style={{ display:"flex", flexDirection:"column" }} >
             <View style={{
                width:"100%",
                height:180
             }} >

              <FlatList
        data={globalImage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={true}    />

             </View>




            <TouchableOpacity style={{ backgroundColor:"#4CAF50" ,
             borderRadius:20 , height:30 , margin:10,
              justifyContent:"center"}}   onPress={()=>{ navigation.navigate('seance') }} >
            <Text style={{ textAlign:"center" }} >
               COMMENCER UNE SEANCE ++
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor:"whitesmoke",
         borderRadius:20,height:30 , margin:10, 
         justifyContent:"center"  }}  onPress={()=>{
          navigation.navigate('historique');
         }} >
            <Text style={{ textAlign:"center" }} >
                HISTORIQUE
            </Text>
        </TouchableOpacity>
            </View>
      {/*  
       <TouchableOpacity style={styles.container}>
      <Text style={styles.citationText}> {globalCitations[randomCitation-1]} </Text>
    </TouchableOpacity> */}
    <Text style={styles.citationText} > "{globalCitations[randomCitation-1]} "</Text>
           
    </View>

    )
   
}
const styles = StyleSheet.create({
   
    citationText: {
      fontStyle: 'italic',
      fontSize: 16,      
      textAlign: 'center',
      color: '#333333',
      margin:20
    },
  });
export default Home;