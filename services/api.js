export const fetchMenuData = async () => {
	try {
		const response = await fetch(
			"https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
		)
		const data = await response.json()
		return data.menu
	} catch (error) {
		console.error("Error fetching menu data:", error)
		throw error
	}
}

export const getImageUrl = (imageFileName) => {
	return `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${imageFileName}?raw=true`
}
