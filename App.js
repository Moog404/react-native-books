import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import start from './src/screens/start/index';
import home from './src/screens/home/index';
import books from './src/screens/books/index';
import book from './src/screens/book/index';

const Stack = createStackNavigator();

export default function App() {

	function StartStackScreen() {
		const StartStack = createStackNavigator();

		return (
			<StartStack.Navigator>
				<StartStack.Screen name={"start"} component={start} />
				<StartStack.Screen name={'Accueil'} component={home} />
			</StartStack.Navigator>
		);
	}

	const BookStack = createStackNavigator();
	function BookStackScreen() {
		return (
			<BookStack.Navigator>
				<BookStack.Screen name={"Livres"} component={books} />
				<BookStack.Screen name={"Livre"} component={book} />
			</BookStack.Navigator>
		);
	}
	const Tab = createBottomTabNavigator();

	return (

		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name={"Accueil"} component={StartStackScreen} />
				<Tab.Screen name={"Livres"} component={BookStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
  	);
}


//
// export default function BottomNav() {
// 	return (
// 		<Tab.Navigator>
// 			<Tab.Screen name="Les livres" component={books} />
// 			<Tab.Screen name="Settings" title={"homepage !"} component={index} />
// 		</Tab.Navigator>
// 	);
// }


