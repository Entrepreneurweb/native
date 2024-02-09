import { useContext, useState } from "react";
import { Moncontext } from "./MonProvider"; 
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Seance=()=>{
    const [isExeNotChosen, setisExNotChosen]=useState(true);
    const{globalImage,userData, ModifierUserDat, globalCitations}=useContext(Moncontext);

    const [curChosenEx, setcurChosenEx]=useState(0);
    const [localRep, setlocalRep]=useState(0);
    const [localTim, setlocalTime]=useState(0);
    const [exStart, setexStart]=useState(false);
    const[exoCourant, setexoCourant]=useState(null);
    const [stackExercices, setStackExercices] = useState([{}]);



    const Card = ({ item , exoCourant , setexoCourant }) => {
        return (
            <TouchableOpacity onPress={()=>{
                 if(isExeNotChosen==true){
                    setisExNotChosen(false);
                    setexStart(true)
                   
                 }
                 setexoCourant(item.nom);
                 console.log(item.nom);
                 console.log(item.id);
            }} >
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
    fontWeight: 'bold',}} > {item.nom} </Text>
          </View>
          </TouchableOpacity>
        );
      };

      // ma fonction pour ajouter mes seance au async  stockage 
      const loadStackExercicesFromAsyncStorage = async () => {
        try {
            // Récupérer les données existantes depuis AsyncStorage
            const jsonData = await AsyncStorage.getItem('stackExercices');
            let existingData = [];
            if (jsonData !== null) {
                existingData = JSON.parse(jsonData);
            }
                        
            const newData = {
              dateExacte: new Date().toUTCString(),
              stackExercices: stackExercices
          };
            // Fusionner les données existantes avec les nouvelles données
            const mergedData = [...existingData, newData];
            
            // Sauvegarder les données fusionnées dans AsyncStorage
            await AsyncStorage.setItem('stackExercices', JSON.stringify(mergedData));
            
            console.log('Données ajoutées avec succès à celles déjà existantes dans AsyncStorage.');
            return mergedData;
        } catch (error) {
            console.error('Erreur lors de l\'ajout des données dans AsyncStorage:', error);
            return null;
        }
    };
    
    

      
    
   
let tab=[];



const AjouterSeance=<View style={{ display:"flex", flexDirection:"column", 
width:"70%", alignSelf:"center", }} >
   <TouchableOpacity
        style={{ width:"60%",  alignSelf:"center", backgroundColor:"whitesmoke",  borderRadius:20,
        padding:7, margin:5}} onPress={()=>{   console.log( localRep/localTim ) }}
        > 
        <Text style={{ textAlign:"center", alignSelf:"center" }} > {exoCourant} </Text>

         </TouchableOpacity>


    <Text style={{ textAlign:"center", backgroundColor:'whitesmoke' ,
borderRadius:20, padding:10, margin:10
}} >NOMBRE DE REPETITIONS</Text>
     <TextInput
  value={localRep.toString()} // Convertir en chaîne de caractères
  style={{ width: "80%", textAlign: "center", alignSelf: "center" }}
  keyboardType="numeric"
  placeholder="nbre de rep"
  onChangeText={(val) => {
    setlocalRep(val);
  }}
/>
    <Text style={{ textAlign:"center" , backgroundColor:'whitesmoke' ,
borderRadius:20, padding:10, margin:10 }} >TEMPS D'EXECUTION</Text>
   <TextInput
  value={localTim.toString()} // Convertir en chaîne de caractères
  style={{ width: "80%", textAlign: "center", alignSelf: "center" }}
  keyboardType="numeric"
  placeholder="tmps d'exec"
  onChangeText={(val) => {
    setlocalTime(val);
  }}
/>

<TouchableOpacity
        style={{ width:"60%",  alignSelf:"center", backgroundColor:"#4CAF50",  borderRadius:20,
        padding:7, margin:5}} onPress={()=>{  setStackExercices([...stackExercices, { nom: exoCourant, rep: localRep, time: localTim }]) ;
      setlocalRep(0) ; setlocalTime(0);   }}
        > 
        <Text style={{ textAlign:"center", alignSelf:"center" }} >VALIDER L'EXERCICE</Text>

         </TouchableOpacity>
</View>
//const date = new Date().toUTCString();
return(
    <View style={{ backgroundColor:"#838996" , width:"100%", height:"100%"}} >
        <View style={{
                width:"100%",
                height:180
             }} >
 
              <FlatList
        data={globalImage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card   item={item}  exoCourant={exoCourant} setexoCourant={setexoCourant} />}
        horizontal={true}   showsHorizontalScrollIndicator={false} />

             </View>


            





             <View style={{ width:"100%" , justifyContent:"center", marginTop:12}} >
  {isExeNotChosen ? 
    <View style={{
      backgroundColor:"#4CAF50", width:"80%", alignSelf:"center", borderRadius:20,
      padding:4,
    }}>
      <Text style={{ fontSize:15, textAlign:"center" }}>CHOISI UN EXERCICE POUR COMMENCER</Text>
    </View> : <View>{AjouterSeance}</View>      
  }
</View>

<View>
    { 
    exStart ? <TouchableOpacity
    style={{ width:"60%",  alignSelf:"center", backgroundColor:"#800000",  borderRadius:20,
    padding:7, margin:5}} 
    onPress={()=>{     
      loadStackExercicesFromAsyncStorage();      
    }}
    >
         <Text style={{ textAlign:"center", alignSelf:"center" }} >CLOTURER LA SEANCE</Text>
         
     </TouchableOpacity>:<View></View>
     }

</View>
         

    </View>
    
)
}

export default Seance;