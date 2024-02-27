import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    data: number;
}

export function CardInfo(props: Props) {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
            <Text>{props.data}</Text>
            <Text>{props.data}</Text>
        </View>
    )
}