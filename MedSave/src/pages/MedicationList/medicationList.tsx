// src/pages/MedicationList/medicationList.tsx
import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MedicationCard from '../../components/MedicationCard/medicationCard';
import Header from '../../components/ui/Header/header';
import { RootStackParamList } from '../RootStackParamList/rootStackParamList'; 
import { StackNavigationProp } from '@react-navigation/stack'; 

import styles from './style';

const medicines = [
  { id: '1', name: 'Paracetamol', description: 'Analgésico e antipirético' },

  { id: '2', name: 'Dipirona', description: 'Analgésico e antitérmico' },
  { id: '3', name: 'Ibuprofeno', description: 'Anti-inflamatório e analgésico' },


  { id: '4', name: 'AAS', description: 'Antiinflamatório e anticoagulante' },
  { id: '5', name: 'Amoxicilina', description: 'Antibiótico de amplo espectro' },
];

type MedicationListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MedicationDetail'>; 

const MedicationListScreen = () => {
  const navigation = useNavigation<MedicationListScreenNavigationProp>(); 

  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.seguro}>
      <Header />
      <View style={styles.container} >
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar medicamento"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <FlatList
          data={filteredMedicines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MedicationDetail', { medicineId: item.id })} 
            >
              <MedicationCard medication={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default MedicationListScreen;
