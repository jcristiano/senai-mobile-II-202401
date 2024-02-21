import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LogoSENAI = () => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('./img/logo_senai.png')}                
                style={styles.image}
                resizeMode="contain"
                />            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',        
    }
});

export { LogoSENAI }