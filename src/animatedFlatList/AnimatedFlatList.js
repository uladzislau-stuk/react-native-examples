import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	Animated
} from 'react-native'
import WalletCard, { CARD_HEIGHT } from './components/WalletCard'

const data = [1, 2, 3, 4, 5, 6].map((n, idx) => ({
	// this prop is used for caching and tracking item reordering
	// as option use keyExtractor prop
	key: idx.toString(),
	type: `card${n}`
}))

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

function AnimatedFlatListScreen() {
	const y = new Animated.Value(0)
	const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
		// listener: (event) => console.log(event.nativeEvent),
		useNativeDriver: true
	})
	const renderItem = ({item: {type}, index}) => (
		<WalletCard {...{type, y, index}} />
	)
	const getItemLayout = (data, index) => ({
		length: CARD_HEIGHT, offset: CARD_HEIGHT * index, index
	})

	return (
		<SafeAreaView style={styles.container}>
			<AnimatedFlatList
				scrollEventThrottle={16}
				bounces={false}
				data={data}
				renderItem={renderItem}
				getItemLayout={getItemLayout}
				initialNumToRender={5}
				{...{onScroll}}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1

	},
	wrapper: {}
})

export default AnimatedFlatListScreen