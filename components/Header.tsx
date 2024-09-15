import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Header = () => {
	const navigation = useNavigation()

	const handleAvatarPress = () => {
		navigation.navigate("Profile")
	}

	return (
		<View style={styles.header}>
			<Image
				source={require("../assets/images/little-lemon-logo.png")} // Adjust the path as needed
				style={styles.logo}
			/>
			<TouchableOpacity onPress={handleAvatarPress}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>A</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#fff",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	logo: {
		width: 120,
		height: 40,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#ddd",
		justifyContent: "center",
		alignItems: "center",
	},
	avatarText: {
		fontSize: 20,
		color: "#000",
		fontWeight: "bold",
	},
})

export default Header
