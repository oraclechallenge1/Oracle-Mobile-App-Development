// src/components/MedicationCard/medicationCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

const MedicationCard = ({ medication }) => {
  return (
    <View style={styles.card}>

      <Text style={styles.name}>{medication.nameMedication}</Text>
      <Text style={styles.description}>
        Status: {medication.statusMed}
      </Text>

    </View>
  );
};


export default MedicationCard;
