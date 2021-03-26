import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";

export default function book({route, navigation}) {
    const { item } = route.params ;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <View style={{ width: '100%', height: '90%'}}>
                <Text>{item.fields["Name"]}</Text>
                <Text>{item.fields["Synopsis"]}</Text>
                <Text>Auteur : {item.fields["Author"]}</Text>
                {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={{ width: '100%', height: '100%'}} />}
            </View>
        </View>
    );
}
