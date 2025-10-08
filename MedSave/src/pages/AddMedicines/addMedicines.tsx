import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import styles from "./style";
import Header from "../../components/ui/Header/header";

type Option = { id: string | number; label: string };

const CATEGORIES: Option[] = [
  { id: 1, label: "Analgésico" },
  { id: 2, label: "Antibiótico" },
  { id: 3, label: "Anti-inflamatório" },
];

const UNITS: Option[] = [
  { id: "mg", label: "mg" },
  { id: "ml", label: "ml" },
  { id: "g", label: "g" },
  { id: "UNIDADE", label: "unidade" },
];

const FORMS: Option[] = [
  { id: "comp", label: "Comprimido" },
  { id: "caps", label: "Cápsula" },
  { id: "sol", label: "Solução" },
  { id: "susp", label: "Suspensão" },
];

const ACTIVES: Option[] = [
  { id: 10, label: "Dipirona" },
  { id: 11, label: "Paracetamol" },
  { id: 12, label: "Ibuprofeno" },
];

export default function Add_Medicines() {

  const [name, setName] = useState("");

  const [status, setStatus] = useState<"Ativo" | "Inativo" | null>(null);

  const [category, setCategory] = useState<Option | null>(null);
  const [unit, setUnit] = useState<Option | null>(null);
  const [form, setForm] = useState<Option | null>(null);
  const [active, setActive] = useState<Option | null>(null);


  const [openModal, setOpenModal] = useState<
    null | "category" | "UNIDADE" | "form" | "active"
  >(null);

  const open = (key: typeof openModal) => setOpenModal(key);
  const close = () => setOpenModal(null);

  const confirmSave = () => {
    
    Alert.alert(
      "Simulação",
      "Interação concluída, mas nada foi salvo (tela está em modo demonstração)."
    );
  };

  const renderModal = (title: string, data: Option[], onPick: (o: Option) => void) => (
    <Modal visible={openModal !== null && title.toLowerCase().includes(openModal!)} transparent animationType="fade">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView style={{ maxHeight: 320 }}>
            {data.map((opt) => (
              <Pressable
                key={opt.id}
                onPress={() => {
                  onPick(opt);
                  close();
                }}
                style={({ pressed }) => [
                  styles.modalItem,
                  pressed && { opacity: 0.6 },
                ]}
              >
                <Text style={styles.modalItemText}>{opt.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.modalClose} onPress={close}>
            <Text style={styles.modalCloseText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.safe}>
      <Header />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastrar Medicamento</Text>

        <View style={styles.card}>
   
          <View style={styles.field}>
            <Text style={styles.label}>Nome do medicamento *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: Dipirona 500 mg"
              value={name}
              onChangeText={setName}
             
            />
            <Text style={styles.placeholderHint}>Ex.: Dipirona 500 mg</Text>
          </View>

          {/* Status */}
          <View style={styles.field}>
            <Text style={styles.label}>Status *</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  status === "Ativo" ? styles.chipFilled : styles.chipGhost,
                ]}
                onPress={() => setStatus("Ativo")}
              >
                <Text
                  style={[
                    status === "Ativo" ? styles.chipTextFilled : styles.chipTextGhost,
                  ]}
                >
                  Ativo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.chip,
                  status === "Inativo" ? styles.chipFilled : styles.chipGhost,
                ]}
                onPress={() => setStatus("Inativo")}
              >
                <Text
                  style={[
                    status === "Inativo" ? styles.chipTextFilled : styles.chipTextGhost,
                  ]}
                >
                  Inativo
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        
          <View style={styles.field}>
            <Text style={styles.label}>Categoria *</Text>
            <TouchableOpacity style={styles.select} onPress={() => open("category")}>
              <Text style={category ? styles.selectValue : styles.selectPlaceholder}>
                {category ? category.label : "Selecione a categoria"}
              </Text>
              <Text style={styles.caret}>▼</Text>
            </TouchableOpacity>
          </View>

        
          <View style={styles.field}>
            <Text style={styles.label}>Unidade de medida *</Text>
            <TouchableOpacity style={styles.select} onPress={() => open("UNIDADE")}>
              <Text style={unit ? styles.selectValue : styles.selectPlaceholder}>
                {unit ? unit.label : "Selecione a unidade"}
              </Text>
              <Text style={styles.caret}>▼</Text>
            </TouchableOpacity>
          </View>

          {/* Forma farmacêutica */}
          <View style={styles.field}>
            <Text style={styles.label}>Forma farmacêutica *</Text>
            <TouchableOpacity style={styles.select} onPress={() => open("form")}>
              <Text style={form ? styles.selectValue : styles.selectPlaceholder}>
                {form ? form.label : "Selecione a forma"}
              </Text>
              <Text style={styles.caret}>▼</Text>
            </TouchableOpacity>
          </View>

          {/* Princípio ativo */}
          <View style={styles.field}>
            <Text style={styles.label}>Princípio ativo *</Text>
            <TouchableOpacity style={styles.select} onPress={() => open("active")}>
              <Text style={active ? styles.selectValue : styles.selectPlaceholder}>
                {active ? active.label : "Selecione o princípio ativo"}
              </Text>
              <Text style={styles.caret}>▼</Text>
            </TouchableOpacity>
          </View>

          {/* Botão (interativo, sem persistência) */}
          <TouchableOpacity
            style={[styles.button, (!name || !status || !category || !unit || !form || !active) ? styles.buttonDisabled : null]}
            onPress={confirmSave}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <Text style={styles.helper}>* Campos obrigatórios</Text>
        </View>
      </ScrollView>

      {/* Modais */}
      {renderModal("category", CATEGORIES, setCategory)}
      {renderModal("UNIDADE", UNITS, setUnit)}
      {renderModal("form", FORMS, setForm)}
      {renderModal("active", ACTIVES, setActive)}
    </View>
  );
}
