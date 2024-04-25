import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";

const useShakeDetector = (tempoParaRepouso=500) => {

    const [ isShaking, setIsShaking ] = useState(false);

    useEffect( () => {
        var subscription;
        const corteForcaG = 2;
        var estaMovimentando = false;

        const handleShake = ({x, y, z}) => {
            const aceleracao = Math.sqrt( x ** 2 + y ** 2 + z ** 2);
            console.log({x, y, z});
            if (aceleracao > corteForcaG) {
                if(!estaMovimentando){
                    estaMovimentando=true;
                    setIsShaking(true);
                    setTimeout( () => {
                        setIsShaking(false);
                        estaMovimentando = false;
                    }, tempoParaRepouso);
                }
            }
        };

        const subscribe = async () => {
            subscription = Accelerometer.addListener(handleShake);
            Accelerometer.setUpdateInterval(200);
        }

        const unsubscribe = () => {
            subscription && subscription.remove();
        }

        subscribe();

        return () => unsubscribe();
    }, []);

    return {
        isShaking
    }
}

export default useShakeDetector;