import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function Ads(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'Curso Superior de Tecnólogo em Análise e Desenvolvimento de Sistemas tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio do desenvolvimento de softwares e, dessa forma, realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo e para a melhoria da qualidade de vida das populações.'/>  
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