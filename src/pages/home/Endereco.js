import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function Endereco(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'BR 405, KM 154, S/N, Bairro Chico Cajá, Pau dos Ferros/RN, CEP 59900-000, CNPJ: 10.877.412/0006-72 Coordenação de Comunicação Social e Eventos (COCSEV)'/>  
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