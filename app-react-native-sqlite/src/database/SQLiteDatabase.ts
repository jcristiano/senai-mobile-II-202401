import * as SQLite from "expo-sqlite/legacy";


export const db = SQLite.openDatabase("database.sqlite", "1.0");