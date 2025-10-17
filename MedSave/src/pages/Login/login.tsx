import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';  // Importando o tipo
import styles from './style';

// Defina o tipo da navegação (isso depende das rotas que você está usando)
type RootStackParamList = {
  Login: undefined;
  Index: undefined; // A tela para a qual você está navegando
};

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();  // Tipando a navegação
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      navigation.replace('Index');  
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos!');
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
