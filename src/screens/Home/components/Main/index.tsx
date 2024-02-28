import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    temp: number,
    temp_max: number,
    temp_min: number,
    description: string
}

export function Main(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Text>Imagem</Text>
            </View>
            <View style={styles.containerTemp}>
                <View style={styles.mainTemp}>
                    <Text>{props.description}</Text>
                    <Text>{Math.floor(props.temp)}º</Text>
                </View>
                <View style={styles.maxminTemp}>
                    <Text>{Math.floor(props.temp_max)}º/</Text>
                    <Text>{Math.floor(props.temp_min)}º</Text>
                </View>
            </View>
        </View>
    );
}