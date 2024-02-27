import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    temp: number,
    description: string
}

export function Main(props: Props) {
    return (
        <View>
            <Text>Imagem</Text>
            <Text>{Math.floor(props.temp)}º</Text>
            <Text>{props.description}</Text>
        </View>
    );
}