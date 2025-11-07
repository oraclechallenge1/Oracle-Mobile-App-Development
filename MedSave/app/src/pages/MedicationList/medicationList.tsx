import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import MedicationCard from '../../components/MedicationCard/medicationCard';
import Header from '../../components/ui/Header/header';
import styles from './style';

const medicines = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Analgésico e antipirético usado no tratamento de febre e dor leve a moderada.',
    category: 'Analgésico',
    form: 'Comprimido',
    unit: 'mg',
    status: 'Ativo',
  },
  {
    id: '2',
    name: 'Dipirona Sódica 1g/ml',
    description: 'Analgésico e antitérmico, indicado para febres e dores intensas.',
    category: 'Analgésico',
    form: 'Solução oral',
    unit: 'ml',
    status: 'Ativo',
  },
  {
    id: '3',
    name: 'Ibuprofeno 600mg',
    description: 'Anti-inflamatório, analgésico e antipirético. Usado em dores musculares e febre.',
    category: 'Anti-inflamatório',
    form: 'Comprimido',
    unit: 'mg',
    status: 'Ativo',
  },
  {
    id: '4',
    name: 'Amoxicilina 500mg',
    description: 'Antibiótico indicado para infecções bacterianas do trato respiratório e urinário.',
    category: 'Antibiótico',
    form: 'Cápsula',
    unit: 'mg',
    status: 'Ativo',
  },
  {
    id: '5',
    name: 'AAS 100mg',
    description: 'Antiinflamatório e anticoagulante. Usado na prevenção de eventos cardíacos.',
    category: 'Antiinflamatório',
    form: 'Comprimido',
    unit: 'mg',
    status: 'Inativo',
  },
];

export default function MedicationListScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');


  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.seguro}>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar medicamento..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <FlatList
          data={filteredMedicines}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '../MedicationDetail/medicationDetail',
                  params: { medicineId: item.id },
                })
              }
              activeOpacity={0.8}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 14,
                  borderRadius: 12,
                  marginBottom: 10,
                  shadowColor: '#000',
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  elevation: 3,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111827' }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#6B7280',
                    marginTop: 4,
                    fontSize: 13,
                  }}
                  numberOfLines={2}
                >
                  {item.description}
                </Text>

                {/* Linha extra com informações */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 8,
                  }}
                >
                  <Text style={{ fontSize: 12, color: '#6B7280' }}>
                    {item.category} • {item.form}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: item.status === 'Ativo' ? '#16A34A' : '#EF4444',
                      fontWeight: '600',
                    }}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
