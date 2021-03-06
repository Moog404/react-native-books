import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, List, TouchableHighlight, ScrollView} from 'react-native';
import styles from './styles';
import {getData, storeData} from "../../../utils/StoreManager";
import {handleOpenWithLinking, handleOpenWithWebBrowser} from "../../../utils/BrowserLink";
import getAuthor from "../../../models/author";
import ImagePickerExample from "../../composants/imagePicker";

export default function book({route, navigation}) {
    const { item } = route.params ;
    const [like, setLike] = useState(false);
    let [ authors, setAuthors] = useState([]);
    let [ authorsName, SetAuthorsName] = useState('');

    useEffect(() => {
        async function fetchData()  {
            for (const authorId of item.fields['Author']) {
                let author = await getAuthor(authorId) ;
                authors.push(author);
                authorsName += ' '+ author.fields['Name'];
            }
            setAuthors(authors);
            SetAuthorsName(authorsName);
        }
        fetchData() ;
    }, []);

    useEffect(()=>{
        async function getLike() {
            let like = await getData('@book_like_'+item.id);
            setLike(like);
        }
            getLike();
    }, []);

    const isLike = async (like) => {
        const key = '@book_like_' + item.id ;
        await storeData(key, like) ;
        setLike(like);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={{ width: '100%', height: '90%'}}>
                <View style={{ flexDirection:'row'}}>
                    <View>
                        {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={styles.imageSize} />}
                    </View>
                    <View>
                        <Text style={{fontSize: 20}}>{item.fields["Name"]}</Text>
                        <Text style={{fontSize: 18}}>Auteur: {authorsName}</Text>

                        <TouchableOpacity onPress={() => { isLike(!like)}}><Text>{like ? 'Ne plus mettre en favoris' : 'Mettre en favoris'}</Text></TouchableOpacity>

                    </View>
                </View>
                <Button
                    title="Lien Wiki"
                    onPress={() => handleOpenWithLinking(item.fields["Wiki link"])}
                >
                </Button>
                <Text>{item.fields["Synopsis"]}</Text>
            </ScrollView>
            <ImagePickerExample/>
        </View>
    );
}
