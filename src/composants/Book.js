import React  from 'react';
import {View, Text, Button, TouchableHighlight, Image} from "react-native";


export default function MyButton(props) {
    return (
        <View style={{ flexDirection: 'row'}}>
            <TouchableHighlight
                key={item.key}
                onPress={() => navigation.navigate('book', { item })}>
                <View>
                    <Text style={{ color: 'blue'}}>{item.fields["Name"]}</Text>
                    {item.fields["Cover Photo"] !== undefined && item.fields["Cover Photo"].length > 0 && <Image source={{uri: item.fields["Cover Photo"][0]["url"]}} style={{ width: '20%', height: '100%'}} />}
                </View>
            </TouchableHighlight>
        </View>
    );
}
