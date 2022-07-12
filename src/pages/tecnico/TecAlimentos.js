import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function TecAlimentos(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'Atua no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, realizando análises físico- químicas, microbiológicas e sensoriais. Auxilia no planejamento, coordenação e controle de atividades do setor. Realiza a sanitização das indústrias alimentícias e de bebidas. Controla e corrige desvios nos processos manuais e automatizados. Acompanha a manutenção de equipamentos. Participa do desenvolvimento de novos produtos e processos Possibilidades de atuação: Indústrias de alimentos e bebidas. Entrepostos de armazenamento e beneficiamento. Laboratórios, institutos de pesquisa e consultoria. Órgãos de fiscalização sanitária e proteção ao consumidor. Indústria de insumos para processos e produtos. - Modalidade: Presencial. - Carga horária do curso: 3.480h. - Duracão do curso: 4 anos. - Resolucão de criacão do curso: Resolução Nº 18/2006-CONSUP/IFRN, de 26/07/2006.'/>  
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