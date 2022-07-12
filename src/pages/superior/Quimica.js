import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function Quimica(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico (detergentes, cosméticos, outros), de insumos agrícolas (fertilizantes e defensivos), insumos industriais (corantes, estabilizantes, conservantes, aromatizantes e aditivos em geral para conferir propriedades específicas a certos produtos ou materiais), matérias-primas (solventes, plásticos, borrachas e produtos químicos em geral).'/>  
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