import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import * as Location from 'expo-location';

import { openweather } from '../../API/OpenWeather';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { InfoContainer } from './components/InfoContainer';

import { styles } from './styles';

export function Home() {
    const [location, setLocation] = useState<any>();

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let currentLocation: any = await Location.getCurrentPositionAsync({});
            let { latitude, longitude } = currentLocation.coords

            console.log(latitude, longitude)

            const fetchWeather = async () => {
                const location = await openweather(latitude, longitude)
                setLocation(location)
                console.log(location)
            }
            fetchWeather()
        })();
    }, []);

    return (
        <View style={styles.container}>
            {location && (
                <>
                    <Header />

                    <Main temp={location.main.temp} description={location.weather[0].description} />

                    <InfoContainer
                        name_location={location.name}
                        temp_max={location.main.temp_max}
                        temp_min={location.main.temp_min}
                        humidity={location.main.humidity}
                        wind_speed={location.wind.speed * 3.6}
                    />
                </>
            )}
        </View>
    );
}