import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useRouter } from 'expo-router';
import styles from './style';


type RootStackParamList = {
  Login: undefined;
  Index: undefined; 
};

const LoginScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      router.push('../Menu/menu');  
    } else {
      alert('Erro');
    }
  };

  return (
    <View style={styles.container}>
        <Image
                source={require('../../img/medsave_logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
      <Text style={styles.title}>Bem-vindo</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
