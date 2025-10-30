import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import Header from "../../components/ui/Header/header";

import CampoTexto from "../../components/Input/input";
import SeletorLinha from "../../components/Select/select";
import ModalLista, { Opcao } from "../../components/ModalLista/modalLista";

const CARGOS: Opcao[] = [
  { id: 1, label: "Médico" },
  { id: 2, label: "Enfermeiro" },
  { id: 3, label: "Farmacêutico" },
];

const PERFIS: Opcao[] = [
  { id: 1, label: "Administrador" },
  { id: 2, label: "Usuário padrão" },
];

type ChaveModal = "cargo" | "perfil" | null;

export default function AddUser() {
  
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");

  const [login, setLogin] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [cargo, setCargo] = useState<Opcao | null>(null);
  const [perfil, setPerfil] = useState<Opcao | null>(null);

  const [modalAberto, setModalAberto] = useState<ChaveModal>(null);
  const abrir = (m: ChaveModal) => setModalAberto(m);
  const fechar = () => setModalAberto(null);
  
  const validarNome = (t: string) => {
    setNome(t);
    if (t.trim().length >= 3) setErroNome("");
    else setErroNome("Informe ao menos 3 caracteres.");
  };

  const validarLogin = (t: string) => {
    setLogin(t);
    if (t.trim().length >= 5) setErroLogin("");
    else setErroLogin("Login muito curto.");
  };

  const validarEmail = (t: string) => {
    setEmail(t);
    if (t.includes("@")) setErroEmail("");
    else setErroEmail("E-mail inválido.");
  };

  const validarSenha = (t: string) => {
    setSenha(t);
    if (t.length >= 8) setErroSenha("");
    else setErroSenha("A senha deve ter pelo menos 8 caracteres.");
  };

  const limparCampos = () => {
    setNome("");
    setLogin("");
    setEmail("");
    setSenha("");
    setCargo(null);
    setPerfil(null);
    setErroNome("");
    setErroLogin("");
    setErroEmail("");
    setErroSenha("");
  };

  
  const aoSalvar = () => {
    const okNome = nome.trim().length >= 3;
    const okLogin = login.trim().length >= 5;
    const okEmail = email.includes("@");
    const okSenha = senha.length >= 8;

    if (!okNome) setErroNome("Informe ao menos 3 caracteres.");
    if (!okLogin) setErroLogin("Login muito curto.");
    if (!okEmail) setErroEmail("E-mail inválido.");
    if (!okSenha) setErroSenha("A senha deve ter pelo menos 8 caracteres.");

    if (okNome && okLogin && okEmail && okSenha && cargo && perfil) {
      Alert.alert("Sucesso", "Interação realizada com sucesso, porém nada foi salvo.");
      limparCampos();
    }
  };



  let dadosModal:
    | { titulo: string; lista: Opcao[]; set: (o: Opcao | null) => void }
    | null = null;

  if (modalAberto === "cargo") {
    dadosModal = { titulo: "cargo", lista: CARGOS, set: setCargo };
  } else if (modalAberto === "perfil") {
    dadosModal = { titulo: "perfil", lista: PERFIS, set: setPerfil };
  } else {
    dadosModal = null;
  }

  const botaoDesabilitado = !nome || !login || !email || !senha || !cargo || !perfil;

  return (
    <View style={styles.seguro}>
      <Header />
      <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>Cadastrar Usuário</Text>


        <View style={styles.cartao}>
          <CampoTexto
            rotulo="Nome completo *"
            valor={nome}
            aoMudarTexto={validarNome}
            placeholder="Ex.: Maria da Silva"
            inputProps={{
              keyboardType: "default",
              autoCapitalize: "words",
            }}
          />
          {erroNome ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroNome}</Text> : null}

          <CampoTexto
            rotulo="Login *"
            valor={login}
            aoMudarTexto={validarLogin}
            placeholder="Ex.: maria.silva"
            inputProps={{
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />
          {erroLogin ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroLogin}</Text> : null}

          <CampoTexto
            rotulo="E-mail *"
            valor={email}
            aoMudarTexto={validarEmail}
            placeholder="Ex.: usuaria@hospital.com"
            inputProps={{
              keyboardType: "email-address",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />
          {erroEmail ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroEmail}</Text> : null}

          <CampoTexto
            rotulo="Senha *"
            valor={senha}
            aoMudarTexto={validarSenha}
            placeholder="Mínimo 8 caracteres"
            inputProps={{
              secureTextEntry: true,
            }}
          />
          {erroSenha ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroSenha}</Text> : null}

          <SeletorLinha
            rotulo="Cargo *"
            valor={cargo?.label}
            placeholder="Selecione o cargo"
            aoPressionar={() => abrir("cargo")}
          />

          <SeletorLinha
            rotulo="Perfil *"
            valor={perfil?.label}
            placeholder="Selecione o perfil"
            aoPressionar={() => abrir("perfil")}
          />

          <TouchableOpacity
            style={[styles.botao, botaoDesabilitado && styles.botaoDesabilitado]}
            onPress={aoSalvar}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>

          <Text style={styles.ajuda}>* Campos obrigatórios</Text>
        </View>
      </ScrollView>

      {dadosModal && (
        <ModalLista
          visivel={!!modalAberto}
          titulo={dadosModal.titulo}
          opcoes={dadosModal.lista}
          aoEscolher={(o) => dadosModal!.set(o)}
          aoFechar={fechar}
        />
      )}
    </View>
  );
}
