import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextoMessage } from './src/componentes';

export default function App() {
  return (
    <View style={styles.container}>
      <TextoMessage 
        mensagemErro={""} 
        mensagem={"Minha mensagem do App"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
