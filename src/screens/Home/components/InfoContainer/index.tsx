import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    name_location: string;
    temp_max: number;
    temp_min: number;
    humidity: number;
    wind_speed: number
}

export function InfoContainer(props: Props) {

    return (
        <View style={styles.container}>
            <Text>{props.name_location}</Text>
            <View style={styles.infoContainer}>
                <Text>Temp Max: {props.temp_max}</Text>
                <Text>Temp Min: {props.temp_min}</Text>
                <Text>Humidade: {props.humidity}</Text>
                <Text>Vento: {Math.floor(props.wind_speed)}km/h</Text>
            </View>
        </View>
    )
}