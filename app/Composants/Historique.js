import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExerciseCard from "./Exercice";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

const Historique = () => {
    const [stackExercices, setStackExercices] = useState([]);

    const loadStackExercicesFromAsyncStorage = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('stackExercices');
            if (jsonData !== null) {
                const data = JSON.parse(jsonData);
                console.log('Données chargées avec succès depuis AsyncStorage:', data);
                setStackExercices(data); // Stocker les données dans l'état
            } else {
                console.log('Aucune donnée trouvée dans AsyncStorage.');
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données depuis AsyncStorage:', error);
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


    useEffect(() => {
        loadStackExercicesFromAsyncStorage();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ backgroundColor:"#800000" , borderRadius:20 }} onPress={()=>{
                removeDataFromAsyncStorage();

            }} >
            <Text style={styles.header}>VIDER l'HISTORIQUE</Text>
            </TouchableOpacity>
            
            {stackExercices.map((item, index) => (
                <ExerciseCard key={index} exercise={item} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 10,
        width:"100%"
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign:"center"
    },
});

export default Historique;
