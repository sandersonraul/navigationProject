import React from 'react';
import { View, Text} from 'react-native';
import StyleGlobal from '../style/StyleGlobal';

export function ContainerText ({ text }){

    return (
        <View style = {StyleGlobal.container }>
            <Text style = {StyleGlobal.textContainer}>
                {text}
            </Text>
        </View>
    )
};