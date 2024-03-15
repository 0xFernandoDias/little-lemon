import { render, screen, fireEvent } from "@testing-library/react"
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

test("HTML5 validation attributes are applied", () => {
	render(<BookingForm />)

	// Validate required attribute
	const dateInput = screen.getByLabelText("Choose date")
	expect(dateInput).toHaveProperty("required")

	// Validate min and max attributes
	const guestsInput = screen.getByLabelText("Number of guests")
	expect(guestsInput).toHaveProperty("min", "1")
	expect(guestsInput).toHaveProperty("max", "10")
})

test("JavaScript validation functions work correctly", () => {
	render(<BookingForm />)

	// Get form inputs
	const dateInput = screen.getByLabelText("Choose date")
	const guestsInput = screen.getByLabelText("Number of guests")
	const occasionInput = screen.getByLabelText("Occasion")

	// Invalid submission
	fireEvent.change(dateInput, { target: { value: "" } })
	fireEvent.change(guestsInput, { target: { value: "0" } })
	fireEvent.change(occasionInput, { target: { value: "" } })

	fireEvent.submit(
		screen.getByRole("button", { name: "Make Your reservation" })
	)

	expect(screen.getByText("Date is required")).toBeDefined()
	expect(
		screen.getByText("Number of guests must be between 1 and 10")
	).toBeDefined()
	expect(screen.getByText("Occasion is required")).toBeDefined()

	// Valid submission
	fireEvent.change(dateInput, { target: { value: "2024-03-15" } })
	fireEvent.change(guestsInput, { target: { value: "2" } })
	fireEvent.change(occasionInput, { target: { value: "Birthday" } })

	fireEvent.submit(
		screen.getByRole("button", { name: "Make Your reservation" })
	)

	// Ensure no validation errors are displayed
	expect(screen.queryByText("Date is required")).toBeNull()
	expect(
		screen.queryByText("Number of guests must be between 1 and 10")
	).toBeNull()
	expect(screen.queryByText("Occasion is required")).toBeNull()
})
