import { StyleSheet } from "react-native";

const PRIMARIA = "#E53935";

const estilos = StyleSheet.create({
  seguro: {
    flex: 1,
    backgroundColor: PRIMARIA,
  },
  cabecalho: {
    backgroundColor: PRIMARIA,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  conteudo: { padding: 16 },

  titulo: {
    fontSize: 26,
    fontWeight: "800",
    color: PRIMARIA,
    marginBottom: 12,
    textAlign: "center",
  },

  cartao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  secao: {
    fontSize: 13,
    fontWeight: "800",
    color: PRIMARIA,
    marginBottom: 8,
    marginTop: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  campo: { marginBottom: 16 },

  rotulo: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 8,
    fontWeight: "600",
  },

  entrada: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },

  dica: { marginTop: 6, color: "#9CA3AF", fontSize: 12 },

  seletor: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholderSeletor: { color: "#9CA3AF" },
  seta: { color: "#6B7280", marginLeft: 8 },
  valorSeletor: { color: "#0F172A", fontWeight: "500" },

  notaPequena: { marginTop: 6, color: "#94A3B8", fontSize: 12 },

  botao: {
    height: 52,
    backgroundColor: PRIMARIA,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  botaoDesabilitado: { opacity: 0.6 },
  textoBotao: { color: "#FFFFFF", fontWeight: "800", fontSize: 16 },

  notaObrig: { marginTop: 10, color: "#64748B", fontSize: 12 },

  // Modal
  fundoModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cartaoModal: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  itemModal: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textoItemModal: {
    fontSize: 16,
    color: "#333",
  },
  fecharModal: {
    marginTop: 15,
    alignSelf: "center",
  },
  textoFecharModal: {
    color: PRIMARIA,
    fontSize: 15,
    fontWeight: "600",
  },

  ajuda: { marginTop: 10, color: "#64748B", fontSize: 12 },

  // Senha com alternar
  entradaComAlternar: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoMostrar: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 8,
  },
  textoBotaoMostrar: {
    fontWeight: "600",
  },
});

export default estilos;
