import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Test() {
  return (
     <View style={{ flex: 1, backgroundColor: '#006C54', alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        source={require('../../MedSave_logo.json')} // corrija o caminho se necessário
        autoPlay
        loop={false}
        style={{ width: '100%', height: '100%', backgroundColor: 'black' }} // temporário pra ver área
        />

    </View>
  );
}


