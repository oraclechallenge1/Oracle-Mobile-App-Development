import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import estilos from "./style";
import Header from "../../components/ui/Header/header";

import ModalLista, { Opcao } from "../../components/ModalLista/modalLista";
import CampoTexto from "../../components/Input/input";
import SeletorLinha from "../../components/Select/select";
import PilulasToggle from "../../components/PilulasToggle/pilulasToggle";
import { ROUTES } from "../../navigation/routes";

const DRAFT_KEY = "@medsave:draft_medicine";
const MEDS_CACHE_KEY = "@medsave:medicines_cache";

const CATEGORIAS: Opcao[] = [
  { id: 1, label: "Analgésico" },
  { id: 2, label: "Antibiótico" },
  { id: 3, label: "Anti-inflamatório" },
];

const UNIDADES: Opcao[] = [
  { id: "mg", label: "mg" },
  { id: "ml", label: "ml" },
  { id: "g", label: "g" },
  { id: "unidade", label: "unidade" },
];

const FORMAS: Opcao[] = [
  { id: "comp", label: "Comprimido" },
  { id: "caps", label: "Cápsula" },
  { id: "sol", label: "Solução" },
  { id: "susp", label: "Suspensão" },
];

const ATIVOS: Opcao[] = [
  { id: 10, label: "Dipirona" },
  { id: 11, label: "Paracetamol" },
  { id: 12, label: "Ibuprofeno" },
];

type ChaveModal = "categoria" | "unidade" | "forma" | "ativo_med" | null;

export default function Add_Medicines() {


  const router = useRouter();

  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState<string>("");

  const [status, setStatus] = useState<"Ativo" | "Inativo" | null>(null);
  const [categoria, setCategoria] = useState<Opcao | null>(null);
  const [unidade, setUnidade] = useState<Opcao | null>(null);
  const [forma, setForma] = useState<Opcao | null>(null);
  const [ativoMed, setAtivoMed] = useState<Opcao | null>(null);

  const [modalAberto, setModalAberto] = useState<ChaveModal>(null);

  useEffect(() => {

    (async () => {

      try {

        const raw = await AsyncStorage.getItem(DRAFT_KEY);

        if (!raw) return;


        const draft = JSON.parse(raw);
        setNome(draft.nome ?? "");
        setStatus(draft.status ?? null);
        setCategoria(draft.categoria ?? null);
        setUnidade(draft.unidade ?? null);
        setForma(draft.forma ?? null);
        setAtivoMed(draft.ativoMed ?? null);

      } catch {
      
        await AsyncStorage.removeItem(DRAFT_KEY);
      }

    })();


  }, []);

  useEffect(() => {

    const t = setTimeout(() => {

      const draft = { nome, status, categoria, unidade, forma, ativoMed, updatedAt: Date.now() };
      AsyncStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }, 300);

    return () => clearTimeout(t);


  }, [nome, status, categoria, unidade, forma, ativoMed]);

  const limparCampos = async () => {

    setNome("");
    setStatus(null);
    setCategoria(null);
    setUnidade(null);
    setForma(null);
    setAtivoMed(null);
    setErroNome("");


    await AsyncStorage.removeItem(DRAFT_KEY);

  };

  const abrir = (m: ChaveModal) => setModalAberto(m);
  const fechar = () => setModalAberto(null);

  const onChangeNome = (t: string) => {
    setNome(t);

    if (t.trim().length >= 3) setErroNome("");

    else setErroNome("Nome do medicamento muito curto.");
  };

  const aoSalvar = async () => {
    const okNome = nome.trim().length >= 3;

    if (!okNome) {
      setErroNome("Nome do medicamento muito curto.");
      return;
    }

    if (!status || !categoria || !unidade || !forma || !ativoMed) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");
      return;
    }

    const novo = {
      id: Date.now().toString(),
      name: nome.trim(),
      status,
      categoria,
      unidade,
      forma,
      ativoMed,
      createdAt: new Date().toISOString(),
    };

    try {

      const raw = await AsyncStorage.getItem(MEDS_CACHE_KEY);
      const lista = raw ? JSON.parse(raw) : [];
      lista.push(novo);

      await AsyncStorage.setItem(MEDS_CACHE_KEY, JSON.stringify(lista));

      await limparCampos();

      Alert.alert("Sucesso", "Medicamento salvo localmente.");
      
      router.replace(ROUTES.MED_LIST as any);
    } catch {
      Alert.alert("Erro", "Não foi possível salvar localmente.");
    }
  };

  let dadosModal:
    | { titulo: string; lista: Opcao[]; set: (o: Opcao | null) => void }
    | null = null;

  if (modalAberto === "categoria") {
    dadosModal = { titulo: "categoria", lista: CATEGORIAS, set: setCategoria };
  } else if (modalAberto === "unidade") {
    dadosModal = { titulo: "unidade", lista: UNIDADES, set: setUnidade };
  } else if (modalAberto === "forma") {
    dadosModal = { titulo: "forma", lista: FORMAS, set: setForma };
  } else if (modalAberto === "ativo_med") {
    dadosModal = { titulo: "ativo_med", lista: ATIVOS, set: setAtivoMed };
  } else {
    dadosModal = null;
  }

  const botaoDesabilitado =
    !nome || !status || !categoria || !unidade || !forma || !ativoMed;

  return (
    <View style={estilos.seguro}>

      <Header />

      <ScrollView style={estilos.container} contentContainerStyle={estilos.conteudo}>

        <Text style={estilos.titulo}>Cadastrar Medicamento</Text>

        <View style={estilos.cartao}>

          <View style={estilos.campo}>

            <CampoTexto
              rotulo="Nome do medicamento *"
              valor={nome}
              aoMudarTexto={onChangeNome}
              placeholder="Ex.: Dipirona 500 mg"
              dica="Ex.: Dipirona 500 mg"
              erro={erroNome}
            />

          </View>



          <View style={estilos.conteudo}>

            <Text style={estilos.rotulo}>Status *</Text>

            <PilulasToggle
              opcoes={["Ativo", "Inativo"]}
              valor={status}
              aoMudar={(v) => setStatus(v as "Ativo" | "Inativo")}
              cor="#E53935"
            />
            
          </View>

          <SeletorLinha
            rotulo="Categoria *"
            valor={categoria?.label}
            placeholder="Selecione a categoria"
            aoPressionar={() => abrir("categoria")}
          />

          <SeletorLinha
            rotulo="Unidade de medida *"
            valor={unidade?.label}
            placeholder="Selecione a unidade"
            aoPressionar={() => abrir("unidade")}
          />

          <SeletorLinha
            rotulo="Forma farmacêutica *"
            valor={forma?.label}
            placeholder="Selecione a forma"
            aoPressionar={() => abrir("forma")}
          />

          <SeletorLinha
            rotulo="Princípio ativo *"
            valor={ativoMed?.label}
            placeholder="Selecione o princípio ativo"
            aoPressionar={() => abrir("ativo_med")}
          />

          <TouchableOpacity
            style={[estilos.botao, botaoDesabilitado && estilos.botaoDesabilitado]}
            onPress={aoSalvar}
            activeOpacity={0.8}
            disabled={botaoDesabilitado}
          >
            <Text style={estilos.textoBotao}>Salvar</Text>
          </TouchableOpacity>

          <Text style={estilos.ajuda}>* Campos obrigatórios</Text>
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
