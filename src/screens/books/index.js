import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import getBooks from "../../../models/books";

export default function books({route, navigation}) {
    const [ books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData()  {
            let books = await getBooks() ;
            setBooks(books);
        }
        fetchData() ;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <View style={{ width: '100%', height: '90%'}}>
                <FlatList
                    data={books}
                    renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                      key={item.key}
                        onPress={() => navigation.navigate('book', { item })}>
                        <View>
                            <Text style={{ color: 'blue'}}>{item.fields["Name"]}</Text>
                            {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={{ width: '20%', height: '100%'}} />}
                        </View>
                    </TouchableHighlight>
                  )}
                />
            </View>
        </View>
    );
}
