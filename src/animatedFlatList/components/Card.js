import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window')
const ratio = 0.6

export const CARD_WIDTH = width * 0.8
export const CARD_HEIGHT = CARD_WIDTH * ratio

const styles = StyleSheet.create({
	card: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT
	}
})

export default ({type}) => {
	let source
	switch (type) {
		case 'card1':
			source = require('../assets/card1.png')
			break
		case 'card2':
			source = require('../assets/card2.png')
			break
		case 'card3':
			source = require('../assets/card3.png')
			break
		case 'card4':
			source = require('../assets/card4.png')
			break
		case 'card5':
			source = require('../assets/card5.png')
			break
		case 'card6':
			source = require('../assets/card6.png')
			break
		default:
			throw Error('Invalid card style')
	}
	return <Image style={styles.card} {...{source}} />
}