
export type Aluno = {
    id?: number;
    nome: string;
    cpf: string;
    idade: number;
}

export default class AlunoRepository {

    private tableName: string = "aluno";

    private up() : void {
        
    }
}