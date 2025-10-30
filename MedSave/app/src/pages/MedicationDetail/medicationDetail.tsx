// src/pages/MedicationDetail/medicationDetail.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import Header from '../../components/ui/Header/header';
import { useLocalSearchParams } from 'expo-router';



const medicines = [
  { id: '1', name: 'Paracetamol', description: 'Analgésico e antipirético' },
  { id: '2', name: 'Dipirona', description: 'Analgésico e antitérmico' },
  { id: '3', name: 'Ibuprofeno', description: 'Anti-inflamatório e analgésico' },
  { id: '4', name: 'AAS', description: 'Antiinflamatório e anticoagulante' },
  { id: '5', name: 'Amoxicilina', description: 'Antibiótico de amplo espectro' },
];

export default function MedicationDetailScreen(){

  const { medicationId } = useLocalSearchParams<{ medicationId: string }>();

  const medicine = medicines.find(med => med.id === medicationId);


  return (
    <View style={styles.seguro}>

      <Header />

      <ScrollView style={styles.container}>

        <Text style={styles.title}>Detalhes do Medicamento</Text>
        
        <Text style={styles.name}>Nome: {medicine?.name}</Text>
        <Text style={styles.description}>Descrição: {medicine?.description}</Text>

      </ScrollView>

    </View>
  );
};


