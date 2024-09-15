// ProfileScreen.js

import React, { useState, useEffect } from "react"
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { MaskService } from "react-native-masked-text"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ProfileScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [avatar, setAvatar] = useState(null)
	const [emailNotifications, setEmailNotifications] = useState({
		offers: false,
		updates: false,
	})

	useEffect(() => {
		const fetchProfileData = async () => {
			try {
				const profile = JSON.parse(await AsyncStorage.getItem("profile")) || {}
				setFirstName(profile.firstName || "")
				setLastName(profile.lastName || "")
				setEmail(profile.email || "")
				setPhoneNumber(profile.phoneNumber || "")
				setAvatar(profile.avatar || null)
				setEmailNotifications(
					profile.emailNotifications || {
						offers: false,
						updates: false,
					}
				)
			} catch (error) {
				console.error("Failed to fetch profile data", error)
			}
		}

		fetchProfileData()
	}, [])

	const handleImagePicker = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.cancelled) {
			setAvatar(result.uri)
		}
	}

	const handleSaveChanges = async () => {
		try {
			const profile = {
				firstName,
				lastName,
				email,
				phoneNumber,
				avatar,
				emailNotifications,
			}
			await AsyncStorage.setItem("profile", JSON.stringify(profile))
			Alert.alert("Success", "Profile updated successfully!")
		} catch (error) {
			console.error("Failed to save profile data", error)
		}
	}

	const handleLogout = async () => {
		try {
			await AsyncStorage.removeItem("profile")
			navigation.replace("Onboarding") // Navigate to Onboarding screen
		} catch (error) {
			console.error("Failed to logout", error)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						/* Handle Back navigation */
					}}
					disabled
				>
					<Text style={styles.backButton}>Back</Text>
				</TouchableOpacity>
				<Text style={styles.headerText}>Profile Page</Text>
			</View>

			<TouchableOpacity onPress={handleImagePicker}>
				<View style={styles.avatarContainer}>
					{avatar ? (
						<Image source={{ uri: avatar }} style={styles.avatar} />
					) : (
						<Text style={styles.avatarText}>
							{firstName[0]}
							{lastName[0]}
						</Text>
					)}
				</View>
			</TouchableOpacity>

			<TextInput
				style={styles.input}
				placeholder="First Name"
				value={firstName}
				onChangeText={setFirstName}
			/>

			<TextInput
				style={styles.input}
				placeholder="Last Name"
				value={lastName}
				onChangeText={setLastName}
			/>

			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<TextInput
				style={styles.input}
				placeholder="Phone Number"
				value={phoneNumber}
				onChangeText={(text) =>
					setPhoneNumber(
						MaskService.toMask("cel-phone", text, { maskType: "BRL" })
					)
				}
				keyboardType="phone-pad"
			/>

			<View style={styles.checkboxContainer}>
				<CheckBox
					value={emailNotifications.offers}
					onValueChange={(newValue) =>
						setEmailNotifications({ ...emailNotifications, offers: newValue })
					}
				/>
				<Text style={styles.checkboxLabel}>Receive Offers</Text>
			</View>

			<View style={styles.checkboxContainer}>
				<CheckBox
					value={emailNotifications.updates}
					onValueChange={(newValue) =>
						setEmailNotifications({ ...emailNotifications, updates: newValue })
					}
				/>
				<Text style={styles.checkboxLabel}>Receive Updates</Text>
			</View>

			<Button title="Save Changes" onPress={handleSaveChanges} />
			<Button title="Logout" color="red" onPress={handleLogout} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	backButton: {
		fontSize: 16,
		color: "blue",
		marginRight: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		flex: 1,
	},
	avatarContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	avatarText: {
		fontSize: 40,
		color: "gray",
	},
	input: {
		height: 40,
		borderColor: "#ddd",
		borderWidth: 1,
		marginBottom: 20,
		paddingHorizontal: 10,
	},
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	checkboxLabel: {
		fontSize: 16,
		marginLeft: 10,
	},
})

export default ProfileScreen
