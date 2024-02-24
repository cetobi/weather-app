import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Home() {

    function Header() {
        return (
            <View>
                <Text>Modo escuro</Text>
                <Text>Search...</Text>
            </View>
        );
    }

    function Main() {
        return (
            <View>
                <Text>Imagem</Text>
                <Text>Temperatura</Text>
                <Text>Descrição</Text>
            </View>
        );
    }

    function InfoContainer() {
        return (
            <View>
                <Text>Localização</Text>
                <View>
                    <Text>Sensação térmica: </Text>
                    <Text>Temp Max: </Text>
                    <Text>Temp Min: </Text>
                    <Text>Humidade: </Text>
                    <Text>Velocidade do vento: </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <Main />

            <InfoContainer />
        </View>
    );
}