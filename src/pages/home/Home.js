import React from 'react';
import {View} from 'react-native';
import StyleGlobal  from '../../style/StyleGlobal';
import { Buttons } from '../../components/Buttons';

export function Home ( {navigation} ){
    return(
        <View style={StyleGlobal.screenContainer}>
            <Buttons title = 'Sobre' onPress = {() => navigation.navigate('Sobre')}/>
            <Buttons title = 'Endereço' onPress = {() => navigation.navigate('Endereco')}/>
            <Buttons title = 'Horários' onPress = {() => navigation.navigate('Horarios')}/>
        </View>
    )
}