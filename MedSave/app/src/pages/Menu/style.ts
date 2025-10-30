import { StyleSheet } from 'react-native';


const PRIMARY = '#E53935';  
const BG = '#F7F7F7';       
const TEXT_MUTED = '#6B7280';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: PRIMARY },
  header: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },

  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  searchRow: {
    height: 46,
    borderRadius: 12,
    backgroundColor: BG,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    color: '#111827',
  },
  scanButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

});

export default styles;