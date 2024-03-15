import { useState } from "react"

export function BookingForm({
	availableTimes,
	dispatch,
}: {
	availableTimes: string[]
	dispatch?: React.Dispatch<{ type: string; payload: string }>
}) {
	const [date, setDate] = useState("")
	const [time, setTime] = useState("17:00")
	const [guests, setGuests] = useState(1)
	const [occasion, setOccasion] = useState("Birthday")

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log("Form submitted!")
		console.log(date, time, guests, occasion)
	}

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value)
		if (dispatch) dispatch({ type: "UPDATE_TIMES", payload: e.target.value })
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<header>Book Now</header>
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
		</div>
	)
}