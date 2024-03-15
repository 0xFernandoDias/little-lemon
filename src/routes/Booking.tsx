import React, { useState, useReducer } from "react"

export default function Booking() {
	const [availableTimes, dispatch] = useReducer(
		timesReducer,
		[],
		initializeTimes
	)

	function initializeTimes() {
		return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
	}

	function timesReducer(
		state: string[],
		action: { type: string; payload: string }
	) {
		switch (action.type) {
			default:
				return state
		}
	}

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
			<Form availableTimes={availableTimes} dispatch={dispatch} />
		</div>
	)
}

function Form({
	availableTimes,
	dispatch,
}: {
	availableTimes: string[]
	dispatch: React.Dispatch<{ type: string; payload: string }>
}) {
	const [date, setDate] = useState("")
	const [time, setTime] = useState("17:00")
	const [guests, setGuests] = useState(1)
	const [occasion, setOccasion] = useState("Birthday")

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log("Form submitted!")
	}

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value)
		dispatch({ type: "UPDATE_TIMES", payload: e.target.value })
	}

	return (
		<form
			style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
			onSubmit={handleSubmit}
		>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				id="res-date"
				value={date}
				onChange={handleDateChange}
			/>

			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
			>
				{availableTimes.map((timeOption: string, index: number) => (
					<option key={index} value={timeOption}>
						{timeOption}
					</option>
				))}
			</select>

			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min="1"
				max="10"
				id="guests"
				value={guests}
				onChange={(e) => setGuests(parseInt(e.target.value))}
			/>

			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
			>
				<option value="Birthday">Birthday</option>
				<option value="Anniversary">Anniversary</option>
			</select>

			<input type="submit" value="Make Your reservation" />
		</form>
	)
}
