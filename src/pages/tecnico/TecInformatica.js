import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function TecInformatica(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'Desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ambientes de desenvolvimentos de sistemas, sistemas operacionais e banco de dados. Realiza testes de software, mantendo registro que possibilitem análises e refinamento dos resultados. Executa manutenção de programas de computadores implantados. Possibilidades de atuação: Instituições públicas, privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores. - Modalidade: Presencial. - Carga horária do curso: 3880h. - Duracão do curso: 4 anos. - Resolucão de criacão do curso: Resolução Nº 13/2009-CONSUP/IFRN, de 22/05/2009.'/>
        </View>
    )
};

const StyleItems = StyleSheet.create({
    Items : {
        flexDirection: 'column',
        alignItems: 'center',
        top: 20
    }
})