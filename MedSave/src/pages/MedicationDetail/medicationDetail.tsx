// src/pages/MedicationDetail/medicationDetail.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList/rootStackParamList'; 
import styles from './style';
import Header from '../../components/ui/Header/header';

type MedicationDetailScreenRouteProp = RouteProp<RootStackParamList, 'MedicationDetail'>; 

const medicines = [
  { id: '1', name: 'Paracetamol', description: 'Analgésico e antipirético' },
  { id: '2', name: 'Dipirona', description: 'Analgésico e antitérmico' },
  { id: '3', name: 'Ibuprofeno', description: 'Anti-inflamatório e analgésico' },
  { id: '4', name: 'AAS', description: 'Antiinflamatório e anticoagulante' },
  { id: '5', name: 'Amoxicilina', description: 'Antibiótico de amplo espectro' },
];

const MedicationDetailScreen = ({ route }: { route: MedicationDetailScreenRouteProp }) => {
  const { medicineId } = route.params; 
  const medicine = medicines.find((med) => med.id === medicineId); 

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

export default MedicationDetailScreen;
