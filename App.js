import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text
} from 'react-native'
import HomeScreen from './src/HomeScreen'
import AnimatedFlatList from './src/animatedFlatList/AnimatedFlatList'

const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='AnimatedFlatList'>
				<Stack.Screen name="Home" component={HomeScreen}/>
				<Stack.Screen name="AnimatedFlatList"
							  component={AnimatedFlatList}
							  options={({route}) => ({title: route?.params?.name})}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({})

export default App
