import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rotulo: { fontSize: 14, color: "#374151", marginBottom: 8, fontWeight: "600" },
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
  valorSeletor: { color: "#0F172A", fontWeight: "500" },
  seta: { color: "#6B7280", marginLeft: 8 },
});

export default styles;