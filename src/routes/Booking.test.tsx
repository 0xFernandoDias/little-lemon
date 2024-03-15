import { render, screen } from "@testing-library/react"
import { BookingForm } from "../components/BookingForm"
import { initializeTimes, timesReducer } from "../helpers"

test("Renders the BookingForm heading", () => {
	render(<BookingForm />)
	const headingElement = screen.getByText("Book Now")
	expect(headingElement).toBeTruthy()
})

test("initializeTimes returns the correct expected value", async () => {
	// Mock the fetchAPI function to return a non-empty array of available booking times
	const mockResponse = {
		ok: true,
		json: async () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
	}

	const response = new Response(JSON.stringify(mockResponse), {
		status: 200,
		headers: { "Content-type": "application/json" },
	})

	jest.spyOn(global, "fetch").mockResolvedValueOnce(Promise.resolve(response))

	// Call initializeTimes function
	const result = await initializeTimes("2024-03-15")

	// Define the expected value
	const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

	// Assert the result
	expect(result).toEqual(expectedValue)
})

test("updateTimes returns the same value provided in the state", () => {
	// Define initial state
	const state = {
		date: "",
		availableTimesByDate: [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		],
	}

	// Define the action with payload as an array of strings
	const action = {
		type: "UPDATE_TIMES",
		field: "availableTimesByDate",
		payload: "New Time",
	}

	// Call the timesReducer function
	const result = timesReducer(state, action)

	// Assert the result
	expect(result.availableTimesByDate).toEqual(["New Time"])
})
