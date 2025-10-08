import { StyleSheet } from "react-native";

const PRIMARY = '#E53935';  

const styles = StyleSheet.create({
   safe: { 
    flex: 1, 
    backgroundColor: PRIMARY },
  header: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },

  container: { 
    flex: 1, 
    backgroundColor: "#F8FAFC",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -10,
    overflow: "hidden", 
   },
  
  content: { padding: 16 },
 
  title: { 
    fontSize: 26,
    fontWeight: "800",
    color: PRIMARY,
    marginBottom: 12,
    textAlign: "center" },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { 
      width: 0, 
      height: 4 
    },
    elevation: 2,
  },

  field: { marginBottom: 16 },
  label: { 
    fontSize: 14,
    color: "#374151", 
    marginBottom: 8, 
    fontWeight: "600" },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingLeft: 12,
    fontSize: 14,
    color: "#111827",
  },
  placeholderHint: { 
    marginTop: 6,
    color: "#9CA3AF", 
    fontSize: 12 },

  row: { 
    flexDirection: "row", 
    gap: 8 },

  chip: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  chipGhost: { 
    borderColor: "#D1D5DB", 
    backgroundColor: "#FFFFFF" 
  },
  chipTextGhost: { 
    color: "#111827",
    fontWeight: "600" },
  chipFilled: {
  backgroundColor: PRIMARY,
  borderColor: PRIMARY,
},
chipTextFilled: {
  color: "#FFFFFF",
  fontWeight: "600",
},


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
selectValue: {
  color: "#0F172A",
  fontWeight: "500",
},

  button: {
    height: 52,
    backgroundColor: PRIMARY,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonDisabled: { opacity: 0.6 }, 
  buttonText: { 
    color: "#FFFFFF", 
    fontWeight: "800", 
    fontSize: 16
  },

  helper: { 
    marginTop: 10, 
    color: "#64748B", 
    fontSize: 12 },
  modalBackdrop: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},

modalCard: {
  width: '100%',
  maxWidth: 350,
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 20,
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowOffset: { 
    width: 0, 
    height: 2 
  },
  shadowRadius: 8,
  elevation: 5,
},

modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 12,
  textAlign: 'center',
},

modalItem: {
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},

modalItemText: {
  fontSize: 16,
  color: '#333',
},

modalClose: {
  marginTop: 15,
  alignSelf: 'center',
},

modalCloseText: {
  color: '#E53935',
  fontSize: 15,
  fontWeight: '600',
},

});

export default styles;