import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import estilos from "./style";
import Header from "../../components/ui/Header/header";

import ModalLista, { Opcao } from "../../components/ModalLista/modalLista";
import CampoTexto from "../../components/Input/input";
import SeletorLinha from "../../components/Select/select";
import PilulasToggle from "../../components/PilulasToggle/pilulasToggle";

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
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState<string>("");

  const [status, setStatus] = useState<"Ativo" | "Inativo" | null>(null);
  const [categoria, setCategoria] = useState<Opcao | null>(null);
  const [unidade, setUnidade] = useState<Opcao | null>(null);
  const [forma, setForma] = useState<Opcao | null>(null);
  const [ativoMed, setAtivoMed] = useState<Opcao | null>(null);

  const [modalAberto, setModalAberto] = useState<ChaveModal>(null);

  const limparCampos = () => {
    setNome("");
    setStatus(null);
    setCategoria(null);
    setUnidade(null);
    setForma(null);
    setAtivoMed(null);
    setErroNome("");
  };

  const abrir = (m: ChaveModal) => setModalAberto(m);
  const fechar = () => setModalAberto(null);

  const onChangeNome = (t: string) => {
    setNome(t);
    if (t.trim().length >= 3) setErroNome(""); 
    else setErroNome("Nome do medicamento muito curto."); 
  };

  const aoSalvar = () => {
    const okNome = nome.trim().length >= 3;

    if (!okNome) {
      setErroNome("Nome do medicamento muito curto.");
      return;
    }

    Alert.alert("Simulação", "Interação concluída, mas nada foi salvo.");
    limparCampos(); 
  };

  let dadosModal:
    | { titulo: string; lista: Opcao[]; set: (o: Opcao | null) => void }
    | null = null;

  if (modalAberto === "categoria") {
    dadosModal = { titulo: "categoria", lista: CATEGORIAS, set: setCategoria };


  } else if (modalAberto === "unidade") {

    dadosModal = { titulo: "unidade", lista: UNIDADES, set: setUnidade };
  }
  
  else if (modalAberto === "forma") {
    dadosModal = { titulo: "forma", lista: FORMAS, set: setForma };
  } 
  else if (modalAberto === "ativo_med") {
    dadosModal = { titulo: "ativo_med", lista: ATIVOS, set: setAtivoMed };
  } else {
    dadosModal = null;
  }

  const botaoDesabilitado = !nome || !status || !categoria || !unidade || !forma || !ativoMed;

  return (
    <View style={estilos.seguro}>
      <Header />
      <ScrollView style={estilos.container} contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.titulo}>Cadastrar Medicamento</Text>

        <View style={estilos.cartao}>
          <View style={{ marginBottom: 16 }}>
            <CampoTexto
              rotulo="Nome do medicamento *"
              valor={nome}
              aoMudarTexto={onChangeNome}
              placeholder="Ex.: Dipirona 500 mg"
              dica="Ex.: Dipirona 500 mg"
              erro={erroNome}
            />
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 14, color: "#374151", marginBottom: 8, fontWeight: "600" }}>
              Status *
            </Text>
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
          aoEscolher={(o) => dadosModal!.set(o)}
          aoFechar={fechar}
        />
      )}
    </View>
  );
}
