import { render, screen } from "@testing-library/react"
import { BookingForm } from "../components/BookingForm"
import { initializeTimes, timesReducer } from "../helpers"

test("Renders the BookingForm heading", () => {
	render(<BookingForm />)
	const headingElement = screen.getByText("Book Now")
	expect(headingElement).toBeTruthy()
})

test("initializeTimes returns the correct expected value", () => {
	const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

	const result = initializeTimes()

	expect(result).toEqual(expectedValue)
})

test("updateTimes returns the same value provided in the state", () => {
	const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

	const action = { type: "UPDATE_TIMES", payload: "New Time" }

	const result = timesReducer(state, action)

	expect(result).toEqual(state)
})
