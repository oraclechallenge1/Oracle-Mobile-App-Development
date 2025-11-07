import AsyncStorage from '@react-native-async-storage/async-storage';

export async function isAuthenticated(): Promise<boolean> {
  const flag = await AsyncStorage.getItem('@auth');
  return !!flag;
}
