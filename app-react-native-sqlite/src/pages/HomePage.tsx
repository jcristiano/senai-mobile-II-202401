import React, { useState } from "react";
import AlunoRepository, { Aluno } from "../repository/AlunoRepository";
import { Button, Text, View } from "react-native";

const repository = new AlunoRepository();

const HomePage: React.FC = () => {

    const [ alunos, setAlunos ] = useState<Aluno[]>([]);

    const criarAluno = async () => {
        const alunoId = await repository.create(
            {
                nome: 'Nome de Teste',
                cpf: '999999999',
                idade: Math.floor(Math.random() * (100 - 11 )) + 10 
            }
        );
        console.log('ALUNO CRIADO COM ID:', alunoId);
    }


    const listarAlunos = async () => {
        const alunos: Aluno[] = await repository.listarAlunos();
        setAlunos(alunos);
        console.log(alunos);
    }

    return(
        <View>
            <Button onPress={criarAluno} title="Criar" />
            <Button onPress={listarAlunos} title="Listar" />
            {alunos.map( aluno => (
                <View key={`aluno-item-${aluno.id}`}>
                    <Text>{`${aluno.id} - ${aluno.nome} - ${aluno.cpf}-${aluno.idade}`}</Text>
                </View>
            ) )}
        </View>
    );
}

export default HomePage;