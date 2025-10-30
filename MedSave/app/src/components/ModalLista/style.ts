import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fundoModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cartaoModal: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  tituloModal: { fontSize: 18, fontWeight: "600", marginBottom: 12, textAlign: "center" },
  itemModal: { paddingVertical: 12, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: "#eee" },
  textoItemModal: { fontSize: 16, color: "#333" },
  fecharModal: { marginTop: 15, alignSelf: "center" },
  textoFecharModal: { color: "#E53935", fontSize: 15, fontWeight: "600" },
});

export default styles;