import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContainerText } from '../../components/ContainerText';

export function TecApicultura(){
    return(
        <View style = {StyleItems.Items}>
            <ContainerText text = 'Executa o planejamento, a implantação, a manutenção e a gestão de apiários. Atua no beneficiamento e processamento de mel, própolis, geléia real e demais produtos da atividade apícola. Acompanha pesquisas sobre produção intensiva e artesanal, terapias com mel, controle de qualidade e aprimoramento de espécies. Comercializa produtos apícolas, organiza feiras e exposições da atividade apicultora, incentivando a realização de negócios no setor ou mesmo a criação artesanal de abelhas. Possibilidades de atuação Apiários e demais estabelecimentos de beneficiamento e processamento e comercialização de produtos da apicultura. - Modalidade: Presencial. - Carga horária do curso: 4.010h. - Duracão do curso: 4 anos. - Resolucão de criacão do curso: Resolução Nº 24/2011-CONSUP/IFRN, de 09/10/2011.'/>  
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