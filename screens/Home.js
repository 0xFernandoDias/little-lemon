import React, { useState, useEffect, useCallback } from "react"
import {
	View,
	Text,
	Image,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from "react-native"
import { fetchMenuData, getImageUrl } from "../services/api"
import {
	initializeDatabase,
	saveMenuData,
	getMenuDataByCategories,
	getMenuDataBySearch,
} from "../services/database"
import CategoryList from "../components/CategoryList"
import Banner from "../components/Banner"
import debounce from "lodash.debounce"

const HomeScreen = () => {
	const [menu, setMenu] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [selectedCategories, setSelectedCategories] = useState([])
	const [searchText, setSearchText] = useState("")

	useEffect(() => {
		initializeDatabase()

		const loadMenuData = async () => {
			try {
				getMenuDataBySearch(searchText, selectedCategories, (data) => {
					if (data.length === 0) {
						fetchMenuData()
							.then((fetchedData) => {
								setMenu(fetchedData)
								saveMenuData(fetchedData)
							})
							.catch((err) => {
								setError("Failed to load menu data")
							})
					} else {
						setMenu(data)
					}
					setLoading(false)
				})
			} catch (err) {
				setError("Failed to load menu data")
				setLoading(false)
			}
		}

		loadMenuData()
	}, [selectedCategories, searchText])

	const handleSearchChange = (text) => {
		setSearchText(text)
		debouncedSearch(text)
	}

	const debouncedSearch = useCallback(
		debounce((text) => {
			setSearchText(text)
		}, 500),
		[]
	)

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />
	}

	if (error) {
		return <Text>{error}</Text>
	}

	const renderMenuItem = ({ item }) => (
		<View style={styles.menuItem}>
			<Image source={{ uri: getImageUrl(item.image) }} style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.name}>{item.name}</Text>
				<Text style={styles.description}>{item.description}</Text>
				<Text style={styles.price}>${item.price.toFixed(2)}</Text>
			</View>
		</View>
	)

	return (
		<View style={{ flex: 1 }}>
			<Banner onSearch={handleSearchChange} />
			<CategoryList
				selectedCategories={selectedCategories}
				onCategorySelect={(category) => {
					setSelectedCategories((prev) =>
						prev.includes(category)
							? prev.filter((c) => c !== category)
							: [...prev, category]
					)
				}}
			/>
			<FlatList
				data={menu}
				renderItem={renderMenuItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	menuItem: {
		flexDirection: "row",
		marginBottom: 20,
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	textContainer: {
		marginLeft: 10,
		flex: 1,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginVertical: 5,
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
	},
})

export default HomeScreen
