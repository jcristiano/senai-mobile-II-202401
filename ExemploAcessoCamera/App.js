import { Button, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {  
  
  const [ permission, requestPermission ] = Camera.useCameraPermissions();

  if (!permission){
    return <View><Text>Problema de permissao</Text></View>
  }

  if (!permission.granted){
    return(
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos de acesso a sua camera</Text>
        <Button onPress={requestPermission} title='Atribuir permissao' />
      </View>
    );
  }


  return (
    <>
      <View style={styles.container}>
        
      </View>      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    width: 0,
    height: 0
  }
});
