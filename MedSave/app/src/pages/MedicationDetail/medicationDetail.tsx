import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/ui/Header/header';
import styles from './style';
import style from './style';


const MEDS_CACHE_KEY = '@medsave:medicines_cache';




const MOCKS = [


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

export default function MedicationDetailScreen() {


  const { medicineId } = useLocalSearchParams<{ medicineId: string }>();
  const [medicine, setMedicine] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {

      try {

        const raw = await AsyncStorage.getItem(MEDS_CACHE_KEY);
        const localList = raw ? JSON.parse(raw) : [];

     

        const combined = [...MOCKS, ...localList];
        const found = combined.find((m) => m.id === medicineId);
        setMedicine(found ?? null);

      } catch {
        setMedicine(null);
      } finally {
        setLoading(false);
      }


    })();


  }, [medicineId]);

  if (loading) {



    return (


      <View style={[styles.seguro, { justifyContent: 'center', alignItems: 'center' }]}>

        <ActivityIndicator size="large" color="#E53935" />

        <Text style={{ marginTop: 10, color: '#6B7280' }}>Carregando medicamento...</Text>


      </View>

    );

  }




  if (!medicine) {


    return (
      <View style={[styles.seguro, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ color: '#6B7280', fontSize: 16 }}>Medicamento não encontrado.</Text>
      </View>
    );
  }




  return (


    <View style={styles.seguro}>

      <Header />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

        <Text style={styles.title}>Detalhes do Medicamento</Text>

        <View
          style={styles.card}
          
        >
          <Text style={styles.category}>
            {medicine.name}
          </Text>

          <Text style={styles.description}>
            {medicine.description || 'Sem descrição.'}
          </Text>

          <View style={{ marginTop: 16, gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Categoria</Text>
              <Text style={styles.value}>{medicine.category || medicine.categoria?.label || '-'}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Forma farmacêutica</Text>
              <Text style={styles.value}>{medicine.form || medicine.forma?.label || '-'}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Unidade de medida</Text>
              <Text style={styles.value}>{medicine.unit || medicine.unidade?.label || '-'}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Status</Text>
              <Text
                style={[
                  styles.value,
                  { color: medicine.status === 'Ativo' ? '#16A34A' : '#EF4444', fontWeight: '700' },
                ]}
              >
                {medicine.status || '-'}

              </Text>

            </View>

          </View>

        </View>
        
      </ScrollView>

    </View>
  );
}
