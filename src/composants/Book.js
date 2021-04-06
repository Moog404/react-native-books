import React  from 'react';
import {View, Text, Button, TouchableHighlight, Image} from "react-native";


export default function Book(props) {
    return (
        <View style={{height:130,margin:5,  flexDirection:'row'}}>
            <View style={{ width: '20%'}}>
                {props.cover !== undefined && props.cover.length > 0 && <Image source={{uri: props.coverUrl}} style={{ width: '100%', height: '100%', borderRadius: 10}}/>}
            </View>
            <View>
                <Text style={{fontSize: 18}}>{props.name}</Text>
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            marginTop: 50,
        },
        bigBlue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
    });
}


