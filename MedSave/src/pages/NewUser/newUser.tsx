import React, {useState} from "react";
import { View, Text, ScrollView, Alert, Pressable, TouchableOpacity, Modal,TextInput} from "react-native";
import styles from "./style";
import Header from "../../components/ui/Header/header";

type Option = { id: string | number; label: string };

const CARGO : Option[] = [
  { id: 1, label: "Médico" },
  { id: 2, label: "Enfermeiro" },
  { id: 3, label: "Farmacêutico" },
];

const PERFIL : Option[] = [
  { id: 1, label: "Administrador" },
  { id: 2, label: "Usuário padrão" },
];

export default function New_User() {

  const [cargo, setCargo] = useState<Option | null>(null);
  const [perfil, setPerfil] = useState<Option | null>(null);

  const [name, setName] = useState("");

  const validarEmail =(text) =>{
    const emailRegex
  }

  const [openModal, setOpenModal] = useState<
    null | "cargo" | "perfil"
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
      <Header/>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <Text style={styles.title}>Cadastrar Usuário</Text>

          <View style={styles.card}>

              <Text style={styles.section}>Dados do usuário</Text>

              {/* Nome */}
              <View style={styles.field}>
                <Text style={styles.label}>Nome completo *</Text>
                <TextInput style={styles.input} />
                <Text style={styles.hint}>Ex.: Maria da Silva</Text>
              </View>

              {/* Login */}
              <View style={styles.field}>
                <Text style={styles.label}>Login *</Text>
                <TextInput style={styles.input} />
                <Text style={styles.hint}>Ex.: maria.silva</Text>
              </View>

              {/* Senha */}
              <View style={styles.field}>
                <Text style={styles.label}>Senha *</Text>
                <TextInput style={styles.input} />
                <Text style={styles.hint}>Mínimo 8 caracteres</Text>
              </View>

              <Text style={styles.section}>Contato</Text>

              {/* E-mail */}
              <View style={styles.field}>
                <Text style={styles.label}>E-mail *</Text>
                <TextInput style={styles.input} keyboardType="email-address"/>
                <Text style={styles.hint}>Ex.: usuaria@hospital.com</Text>
              </View>

              {/* Telefone */}
              <View style={styles.field}>
                <Text style={styles.label}>Telefone *</Text>
                <TextInput style={styles.input} keyboardType="numeric"/>
                <Text style={styles.hint}>Somente números (DDD+celular)</Text>
              </View>
    
              <Text style={styles.section}>Vínculos</Text>

              <View style={styles.field}>
                <Text style={styles.label}>Cargo *</Text>
                <TouchableOpacity style={styles.select} onPress={() => open("cargo")}>
                    <Text style={cargo ? styles.selectValue : styles.selectPlaceholder}>
                      {cargo ? cargo.label : "Selecione o cargo"}
                    </Text>
                    <Text style={styles.caret}>▼</Text>
                </TouchableOpacity>
              </View>

              {/* Perfil (PROFILE_USER → PROF_USER_ID) */}
              <View style={styles.field}>
                <Text style={styles.label}>Perfil *</Text>
                <TouchableOpacity style={styles.select} onPress={() => open("perfil")}>
                    <Text style={perfil ? styles.selectValue : styles.selectPlaceholder}>
                      {perfil ? perfil.label : "Selecione o perfil"}
                    </Text>
                    <Text style={styles.caret}>▼</Text>
                </TouchableOpacity>
              </View>


               <TouchableOpacity
              style={[styles.button, (!cargo) ? styles.buttonDisabled : null]}
              onPress={confirmSave}
              activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>

            <Text style={styles.helper}>* Campos obrigatórios</Text>
          </View>
        </ScrollView>

      {/* Modais */}
      {renderModal("cargo", CARGO, setCargo)}
      {renderModal("perfil", PERFIL, setPerfil)}

    </View>

  );
}