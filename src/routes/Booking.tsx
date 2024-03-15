import { useReducer } from "react"
import { BookingForm } from "../components/BookingForm"
import { timesReducer, initializeTimes } from "../helpers"

export default function Booking() {
	const [availableTimes, dispatch] = useReducer(
		timesReducer,
		[],
		initializeTimes
	)

	return (
		<div
			style={{
				display: "flex",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "24px",
				paddingBottom: "24px",
			}}
		>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
		</div>
	)
}
