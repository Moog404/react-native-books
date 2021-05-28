import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import styles from './styles';
import Book from "../../composants/Book";
import getBooks from "../../../models/books";
import {SearchBar} from "react-native-elements";

export default function books({route, navigation}) {
    const [ books, setBooks] = useState([]);
    const [ dataBooks, setDataBooks] = useState([]);
    const [ input, setInput] = useState([]);

    useEffect(() => {
        async function fetchData()  {
            let books = await getBooks() ;
            setBooks(books);
            setDataBooks(books);
        }
        fetchData() ;
    }, []);

    const updateInput = async (input) =>{
        const filtered = dataBooks.filter(item => {
            return item.fields['Name'].toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setBooks(filtered);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ width: '100%', height: '95%'}}>
                <SearchBar
                    placeholder="Rechercher"
                    onChangeText={updateInput}
                    value={input}
                />
                <FlatList
                    data={books}
                    renderItem={({ item }) => (
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
