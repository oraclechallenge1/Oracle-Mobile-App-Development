import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  seguro: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  card:{
    backgroundColor: '#fff',
            borderRadius: 12,
            padding: 16,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E53935',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
  },
  category:{
    fontSize: 20, 
    fontWeight: '700', 
    color: '#111827', 
    marginBottom: 8 
  },
  description:{
  fontSize: 14, 
  color: '#6B7280', 
  lineHeight: 20
  },
  value: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
});
