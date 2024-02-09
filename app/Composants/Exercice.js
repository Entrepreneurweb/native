import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseCard = ({ exercise }) => {
   // const Exo = exercise.dateExacte;
  return (
    <View style={styles.card}>
        <Text style={styles.text}>Nom: {exercise.dateExacte}</Text>
      
      { console.log(" dans exercice", exercise.stackExercices ) }
      

      {
  exercise.stackExercices.map((item, index) => (
    <View key={index}>
      <Text style={{ textAlign:"center" }}>{item.nom}</Text>
      <Text style={styles.text}>Répétitions: {item.rep}</Text>
      <Text style={styles.text}>Temps d'exécution: {item.time}</Text>
    </View>
  ))
}

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ExerciseCard;
