import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import Book from "../../composants/Book";

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

            <View style={{ width: '100%', height: '95%'}}>
                <FlatList
                    data={books}
                    renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                      key={item.key}
                        onPress={() => navigation.navigate('book', { item })}>
                        <Book
                            cover={item.fields["Cover Photo"]}
                            name={item.fields["Name"]}
                            coverUrl={item.fields["Cover Photo"][0]["url"]}
                        />
                    </TouchableHighlight>
                  )}
                />
            </View>
        </View>
    );
}
