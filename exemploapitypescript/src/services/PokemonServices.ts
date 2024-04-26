import { AxiosResponse } from "axios";
import { PokemonListInterface } from "../types/AppInterfaces";
import api from "./api";

interface PokemonServiceListarParams {
    itensPorPagina: number,
    pagina: number;
}

const PokemonService = {
    listarPokemons: async (params : PokemonServiceListarParams) 
        : Promise<PokemonListInterface> => {
        const { itensPorPagina, pagina } = params;
        
        const requestParams = `/?offset=${(pagina-1)*itensPorPagina}&limit=${itensPorPagina}`;  
        try{
            const response: AxiosResponse<PokemonListInterface> = 
                await api.get(requestParams);
            return response.data;
        } catch(err){
            throw new Error("Erro ao consultar a api");
        }        
    }
}

export default PokemonService;