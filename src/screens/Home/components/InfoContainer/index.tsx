import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function InfoContainer() {
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