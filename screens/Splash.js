import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Splash = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Splash Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		flex: 1,
	},
})

export default Splash
