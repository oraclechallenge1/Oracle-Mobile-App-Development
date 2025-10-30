import { StyleSheet } from 'react-native';
const PRIMARY = '#E53935';

const styles = StyleSheet.create({
 safe: { backgroundColor: PRIMARY, height: 250 },
  header: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  headerLogo: { 
    width: 140,
    height: 80 
},
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800' },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: { flex: 1, color: '#111827' }
});

export default styles;