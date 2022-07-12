import React from 'react';

import { Tecnico } from '../pages/tecnico/Tecnico';
import { TecAlimentos } from '../pages/tecnico/TecAlimentos';
import { TecApicultura } from '../pages/tecnico/TecApicultura';
import { TecInformatica } from '../pages/tecnico/TecInformatica';

import { Superior} from '../pages/superior/Superior';
import { Ads } from '../pages/superior/Ads';
import { Quimica } from '../pages/superior/Quimica';

import { Home } from '../pages/home/Home';
import { Sobre } from '../pages/home/Sobre';
import { Endereco } from '../pages/home/Endereco';
import { Horarios } from '../pages/home/Horarios';

import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack1 = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function StackScreenHome () {
    return(
        <Stack1.Navigator>
            <Stack1.Screen name="Home" component={Home} options={{ title: 'IFRN - Pau dos Ferros', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center' }}  />
            <Stack1.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center'}} />
            <Stack1.Screen name="Endereco" component={Endereco} options={{ title: 'Endereço', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'},  headerTitleAlign: 'center'}} />
            <Stack1.Screen name="Horarios" component={Horarios} options={{ title: 'Horários', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'},  headerTitleAlign: 'center'}} />
        </Stack1.Navigator>
    )
}

function StackScreenSuperior () {
    return(
        <Stack1.Navigator>
            <Stack1.Screen name="Superior" component={Superior} options={{ title: 'Ensino Superior - Cursos', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center' }}  />
            <Stack1.Screen name="Ads" component={Ads} options={{ title: 'Anal. e Desenv. de Sist.', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center'}} />
            <Stack1.Screen name="Quimica" component={Quimica} options={{ title: 'Química', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'},  headerTitleAlign: 'center'}} />
        </Stack1.Navigator>
    )
}

function StackScreenTecnico () {
    return(
        <Stack1.Navigator>
            <Stack1.Screen name="Tecnico" component={Tecnico} options={{ title: 'Ensino Técnico - Cursos', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center' }}  />
            <Stack1.Screen name="TecAlimentos" component={TecAlimentos} options={{ title: 'Téc. em Alimentos', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center'}} />
            <Stack1.Screen name="TecApicultura" component={TecApicultura} options={{ title: 'Téc. em Apicultura', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'},  headerTitleAlign: 'center'}} />
            <Stack1.Screen name="TecInformatica" component={TecInformatica} options={{ title: 'Téc. em Informática', headerStyle : {backgroundColor: '#3CB371'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center'}} />
        </Stack1.Navigator>
    )
}

export function Routes() {
    return (
        <BottomTab.Navigator screenOptions={  {style: {backgroundColor: '#3CB371', height: 60} ,labelPosition: 'below-icon', activeTintColor: '#7FFFD4', labelStyle: {fontSize: 15, fontWeight: '700', top: -5}, inactiveTintColor: 'white'}}>
            <BottomTab.Screen name="Home" options={{ tabBarIcon: ({ color }) => <FontAwesome5 name='home' size={30} color={color} /> } } component={StackScreenHome}/>
            <BottomTab.Screen name="Ens. Superior" options={{tabBarIcon: ({ color }) => <FontAwesome5 name="graduation-cap" size={30} color={color} />} } component={StackScreenSuperior}/>
            <BottomTab.Screen name="Ens. Técnico" options={{tabBarIcon: ({ color }) => <FontAwesome5 name="user-graduate" size={30} color={color} />} } component={StackScreenTecnico}/>
        </BottomTab.Navigator>
    );
  }
