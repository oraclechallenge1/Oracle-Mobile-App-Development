import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import MedicationCard from '../../components/MedicationCard/medicationCard';
import Header from '../../components/ui/Header/header';
import styles from './style';
import { useRouter } from 'expo-router';

interface Medicine {
  id: number;
  nameMedication: string;
  statusMed: string;
  activeIngredientIds: number[];
  pharmFormIds: number[];
  categoryMedicineId: number;
  unitMeasureId: number;
}

// ⬇️ ATENÇÃO AQUI ⬇️
// Se você estiver em EMULADOR ANDROID, troque pra "http://10.0.2.2:8080"
const BASE_URL = "http://192.168.15.5:8080";

async function getAllMedicines() {
  try {
    console.log('>>> chamando API:', BASE_URL + '/api/v1/medicines');

    const response = await fetch(BASE_URL + '/api/v1/medicines', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('>>> status da API:', response.status);

    if (!response.ok) {
      throw new Error('Erro ao buscar medicamentos');
    }

    const data = await response.json();
    console.log('>>> dados recebidos:', data);

    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

const MedicationListScreen = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllMedicines();
        setMedicines(data);
      } catch (e) {
        console.log('Falha ao carregar medicamentos', e);
      }
    })();
  }, []);

  const filteredMedicines = medicines.filter((item) =>
    (item.nameMedication ?? '')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.seguro}>
      <Header />

      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar medicamento"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <FlatList
          style={{ flex: 1 }}
          data={filteredMedicines}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <View style={{ padding: 20 }}>
              <Text style={{ color: '#333' }}>
                Nenhum medicamento encontrado.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '../MedicationDetail/medicationDetail',
                  params: { medicationId: item.id },
                })
              }
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
