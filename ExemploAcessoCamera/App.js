import { Button, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState } from 'react';
import ActionButton from './src/components/ActionButton';

export default function App() {  
  
  const [ permission, requestPermission ] = Camera.useCameraPermissions();
  const [ ligado, setLigado ] = useState(false);

  const handleToggleCamera = () => {
    setLigado(!ligado);
  }

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
        <Camera
          style={styles.camera}
          type={CameraType.back}
          flashMode={ligado ? FlashMode.torch : FlashMode.off}

          />       
      </View>
      <ActionButton 
        action={handleToggleCamera}
        title={ ligado ? 'Desligar lanterna' : 'Ligar lanterna' }
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    width: 300,
    height: 300
  }
});
