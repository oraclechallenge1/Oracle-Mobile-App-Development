import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import InputField from '../../components/InputField/InputField';

const LoginScreen = () => {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  useEffect(() => {

    (async () => {

      const savedUser = await AsyncStorage.getItem('@ultimoUsuario');

      if (savedUser) {
        setUsername(savedUser);
        router.push('../Menu/menu');
      }

    })();

  }, []);

  const handleLogin = async () => {

    if (username === 'admin' && password === '123456' || username === 'maria' && password === '12345671' || username === 'joao' && password === '12345678') {

      await AsyncStorage.setItem('@ultimoUsuario', username);
      await AsyncStorage.setItem('@auth', '1');
      router.replace('../Menu/menu');
      
    } else {
      setMessage('Usuário ou senha incorretos')
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

     <InputField
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <InputField
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {message ? <Text style={styles.text_message}>{message}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default LoginScreen;
