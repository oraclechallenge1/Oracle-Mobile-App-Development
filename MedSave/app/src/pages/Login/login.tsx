import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import InputField from '../../components/InputField/InputField';
import { ROUTES } from '../../navigation/routes'; 


const LoginScreen = () => {


  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');

  useEffect(() => {

    (async () => {
      const savedUser = await AsyncStorage.getItem('@ultimoUsuario');

      if (savedUser) setUsername(savedUser);

    })();


  }, []);

  const handleLogin = async () => {

    const u = username.trim();
    const p = password;

    const ok =
      (u === 'admin' && p === '123456') ||
      (u === 'maria' && p === '12345671') ||
      (u === 'joao'  && p === '12345678');



    if (ok) {
      await AsyncStorage.setItem('@ultimoUsuario', u);
      await AsyncStorage.setItem('@auth', '1'); 

      router.replace(ROUTES.MENU as any); 

      return;


    }

    setMessage('Usuário ou senha incorretos');
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
        onChangeText={(t) => { setUsername(t); if (message) setMessage(''); }}
      />

      <InputField
        placeholder="Senha"
        value={password}
        onChangeText={(t) => { setPassword(t); if (message) setMessage(''); }}
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
