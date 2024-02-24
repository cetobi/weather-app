import React from 'react';
import { View } from 'react-native';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { InfoContainer } from './components/InfoContainer';

import { styles } from './styles';

export function Home() {

    return (
        <View style={styles.container}>
            <Header />

            <Main />

            <InfoContainer />
        </View>
    );
}