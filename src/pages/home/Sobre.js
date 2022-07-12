import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function Sobre(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'O Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN) é uma instituição que oferece educação básica, profissional e superior, de forma "pluricurricular". É uma instituição multicampi, especializada na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino, com base na conjugação de conhecimentos técnicos e tecnológicos às suas práticas pedagógicas. Criado mediante transformação do Centro Federal de Educação Tecnológica do Rio Grande do Norte (CEFET-RN), o IFRN possui hoje uma estrutura multicampi, com unidades de ensino em diversas regiões estratégicas do estado.'/>  
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