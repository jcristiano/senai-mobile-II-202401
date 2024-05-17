import { executeTransation } from "../database/SQLiteDatabase";
import { StringBuilderUtils } from "../utils/StringBuilderUtils";

export type Aluno = {
    id?: number;
    nome: string;
    cpf: string;
    idade: number;
}

export default class AlunoRepository {

    private tableName: string = "aluno";

    private async up() : Promise<void> {
        const sb: StringBuilderUtils = new StringBuilderUtils();
        sb.append(`CREATE TABLE IF NOT EXISTS ${this.tableName} ( `);
        sb.append("id INTEGER PRIMARY KEY AUTOINCREMENT, ");
        sb.append("nome TEXT NOT NULL, ");
        sb.append("cpf TEXT NOT NULL, ");
        sb.append("idade INTEGER NOT NULL );");
        const sql: string = sb.toString();
        await executeTransation(sql);
    }
}