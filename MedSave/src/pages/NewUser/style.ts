import { StyleSheet } from "react-native";

const PRIMARY = '#E53935'; 

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: PRIMARY 
  },
  header: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },
  container: { 
    flex: 1, 
    backgroundColor: "#F8FAFC" 
  },
  content: { padding: 16 },
  title: { 
    fontSize: 26, 
    fontWeight: "800", 
    color: PRIMARY, 
    marginBottom: 12, 
    textAlign: "center" 
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  section: {
    fontSize: 13,
    fontWeight: "800",
    color: PRIMARY,
    marginBottom: 8,
    marginTop: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  field: { marginBottom: 16 },
  label: { 
    fontSize: 14, 
    color: "#374151", 
    marginBottom: 8, 
    fontWeight: "600" 
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  hint: { marginTop: 6, color: "#9CA3AF", fontSize: 12 },

  select: {
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
  selectPlaceholder: { color: "#9CA3AF" },
  caret: { 
    color: "#6B7280", 
    marginLeft: 8 },

  smallNote: { 
    marginTop: 6, 
    color: "#94A3B8", 
    fontSize: 12 },

  button: {
    height: 52,
    backgroundColor: "#0F172A",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonDisabled: { opacity: 0.6 }, // visual desabilitado (sem ação)
  buttonText: { 
    color: "#FFFFFF", 
    fontWeight: "800", 
    fontSize: 16 },

  reqNote: { 
    marginTop: 10, 
    color: "#64748B", 
    fontSize: 12 },
});

export default styles;