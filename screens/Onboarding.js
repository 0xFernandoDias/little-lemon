import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native"

const logo = require("../assets/images/react-logo.png")

const Onboarding = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	// Validation functions
	const isNameValid = name.trim().length > 0
	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

	// Enable button only when both inputs are valid
	const isButtonEnabled = isNameValid && isEmailValid

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Little Lemon</Text>
				<Image source={logo} style={styles.logo} />
			</View>

			<TextInput
				style={styles.input}
				placeholder="Enter your name"
				value={name}
				onChangeText={setName}
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter your email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<Button
				title="Next"
				onPress={() => {
					// Action for button press will be added later
				}}
				disabled={!isButtonEnabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		flex: 1,
	},
	logo: {
		width: 40,
		height: 40,
		marginLeft: 10,
	},
	input: {
		height: 40,
		borderColor: "#ddd",
		borderWidth: 1,
		marginBottom: 20,
		paddingHorizontal: 10,
	},
})

export default Onboarding
