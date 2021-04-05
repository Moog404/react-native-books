import {Linking} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


export const handleOpenWithLinking = (link) => {
        Linking.openURL(link);
    };

export const handleOpenWithWebBrowser = (link) => {
        WebBrowser.openBrowserAsync(link);
    };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: '#ecf0f1',
//     },
//     button: {
//         marginVertical: 10,
//     },
// });