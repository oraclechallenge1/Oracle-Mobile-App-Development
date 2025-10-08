import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import Header from "../../components/ui/Header/header";


export default function New_User() {
  return (
    <View style={styles.safe}>
      <Header/>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastrar Usuário</Text>

        <View style={styles.card}>

            {/* ========= DADOS DO USUÁRIO ========= */}
            <Text style={styles.section}>Dados do usuário</Text>

            {/* Nome */}
            <View style={styles.field}>
            <Text style={styles.label}>Nome completo *</Text>
            <View style={styles.input} />
            <Text style={styles.hint}>Ex.: Maria da Silva</Text>
            </View>

            {/* Login */}
            <View style={styles.field}>
            <Text style={styles.label}>Login *</Text>
            <View style={styles.input} />
            <Text style={styles.hint}>Ex.: maria.silva</Text>
            </View>

            {/* Senha */}
            <View style={styles.field}>
            <Text style={styles.label}>Senha *</Text>
            <View style={styles.input} />
            <Text style={styles.hint}>Mínimo 8 caracteres</Text>
            </View>

            {/* ========= CONTATO (CONTACT_USER) ========= */}
            <Text style={styles.section}>Contato</Text>

            {/* E-mail */}
            <View style={styles.field}>
            <Text style={styles.label}>E-mail *</Text>
            <View style={styles.input} />
            <Text style={styles.hint}>Ex.: usuaria@hospital.com</Text>
            </View>

            {/* Telefone */}
            <View style={styles.field}>
            <Text style={styles.label}>Telefone *</Text>
            <View style={styles.input} />
            <Text style={styles.hint}>Somente números (DDD+celular)</Text>
            </View>

            {/* ========= VÍNCULOS (FKs) ========= */}
            <Text style={styles.section}>Vínculos</Text>

            {/* Cargo (POSITION_USER → POS_USER_ID) */}
            <View style={styles.field}>
            <Text style={styles.label}>Cargo *</Text>
            <View style={styles.select}>
                <Text style={styles.selectPlaceholder}>Selecione o cargo</Text>
                <Text style={styles.caret}>▼</Text>
            </View>
            </View>

            {/* Perfil (PROFILE_USER → PROF_USER_ID) */}
            <View style={styles.field}>
            <Text style={styles.label}>Perfil *</Text>
            <View style={styles.select}>
                <Text style={styles.selectPlaceholder}>Selecione o perfil</Text>
                <Text style={styles.caret}>▼</Text>
            </View>
            </View>

            {/* (Opcional) ID de Contato vinculado se já existir CONTACT_USER */}
            <View style={styles.field}>
            <Text style={styles.label}>Vincular contato existente (opcional)</Text>
            <View style={styles.select}>
                <Text style={styles.selectPlaceholder}>Selecione um contato</Text>
                <Text style={styles.caret}>▼</Text>
            </View>
            <Text style={styles.smallNote}>
                Use este campo apenas se você já tiver um contato cadastrado para o usuário.
            </Text>
            </View>

            {/* Botão visual (sem ação) */}
            <View style={[styles.button, styles.buttonDisabled]}>
            <Text style={styles.buttonText}>Salvar</Text>
            </View>

            <Text style={styles.reqNote}>* Campos obrigatórios</Text>
        </View>
        </ScrollView>
    </View>
  );
}