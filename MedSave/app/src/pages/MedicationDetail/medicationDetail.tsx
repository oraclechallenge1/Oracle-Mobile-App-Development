import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '../../components/ui/Header/header';
import styles from './style';

// ========================
// 💊 DADOS MOCKADOS (iguais à tela de lista)
// ========================
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

export default function MedicationDetailScreen() {
  const { medicineId } = useLocalSearchParams<{ medicineId: string }>();
  const medicine = medicines.find((m) => m.id === medicineId);

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

        {/* Card principal */}
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 16,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 8 }}>
            {medicine.name}
          </Text>

          <Text style={{ fontSize: 14, color: '#6B7280', lineHeight: 20 }}>
            {medicine.description}
          </Text>

          <View style={{ marginTop: 16, gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Categoria</Text>
              <Text style={styles.value}>{medicine.category}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Forma farmacêutica</Text>
              <Text style={styles.value}>{medicine.form}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Unidade de medida</Text>
              <Text style={styles.value}>{medicine.unit}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Status</Text>
              <Text
                style={[
                  styles.value,
                  { color: medicine.status === 'Ativo' ? '#16A34A' : '#EF4444', fontWeight: '700' },
                ]}
              >
                {medicine.status}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
