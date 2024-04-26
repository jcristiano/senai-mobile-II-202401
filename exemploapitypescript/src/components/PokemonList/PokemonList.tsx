import React, { useEffect } from "react";
import PokemonService from "../../services/PokemonServices";

const PokemonList: React.FC = () => {
    useEffect( () => {
        PokemonService.listarPokemons({
            itensPorPagina: 20, 
            pagina: 1
        });
    }, []);
    
    return(
        <React.Fragment></React.Fragment>
    )
}

export default PokemonList;