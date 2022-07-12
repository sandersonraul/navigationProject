import React from 'react';
import {View} from 'react-native';
import StyleGlobal  from '../../style/StyleGlobal';
import { Buttons } from '../../components/Buttons';

export function Superior( {navigation} ){
    return(
        <View style={StyleGlobal.screenContainer}>
            <Buttons title = 'Anal. e Desenv. de Sist.' onPress = {() => navigation.navigate('Ads')}/>
            <Buttons title = 'Química' onPress = {() => navigation.navigate('Quimica')}/>
        </View>
    )
}