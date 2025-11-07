
import React, { useEffect } from 'react';
import { View, Image  } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './style';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ROUTES} from "./src/navigation/route";
import {isAuthenticated} from "./src/navigation/auth";


export default function SplashScreen() {

    const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const auth = await AsyncStorage.getItem('@auth');
        if (auth) {
          router.replace('./src/pages/Menu/menu');   
        } else {
          router.replace('./src//pages/Login/login');
        }
      } catch (e) {
        router.replace('./src//pages/Login/login');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <View style={styles.container}>
      <Image
        source={require('./src/img/medsave_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

