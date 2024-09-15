import React from "react"
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native"

const categories = ["Appetizers", "Main Courses", "Desserts", "Beverages"]

const CategoryList = ({ selectedCategories, onCategorySelect }) => {
	const handleCategoryPress = (category) => {
		onCategorySelect(category)
	}

	return (
		<ScrollView horizontal style={styles.container}>
			{categories.map((category) => (
				<TouchableOpacity
					key={category}
					style={[
						styles.category,
						selectedCategories.includes(category) ? styles.selected : {},
					]}
					onPress={() => handleCategoryPress(category)}
				>
					<Text
						style={[
							styles.categoryText,
							selectedCategories.includes(category) ? styles.selectedText : {},
						]}
					>
						{category}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	category: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginHorizontal: 5,
		borderRadius: 20,
		backgroundColor: "#f0f0f0",
	},
	selected: {
		backgroundColor: "#4CAF50",
	},
	categoryText: {
		fontSize: 16,
		color: "#333",
	},
	selectedText: {
		color: "#fff",
	},
})

export default CategoryList
