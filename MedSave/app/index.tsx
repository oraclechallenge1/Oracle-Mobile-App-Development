
import React, { useEffect } from 'react';
import { View, Image  } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './style';

export default function SplashScreen() {

    const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('./src/pages/Login/login'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [router]);

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

