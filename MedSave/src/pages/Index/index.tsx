// app/index.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/ui/Header/header";
import Card_Menu from "../../components/Card_Menu/cardMenu";
import styles from "./style";

const PRIMARY = "#E53935";
const TEXT_MUTED = "#6B7280";

export default function Index({ navigation }) {

  return (
    <View style={styles.safe}>
      <Header />

      <View style={styles.body}>
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
            { id: "3", title: "Buscar Medicamento",imageSource: "icon-search.png" },
          ]}
          onItemPress={(id) => {
            if (id === "1") {
              navigation.push('AddMedicines');  
            } else if (id === "2") {
              navigation.push('NewUser');  
            } else if (id === "3") {
              navigation.push('MedicationList');  
            }
          }}
        />
      </View>
    </View>
  );
}
