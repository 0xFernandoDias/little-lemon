import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("little_lemon.db")

export const initializeDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS menu (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                price REAL,
                description TEXT,
                image TEXT,
                category TEXT
            );`
		)
	})
}

export const saveMenuData = (data) => {
	db.transaction((tx) => {
		tx.executeSql("DELETE FROM menu") // Clear existing data
		data.forEach((item) => {
			tx.executeSql(
				"INSERT INTO menu (name, price, description, image, category) VALUES (?, ?, ?, ?, ?)",
				[
					item.name,
					item.price,
					item.description,
					item.image,
					item.category || "",
				]
			)
		})
	})
}

export const getMenuDataByCategories = (categories, callback) => {
	if (categories.length === 0) {
		getMenuData(callback)
		return
	}

	const placeholders = categories.map(() => "?").join(",")
	const query = `SELECT * FROM menu WHERE category IN (${placeholders})`

	db.transaction((tx) => {
		tx.executeSql(query, categories, (_, { rows: { _array } }) => {
			callback(_array)
		})
	})
}

export const getMenuDataBySearch = (searchText, categories, callback) => {
	const searchQuery = `%${searchText}%`
	const categoryPlaceholders = categories.map(() => "?").join(",")
	const categoryQuery =
		categories.length > 0 ? `AND category IN (${categoryPlaceholders})` : ""

	const query = `
        SELECT * FROM menu
        WHERE name LIKE ?
        ${categoryQuery}
    `

	const params = [searchQuery, ...categories]

	db.transaction((tx) => {
		tx.executeSql(query, params, (_, { rows: { _array } }) => {
			callback(_array)
		})
	})
}

export const getMenuData = (callback) => {
	db.transaction((tx) => {
		tx.executeSql("SELECT * FROM menu", [], (_, { rows: { _array } }) => {
			callback(_array)
		})
	})
}
