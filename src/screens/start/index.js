import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";

export default function index({navigation}) {
    useEffect(() => {
        navigation.navigate('Livres');
    }, []);

    return (
        <View style={styles.container}>
            {<Button onPress={() => navigation.navigate('Livres')} title={"Afficher les livres !"} />}
            {<Button onPress={() => navigation.navigate('Accueil')} title={"homepage !"} />}
            <StatusBar style="auto" />
        </View>
    );
}
