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

            <View style={{ width: '100%', height: '95%'}}>
                <FlatList
                    data={books}
                    renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                      key={item.key}
                        onPress={() => navigation.navigate('book', { item })}>
                        <View style={{height:130,margin:5,  flexDirection:'row'}}>
                            <View style={{ width: '20%'}}>
                                {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={{ width: '100%', height: '100%', borderRadius: 10}}/>}
                            </View>
                            <View>
                                <Text style={{fontSize: 18}}>{item.fields["Name"]}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                  )}
                />
            </View>
        </View>
    );
}
