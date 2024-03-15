import { useReducer } from "react"
import { BookingForm } from "../components/BookingForm"
import { initializeState, timesReducer } from "../helpers"

export default function Booking() {
	const [availableTimes, dispatch] = useReducer(timesReducer, initializeState)

	return (
		<div
			style={{
				display: "flex",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				paddingTop: "1.5rem",
				paddingBottom: "1.5rem",
			}}
		>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
		</div>
	)
}
