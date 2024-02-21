import { StyleSheet, View } from 'react-native';
import { LogoSENAI } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <LogoSENAI />
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
