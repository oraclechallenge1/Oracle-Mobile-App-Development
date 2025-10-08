import {
  View,
  Text,
  Image,
  StatusBar,
StyleSheet
} from 'react-native';

import styles from './style';


export default function Header() {
  return (
    <View style={styles.safe}>

    <StatusBar barStyle="light-content" />

   
      <View style={styles.header}>
        
        <View style={styles.headerContent}>
          <Image
            source={require('../../../img/medsave_logo_branca.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          
        </View>

        <View style={styles.infoCard}>
          <Image
            source={require('../../../icon/icon-coracao.png')}
            style={{ width: 50, height: 40 }}
            resizeMode="contain"
          />
          <Text style={styles.infoText}>
            Aplicativo em desenvolvimento, a ideia é ser um complemento ao site
            do APEX, de momento desenvolvido CRUD básico.
          </Text>
        </View>
      </View>
    </View>
  );
}


