import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Moncontext } from './MonProvider';




const Loging=({navigation})=>{

    const [nom, setNom] = useState('');
  const [taille, setTaille] = useState('');
  const [masse, setMasse] = useState('');
  const {globalImage,userData, ModifierUserDat, globalCitations}=useContext(Moncontext);

  const handleSubmit = () => {
    // Effectuez des actions avec les données soumises, par exemple, enregistrez-les dans un état global ou envoyez-les à un serveur
    console.log('Nom:', nom);
    console.log('Taille:', taille);
    console.log('Masse:', masse);
  };
  const saveFormData = async () => {
    try {
      const formData = {
        nom:nom,
        taille:taille,
        masse:masse,
      };
  
      // Convertir l'objet en chaîne JSON avant de le stocker
      const formDataString = JSON.stringify(formData);
  
      // Enregistrer les données dans AsyncStorage
      await AsyncStorage.setItem('userData', formDataString);
  
      console.log('Données enregistrées avec succès !');
      console.log( nom+""+taille+""+masse);
      alert(" Vos donnée ont été enregistrée ")
      fetchData();
      setTimeout(() => {
        fetchData();
        navigation.navigate('home')
      }, 3000);
      
      
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des données:', error);
      Alert.alert(" une erreur s'est produite ... ")
    }
    /*setTimeout(() => {
        fetchData();
       
      }, 2000);*/
  };
  const getFormData = async () => {
    try {
      // Récupérer les données depuis AsyncStorage
      const formDataString = await AsyncStorage.getItem('userData');
  
      if (formDataString !== null) {
        // Convertir la chaîne JSON en objet
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


return(
<View style={styles.container}>
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={(text) => setNom(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Taille (en cm) "
        value={taille}
        onChangeText={(text) => setTaille(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Masse (en kg) "
        value={masse}
        onChangeText={(text) => setMasse(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button
        title="Soumettre"
        onPress={saveFormData}
        disabled={!nom || !taille || !masse}
      />
    </View>
)

}
export default Loging;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      borderRadius:20,
      paddingHorizontal: 10,
      borderStyle:'solid',      
    },
  });