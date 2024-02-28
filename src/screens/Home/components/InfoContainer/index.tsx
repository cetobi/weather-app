import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { CardInfo } from './CardInfo';

interface DaysWeek {
    day: string;
    temperature: number;
}

interface Props {
    name_location: string;
    daysWeek: Array<DaysWeek>;
}

export function InfoContainer(props: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.name_location}</Text>
            <View style={styles.infoContainer}>

                <CardInfo text={props.daysWeek[0].day} data={Math.floor(props.daysWeek[0].temperature)} />
                <CardInfo text={props.daysWeek[1].day} data={Math.floor(props.daysWeek[1].temperature)} />
                <CardInfo text={props.daysWeek[2].day} data={Math.floor(props.daysWeek[2].temperature)} />
                <CardInfo text={props.daysWeek[3].day} data={Math.floor(props.daysWeek[3].temperature)} />

            </View>
        </View>
    )
}