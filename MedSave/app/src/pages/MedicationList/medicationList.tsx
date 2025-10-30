// import React, { useState, useEffect } from 'react';
// import { View, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import MedicationCard from '../../components/MedicationCard/medicationCard';
// import Header from '../../components/ui/Header/header';
// import styles from './style';
// import { useRouter } from 'expo-router';

// interface Medicine {
//   id: number;
//   nameMedication: string;
//   statusMed: string;
//   activeIngredientIds: number[];
//   pharmFormIds: number[];
//   categoryMedicineId: number;
//   unitMeasureId: number;
// }


// const ip = "http://192.168.15.5:8080"; // IPV4 da sua máquina

// async function getAllMedicines() {
//   try {
//     const response = await fetch(ip + '/api/v1/medicines', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Erro ao buscar medicamentos');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Erro na requisição:', error);
//     throw error;
//   }
// }

// const MedicationListScreen = () => {
//   const router = useRouter();

//   const [searchQuery, setSearchQuery] = useState('');
//   const [medicines, setMedicines] = useState<Medicine[]>([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await getAllMedicines();
//         setMedicines(data);
//       } catch (e) {
//         console.log('Falha ao carregar medicamentos', e);
//       }
//     })();
//   }, []);

//   const filteredMedicines = medicines.filter((item) =>
//     item.nameMedication.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.seguro}>
//       <Header />
//       <View style={styles.container}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Buscar medicamento"
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//         />

//         <FlatList
//           data={filteredMedicines}
//           keyExtractor={(item) => item.id?.toString() ?? ''}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() =>
//                 router.push({
//                   pathname: '../MedicationDetail/medicationDetail',
//                   params: { medicationId: item.id },
//                 })
//               }
//             >
//               <MedicationCard medication={item} />
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default MedicationListScreen;


import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
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

const ip = 'http://192.168.15.5:8080';

async function getAllMedicines(): Promise<any> {
  try {
    console.log('GET /api/v1/medicines');

    const response = await fetch(ip + '/api/v1/medicines', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('STATUS DA RESPOSTA:', response.status);

    // Se a requisição chegou mas o server respondeu erro (404, 500, etc)
    if (!response.ok) {
      const textBody = await response.text().catch(() => '<sem body>');
      console.log('RESPOSTA NÃO OK. BODY RAW:', textBody);
      throw new Error('Response not ok: ' + response.status);
    }

    // Se chegou aqui, teoricamente é 2xx
    const data = await response.json();
    console.log('JSON PARSEADO:', data);
    return data;
  } catch (error: any) {
    console.error(
      'ERRO NA REQUISIÇÃO FETCH MESMO:',
      error?.message ? error.message : error
    );
    throw error;
  }
}

const MedicationListScreen = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    (async () => {
      console.log('>>> INICIANDO FETCH...');
      try {
        const data = await getAllMedicines();
        console.log('>>> SUCESSO NO FETCH. DATA = ', data);

        // caso a API devolva { content: [...] }
        if (data && Array.isArray(data.content)) {
          console.log('>>> data.content detectado, setando medicines = data.content');
          setMedicines(data.content);
          return;
        }

        // caso a API já devolva um array direto
        if (Array.isArray(data)) {
          console.log('>>> array direto detectado, setando medicines = data');
          setMedicines(data);
          return;
        }

        // nenhum dos dois casos
        console.log('>>> Formato inesperado da API. Valor retornado:', data);
      } catch (err: any) {
        console.log(
          '>>> ERRO NO USEEFFECT (provavelmente rede/CORS/rota):',
          err?.message ? err.message : err
        );
      }
    })();
  }, []);

  const filteredMedicines = medicines.filter((item) =>
    item.nameMedication.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Medicines state ->', medicines);
  console.log('Filtered ->', filteredMedicines);

  return (
    <View style={styles.seguro}>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar medicamento"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <FlatList
          data={filteredMedicines}
          keyExtractor={(item) => item.id?.toString() ?? ''}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '../MedicationDetail/medicationDetail',
                  params: { medicationId: item.id },
                })
              }
            >
              {/* Render mínimo pra debug visual */}
              <Text>{item.nameMedication}</Text>

              {/*
              Quando confirmar que está renderizando,
              você pode trocar isso por:
              <MedicationCard medication={item} />
              */}
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: 20, textAlign: 'center' }}>
              Nenhum medicamento carregado
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default MedicationListScreen;
