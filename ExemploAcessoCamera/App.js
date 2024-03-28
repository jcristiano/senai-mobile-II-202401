import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from './src/components/ActionButton';

export default function App() {

  const handleButtonAction = () => {
    console.log('Botao Clicado');
  }

  return (
    <View style={styles.container}>
      <ActionButton 
        action={handleButtonAction}
        title={`Dados na console`}
        />
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
