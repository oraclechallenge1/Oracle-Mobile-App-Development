// src/pages/MedicationDetail/style.js
import { StyleSheet } from 'react-native';
const PRIMARIA = "#E53935"; 

const styles = StyleSheet.create({
  seguro: {
    flex: 1,
    backgroundColor: PRIMARIA,  
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARIA,  
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',  
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',  
    lineHeight: 24,
  },
});

export default styles;
