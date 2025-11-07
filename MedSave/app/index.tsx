import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { isAuthenticated } from './src/navigation/auth';
import { ROUTES } from './src/navigation/routes';
import styles from './style';

export default function SplashScreen() {



  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const timer = setTimeout(async () => {

      try {
        const ok = await isAuthenticated();


        if (!mounted) return;
        router.replace(ok ? ROUTES.MENU : ROUTES.LOGIN); 

      } catch {
        if (!mounted) return;
        router.replace(ROUTES.LOGIN);
      }

    }, 3000); 

    return () => {

      mounted = false;
      clearTimeout(timer);
    };


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
