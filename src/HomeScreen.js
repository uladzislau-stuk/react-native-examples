import React from 'react'
import {
	SafeAreaView,
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native'

const screens = [
	{route: 'AnimatedFlatList', name: 'Animated Flat List'}
]

function HomeScreen({navigation}) {

	return (
		<View styles={styles.container}>
			<ScrollView styles={styles.wrapper}>
				<View style={styles.list}>
					{screens.map(({route, name}, idx) => (
						<TouchableOpacity
							key={idx}
							activeOpacity={0.4}
							style={styles.listItem}
							onPress={() => navigation.navigate(route, {name})}
						>
							<Text style={styles.listItemText}>{name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	wrapper: {

	},
	list: {
		padding: 30
	},
	listItem: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lavender',
		borderBottomWidth: 3,
		borderBottomColor: 'navy',
		marginBottom: 15
	},
	listItemText: {
		fontSize: 18,
		fontWeight: '400'
	}
})

export default HomeScreen
