import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Teste(){
    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    fontWeight: '800',
                }, 
                activeTintColor: 'black',
                activeBackgroundColor: '#e6ffe6',
            }}
        >
            <Tab.Screen name="Registrar Tarefa" component={Register} options={{
                headerShown: false ,
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="add-to-list" size={size} color={color} />
                )
            }}  
            />
            <Tab.Screen name="Listar Tarefa" component={Schedule} options={{ 
                headerShown: false ,
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="list" size={size} color={color} />
                )
            }}  
            />
        </Tab.Navigator>
    );
}