import * as SQLite from "expo-sqlite/legacy";


export const db = SQLite.openDatabase("database.sqlite", "1.0");

export const executeTransation = (
    sql: string,
    values?: (string | number | null)[]
) => {
    return new Promise<SQLite.SQLResultSet>((resolve, reject) => {
        
    });
}