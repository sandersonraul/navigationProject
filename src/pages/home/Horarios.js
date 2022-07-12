import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function Horarios(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)'/>  
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