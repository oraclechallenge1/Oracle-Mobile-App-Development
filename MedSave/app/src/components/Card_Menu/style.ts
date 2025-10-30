import { StyleSheet } from 'react-native';

const PRIMARY = '#E53935';  

const styles = StyleSheet.create({


  grid: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  tile: {
    width: '47%',
    height: 140,
    borderWidth: 1.5,
    borderColor: PRIMARY,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
  tileText: { color: PRIMARY, fontWeight: '600' },
});


export default styles;