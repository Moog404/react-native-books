import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import {getData, storeData} from "../../../utils/StoreManager";
import {handleOpenWithLinking, handleOpenWithWebBrowser} from "../../../utils/WebBrowser";

export default function book({route, navigation}) {
    const { item } = route.params ;
    const [like, setLike] = useState(false);

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
                <Header />
                {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={styles.imageSize} />}
                <View style={{ width: '100%', height: '90%'}}>
                    <TouchableOpacity
                        onPress={ handleOpenWithWebBrowser(item.fields["Wiki link"])}
                        style={styles.button}
                        >
                        <Text>Wiki pour plus d'infos</Text>
                    </TouchableOpacity>
                    <Text>{item.fields["Wiki link"]}</Text>
                    <TouchableOpacity onPress={() => { isLike(!like)}}><Text>{like ? 'Ne plus mettre en favoris' : 'Mettre en favoris'}</Text></TouchableOpacity>
                    <Text>{item.fields["Name"]}</Text>
                    <Text>{item.fields["Synopsis"]}</Text>
                    <Text>Auteur : {item.fields["Author"]}</Text>
                </View>
        </View>
    );
}
