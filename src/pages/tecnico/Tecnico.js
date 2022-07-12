import React from 'react';
import {View} from 'react-native';
import StyleGlobal  from '../../style/StyleGlobal';
import { Buttons } from '../../components/Buttons';

export function Tecnico( {navigation} ){
    return(
        <View style={StyleGlobal.screenContainer}>
            <Buttons title = 'Téc. em Alimentos' onPress = {() => navigation.navigate('TecAlimentos')}/>
            <Buttons title = 'Téc. em Apicultura' onPress = {() => navigation.navigate('TecApicultura')}/>
            <Buttons title = 'Téc. em Informática' onPress = {() => navigation.navigate('TecInformatica')}/>
        </View>
    )
}