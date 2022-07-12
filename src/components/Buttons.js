import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleGlobal from '../style/StyleGlobal';

export function Buttons ({ title, onPress }){
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style = {StyleGlobal.button}>
                <Text style={StyleGlobal.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};