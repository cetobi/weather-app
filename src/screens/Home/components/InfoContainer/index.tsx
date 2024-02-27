import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { CardInfo } from './CardInfo';

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
            <Text style={styles.text}>{props.name_location}</Text>
            <View style={styles.infoContainer}>

                <CardInfo text="Max:" data={Math.floor(props.temp_max)} />
                <CardInfo text="Min:" data={Math.floor(props.temp_min)} />
                <CardInfo text="Umidade:" data={props.humidity} />
                <CardInfo text="Vento:" data={Math.floor(props.wind_speed)} />

            </View>
        </View>
    )
}