// components/Banner.js

import React, { useState, useCallback } from "react"
import { View, Text, TextInput, Image, StyleSheet } from "react-native"
import debounce from "lodash.debounce"

const Banner = ({ onSearch }) => {
	const [searchText, setSearchText] = useState("")

	const debouncedSearch = useCallback(
		debounce((text) => onSearch(text), 500),
		[]
	)

	const handleSearchChange = (text) => {
		setSearchText(text)
		debouncedSearch(text)
	}

	return (
		<View style={styles.banner}>
			<Image
				source={require("../assets/images/banner.jpg")}
				style={styles.image}
			/>
			<Text style={styles.title}>Little Lemon</Text>
			<Text style={styles.subtitle}>
				Your favorite meals delivered to your door
			</Text>
			<TextInput
				style={styles.searchBar}
				placeholder="Search for a dish..."
				value={searchText}
				onChangeText={handleSearchChange}
			/>
			<Text style={styles.description}>
				Discover the finest dishes made with fresh ingredients and a dash of
				love.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	banner: {
		alignItems: "center",
		padding: 20,
		backgroundColor: "#f8f8f8",
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	subtitle: {
		fontSize: 18,
		color: "#555",
		marginBottom: 10,
	},
	searchBar: {
		width: "100%",
		padding: 10,
		borderColor: "#ddd",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		color: "#666",
		textAlign: "center",
	},
})

export default Banner
