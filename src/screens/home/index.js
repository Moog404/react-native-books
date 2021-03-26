import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import MyButton from "../../composants/MyButton";

export default function index({route, navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            <MyButton
                title="Retour au début"
                onPress={() => navigation.navigate('start')}
              />
            <StatusBar style="auto" />
        </View>
    );
}
