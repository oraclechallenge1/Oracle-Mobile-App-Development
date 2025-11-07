import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "./style";
import Header from "../../components/ui/Header/header";
import CampoTexto from "../../components/Input/input";
import SeletorLinha from "../../components/Select/select";
import ModalLista, { Opcao } from "../../components/ModalLista/modalLista";
import { ROUTES } from "../../navigation/routes";

const CARGOS: Opcao[] = [
  { id: 1, label: "Médico" },
  { id: 2, label: "Enfermeiro" },
  { id: 3, label: "Farmacêutico" },
];

const PERFIS: Opcao[] = [
  { id: 1, label: "Administrador" },
  { id: 2, label: "Usuário padrão" },
];

const DRAFT_KEY = "@medsave:draft_user";
const USERS_CACHE_KEY = "@medsave:users_cache";

type ChaveModal = "cargo" | "perfil" | null;

export default function AddUser() {
  const router = useRouter();

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

  
  useEffect(() => {

    (async () => {
      try {
        const raw = await AsyncStorage.getItem(DRAFT_KEY);
        if (!raw) return;
        const draft = JSON.parse(raw);
        setNome(draft.nome ?? "");
        setLogin(draft.login ?? "");
        setEmail(draft.email ?? "");
        setSenha(draft.senha ?? "");
        setCargo(draft.cargo ?? null);
        setPerfil(draft.perfil ?? null);
      } catch {
        await AsyncStorage.removeItem(DRAFT_KEY);
      }

    })();

  }, []);

 
  useEffect(() => {

    const t = setTimeout(() => {
      const draft = { nome, login, email, senha, cargo, perfil, updatedAt: Date.now() };

      AsyncStorage.setItem(DRAFT_KEY, JSON.stringify(draft));

    }, 300);


    return () => clearTimeout(t);

  }, [nome, login, email, senha, cargo, perfil]);

  const validarNome = (t: string) => {
    setNome(t);
    setErroNome(t.trim().length >= 3 ? "" : "Informe ao menos 3 caracteres.");
  };

  const validarLogin = (t: string) => {
    setLogin(t);
    setErroLogin(t.trim().length >= 5 ? "" : "Login muito curto.");
  };

  const validarEmail = (t: string) => {
    setEmail(t);
    const re = /\S+@\S+\.\S+/;
    setErroEmail(re.test(t) ? "" : "E-mail inválido.");
  };

  const validarSenha = (t: string) => {
    setSenha(t);
    setErroSenha(t.length >= 8 ? "" : "A senha deve ter pelo menos 8 caracteres.");
  };

  const limparCampos = async () => {
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

    await AsyncStorage.removeItem(DRAFT_KEY);

  };

  const aoSalvar = async () => {
    const okNome = nome.trim().length >= 3;
    const okLogin = login.trim().length >= 5;
    const re = /\S+@\S+\.\S+/;
    const okEmail = re.test(email);
    const okSenha = senha.length >= 8;

    if (!okNome) setErroNome("Informe ao menos 3 caracteres.");
    if (!okLogin) setErroLogin("Login muito curto.");
    if (!okEmail) setErroEmail("E-mail inválido.");
    if (!okSenha) setErroSenha("A senha deve ter pelo menos 8 caracteres.");

    if (!(okNome && okLogin && okEmail && okSenha && cargo && perfil)) return;



    try {
      const raw = await AsyncStorage.getItem(USERS_CACHE_KEY);
      const lista: any[] = raw ? JSON.parse(raw) : [];
      const jaExiste = lista.some(
        (u) => String(u.login).toLowerCase() === login.trim().toLowerCase()
      );

      if (jaExiste) {
        setErroLogin("Este login já está em uso.");

        Alert.alert("Atenção", "Já existe um usuário com esse login.");


        return;
      }

      const novo = {
        id: Date.now().toString(),
        nome: nome.trim(),
        login: login.trim(),
        email: email.trim(),
        senha,
        cargo,
        perfil,
        createdAt: new Date().toISOString(),
      };

      lista.push(novo);
      await AsyncStorage.setItem(USERS_CACHE_KEY, JSON.stringify(lista));
      await limparCampos();

      Alert.alert("Sucesso", "Usuário salvo localmente.");
      router.replace(ROUTES.MENU as any);
    } catch {
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }

  };

  let dadosModal:
    | { titulo: string; lista: Opcao[]; set: (o: Opcao | null) => void }
    | null = null;

  if (modalAberto === "cargo") {
    dadosModal = { titulo: "cargo", lista: CARGOS, set: setCargo };
  } else if (modalAberto === "perfil") {
    dadosModal = { titulo: "perfil", lista: PERFIS, set: setPerfil };
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
            inputProps={{ keyboardType: "default", autoCapitalize: "words" }}
          />
          {erroNome ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroNome}</Text> : null}

          <CampoTexto
            rotulo="Login *"
            valor={login}
            aoMudarTexto={validarLogin}
            placeholder="Ex.: maria.silva"
            inputProps={{ keyboardType: "default", autoCapitalize: "none", autoCorrect: false }}
          />
          {erroLogin ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroLogin}</Text> : null}

          <CampoTexto
            rotulo="E-mail *"
            valor={email}
            aoMudarTexto={validarEmail}
            placeholder="Ex.: usuaria@hospital.com"
            inputProps={{ keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false }}
          />
          {erroEmail ? <Text style={{ color: "#EF4444", marginTop: 4 }}>{erroEmail}</Text> : null}

          <CampoTexto
            rotulo="Senha *"
            valor={senha}
            aoMudarTexto={validarSenha}
            placeholder="Mínimo 8 caracteres"
            inputProps={{ secureTextEntry: true }}
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
            disabled={botaoDesabilitado}
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
          aoEscolher={(o) => {
            dadosModal!.set(o);
            setModalAberto(null);
          }}
          aoFechar={fechar}
        />
      )}

    </View>

    
  );
}
