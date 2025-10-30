import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  linha: { flexDirection: "row", gap: 8 },
  pilula: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  pilulaFantasma: { borderColor: "#D1D5DB", backgroundColor: "#FFFFFF" },
  textoFantasma: { color: "#111827", fontWeight: "600" },
  textoPreenchido: { color: "#FFFFFF", fontWeight: "600" },
});
export default styles;
