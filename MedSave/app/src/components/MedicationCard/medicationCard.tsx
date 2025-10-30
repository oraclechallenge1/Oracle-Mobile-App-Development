// src/components/MedicationCard.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const MedicationCard = ({ medication }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{medication.name}</Text>
      <Text style={styles.description}>{medication.description}</Text>
    </View>
  );
};



export default MedicationCard;
