import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/ui/Header/header';
import styles from './style';
import { ROUTES } from '../../navigation/routes';

type Medicine = {
  id: string;
  name: string;
  description: string;
  category: string;
  form: string;
  unit: string;
  status: 'Ativo' | 'Inativo';
};

const MOCKS: Medicine[] = [
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

const MEDS_CACHE_KEY = '@medsave:medicines_cache';

export default function MedicationListScreen() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [cached, setCached] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);



  const loadCached = useCallback(async () => {


    try {
      setLoading(true);
      const raw = await AsyncStorage.getItem(MEDS_CACHE_KEY);
      const list = raw ? (JSON.parse(raw) as Medicine[]) : [];
      setCached(Array.isArray(list) ? list : []);
    } catch {
      setCached([]);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    loadCached();
  }, [loadCached]);


  useFocusEffect(

    useCallback(() => {

      loadCached();
    }, [loadCached])
  );


  const allMedicines = useMemo<Medicine[]>(() => {


    const map = new Map<string, Medicine>();

    [...MOCKS, ...cached].forEach((m) => map.set(m.id, m));

    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));


  }, [cached]);

  const filteredMedicines = useMemo(
    () =>
      allMedicines.filter((m) =>
        m.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      ),
    [allMedicines, searchQuery]
  );




  return (


    <View style={styles.seguro}>

      <Header />

      <View style={styles.container}>

        <TextInput
          style={styles.searchBar}
          placeholder="Buscar medicamento..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {loading && (
          <Text style={{ color: '#6B7280', marginBottom: 8 }}>Carregando…</Text>
        )}

        {filteredMedicines.length === 0 ? (

          <Text style={{ color: '#6B7280' }}>
            Nenhum medicamento encontrado.
          </Text>
          
        ) : (
          <FlatList
            data={filteredMedicines}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: ROUTES.MED_DETAIL,
                    params: { medicineId: item.id },
                  } as any)
                }
                activeOpacity={0.8}
              >

                <View
                  style={styles.card}
                >

                  <Text style={styles.name}>
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

                  <View
                    style={styles.infoSection}
                  >

                    <Text style={styles.description}>
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

        )}

      </View>

    </View>
  );
}
