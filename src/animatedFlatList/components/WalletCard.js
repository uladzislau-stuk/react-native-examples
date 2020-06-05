import React from 'react'
import { Animated, Dimensions, StyleSheet } from 'react-native'
import Card, { CARD_HEIGHT as DEFAULT_CARD_HEIGHT } from './Card'

export const MARGIN = 16
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2
// https://animationbook.codedaily.io/interpolate/
const {height: wHeight} = Dimensions.get('window')
const height = wHeight - 64

const WalletCard = ({type, y, index}) => {
	const position = Animated.subtract(index * CARD_HEIGHT, y)
	const isDisappearing = -CARD_HEIGHT
	const isTop = 0
	const isBottom = height - CARD_HEIGHT
	const isAppearing = height

	const translateY = Animated.add(
		Animated.add(
			y,
			y.interpolate({
				inputRange: [0, 0.00001 + index * CARD_HEIGHT],
				outputRange: [0, -index * CARD_HEIGHT],
				extrapolate: 'clamp'
			})
		),
		position.interpolate({
			inputRange: [isBottom, isAppearing],
			outputRange: [0, -CARD_HEIGHT / 4],
			extrapolate: 'clamp'
		})
	)
	const scale = position.interpolate({
		inputRange: [isDisappearing, isTop, isBottom, isAppearing],
		outputRange: [0.5, 1, 1, 0.5],
		extrapolate: 'clamp'
	})
	const opacity = position.interpolate({
		inputRange: [isDisappearing, isTop, isBottom, isAppearing],
		outputRange: [0.5, 1, 1, 0.5]
	})

	return (
		<Animated.View
			style={[styles.card, {
				transform: [{translateY}, {scale}],
				opacity
			}]}
			key={index}
		>
			<Card {...{type}} />
		</Animated.View>
	)
}
// 100 /
// 100 \
const styles = StyleSheet.create({
	card: {
		marginVertical: MARGIN,
		alignSelf: 'center'
	}
})

export default WalletCard