// import React from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Header from "../../components/ui/Header/header";
// import Card_Menu from "../../components/Card_Menu/cardMenu";
// import styles from "./style";
// import { useRouter } from 'expo-router';

// const PRIMARY = "#E53935";
// const TEXT_MUTED = "#6B7280";

// export default function Menu() {

//   const router = useRouter();

//   return (
//     <View style={styles.safe}>
//       <Header />

//       <View style={styles.body}>
//         <View style={styles.searchRow}>
//           <Ionicons
//             name="search-outline"
//             size={20}
//             color={TEXT_MUTED}
//             style={{ marginLeft: 12 }}
//           />


//           <TextInput
//             style={styles.searchInput}
//             placeholder="Scannear medicamento"
//             placeholderTextColor={TEXT_MUTED}
//           />
          
//           <TouchableOpacity style={styles.scanButton}>
//             <Ionicons name="camera-outline" size={22} color={PRIMARY} />
//           </TouchableOpacity>
//         </View>

//         <Card_Menu
//           items={[
//             { id: "1", title: "Adicionar Medicamento", imageSource: "icon-pilula.png" },
//             { id: "2", title: "Adicionar Usuário", imageSource: "icon-user.png" },
//             { id: "3", title: "Buscar Medicamento",imageSource: "icon-search.png" },
//           ]}
//           onItemPress={(id) => {
//             if (id === "1") {
//               router.push('../AddMedicines/addMedicines');  
//             } else if (id === "2") {
//               router.push('../AddUser/addUser');  
//             } else if (id === "3") {
//               router.push('../MedicationList/medicationList');  
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// }


import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/ui/Header/header";
import Card_Menu from "../../components/Card_Menu/cardMenu";
import styles from "./style";
import { useRouter } from 'expo-router';

const PRIMARY = "#E53935";
const TEXT_MUTED = "#6B7280";

export default function Menu() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  
  useEffect(() => {
    (async () => {
      const savedUser = await AsyncStorage.getItem("@ultimoUsuario");
      setUser(savedUser);
    })();
  }, []);

  
  const handleLogout = async () => {

    await AsyncStorage.removeItem("@ultimoUsuario");
    await AsyncStorage.removeItem("@auth");
    router.replace("../Login/login");
  };

  return (
    <View style={styles.safe}>
      <Header />

      <View style={styles.body}>
        
        {user && (
          <Text style={styles.user}>
            Olá, {user}
          </Text>
        )}

        <View style={styles.searchRow}>
          <Ionicons
            name="search-outline"
            size={20}
            color={TEXT_MUTED}
            style={{ marginLeft: 12 }}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Scannear medicamento"
            placeholderTextColor={TEXT_MUTED}
          />

          <TouchableOpacity style={styles.scanButton}>
            <Ionicons name="camera-outline" size={22} color={PRIMARY} />
          </TouchableOpacity>
        </View>

        <Card_Menu

          items={[
            { id: "1", title: "Adicionar Medicamento", imageSource: "icon-pilula.png" },
            { id: "2", title: "Adicionar Usuário", imageSource: "icon-user.png" },
            { id: "3", title: "Buscar Medicamento", imageSource: "icon-search.png" },
            { id: "4", title: "Perfil", imageSource: "icon-profile.png" },
          ]}

          onItemPress={(id) => {
            if (id === "1") {
              router.push("../AddMedicines/addMedicines");
            } else if (id === "2") {
              router.push("../AddUser/addUser");
            } else if (id === "3") {
              router.push("../MedicationList/medicationList");
            } else if (id === "4") {
              router.push("../Profile/profile");
            }
          }}
        />

         {/* Botão de logout REVER ONDE ELE VAI FICAR*/}
        <TouchableOpacity
            onPress={handleLogout}
            style={styles.tile}
          >
          <Text style={styles.tileText}>
            Sair
          </Text>
          </TouchableOpacity>

        

      </View>
    </View>
  );
}
