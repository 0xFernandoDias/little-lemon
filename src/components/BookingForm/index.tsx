import { useEffect, useReducer, useState } from "react"
import { fetchAPI, submitAPI } from "../../helpers/api"
import { useNavigate } from "react-router-dom"

const initializeState = {
	date: "",
	availableTimesByDate: [],
}

const timesReducer = (
	state: {
		date: string
		availableTimesByDate: string[]
	},
	action: { type: string; field: string; payload: string }
) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			return {
				...state,
				[action.field]: action.payload,
			}
		case "INITIALIZE_TIMES":
			return initializeState
		default:
			return state
	}
}

export function BookingForm() {
	const navigate = useNavigate()

	const [availableTimes, dispatch] = useReducer(timesReducer, initializeState)
	const [isConfirmedBooking, setIsConfirmedBooking] = useState(false)

	const [formValue, setFormValue] = useState({
		date: "",
		time: "",
		numberOfGuests: 0,
		occasion: "",
	})

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isLoading, setIsLoading] = useState(true)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [formErrors, setFormErrors] = useState({
		date: "",
		time: "",
		numberOfGuests: "",
		occasion: "",
	})

	const [touched, setTouched] = useState({
		date: false,
		time: false,
		numberOfGuests: false,
		occasion: false,
	})

	const updateTimes = (newTimes: string) => {
		dispatch({ type: "UPDATE_TIMES", field: "date", payload: newTimes })
	}

	const submitForm = async (formData: {
		date: string
		time: string
		numberOfGuests: number
		occasion: string
	}) => {
		const response = await submitAPI(formData)
		if (response === true) {
			setIsConfirmedBooking(true)
		}
	}

	const onSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log("submit")
		const errors = validate(formValue)

		setTouched({
			date: true,
			time: true,
			numberOfGuests: true,
			occasion: true,
		})

		setFormErrors(errors)
		if (Object.keys(errors).length === 0) {
			console.log("Form is valid")
			await submitForm(formValue)
		} else {
			console.log("Form is invalid", errors)
		}
	}

	const validate = (values: {
		date: string
		time: string
		occasion: string
		numberOfGuests: number
	}) => {
		const errors = {
			date: "",
			time: "",
			occasion: "",
			numberOfGuests: "",
		}

		const required = (value: string, fieldName: string) =>
			!value ? `${fieldName} is required` : ""

		const range = (value: number, min: number, max: number) =>
			value < min || value > max
				? `Number of guests must be between ${min} and ${max}`
				: ""

		errors.date = required(values.date, "Date")
		errors.time = required(values.time, "Time")
		errors.occasion = required(values.occasion, "Occasion")

		const guestError = range(values.numberOfGuests, 1, 10)
		if (!values.numberOfGuests) {
			errors.numberOfGuests = "Number of guests is required"
		} else if (guestError) {
			errors.numberOfGuests = guestError
		}

		Object.keys(errors).forEach(
			(key) =>
				errors[key as "date" | "time" | "numberOfGuests" | "occasion"] === "" &&
				delete errors[key as "date" | "time" | "numberOfGuests" | "occasion"]
		)

		return errors
	}

	const handleBlur = (event: { target: { name: string } }) => {
		const { name } = event.target
		setTouched({
			...touched,
			[name]: true,
		})
	}

	const handleTimeSelection = (availableTimesByDate: string) => {
		setFormValue((prevState) => ({
			...prevState,
			time: availableTimesByDate,
		}))
	}

	const handleChange = (event: {
		target: {
			name: string
			value: string
		}
	}) => {
		const { name, value } = event.target

		setFormValue((prevState) => ({
			...prevState,
			[name]: value,
		}))

		if (!touched[name as "date" | "time" | "numberOfGuests" | "occasion"]) {
			setTouched({
				...touched,
				[name]: true,
			})
		}

		setFormErrors(validate({ ...formValue, [name]: value }))
	}

	useEffect(() => {
		const initializeTimes = async () => {
			const response = await fetchAPI(availableTimes.date)

			if (response) {
				dispatch({
					type: "UPDATE_TIMES",
					field: "availableTimesByDate",
					payload: response as string,
				})
			}
		}

		if (availableTimes.date) {
			initializeTimes()
		}
	}, [availableTimes.date])

	useEffect(() => {
		if (
			availableTimes.availableTimesByDate &&
			availableTimes.availableTimesByDate.length > 0
		) {
			setFormValue((prevState) => ({
				...prevState,
				time: availableTimes.availableTimesByDate[0],
			}))
			setIsLoading(false)
		}
	}, [availableTimes])

	useEffect(() => {
		if (formValue.date) {
			updateTimes(formValue.date)
		}
	}, [formValue.date])

	useEffect(() => {
		if (isConfirmedBooking) {
			navigate("/confirmBooking")
		}
	}, [isConfirmedBooking, navigate])

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<header>Book Now</header>
			<form
				style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
				onSubmit={onSubmit}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
					}}
				>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						name="date"
						value={formValue.date}
						onChange={handleChange}
						onBlur={handleBlur}
						aria-required="true"
						aria-label="Choose a date"
					/>
					{touched.date && formErrors.date && (
						<p style={{ color: "red" }}>{formErrors.date}</p>
					)}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
					}}
				>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						name="time"
						value={formValue.time}
						onBlur={handleBlur}
						aria-required="true"
						aria-label="Choose a time"
						onChange={(e) => handleTimeSelection(e.target.value)}
					>
						{availableTimes.availableTimesByDate.map(
							(timeOption: string, index: number) => (
								<option key={index} value={timeOption}>
									{timeOption}
								</option>
							)
						)}
					</select>

					{touched.time && formErrors.time && (
						<p style={{ color: "red" }}>{formErrors.time}</p>
					)}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
					}}
				>
					<label htmlFor="guests">Number of guests</label>
					<input
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						onChange={handleChange}
						onBlur={handleBlur}
						type="number"
						name="numberOfGuests"
						value={formValue.numberOfGuests}
					/>
					{touched.numberOfGuests && formErrors.numberOfGuests && (
						<p style={{ color: "red" }}>{formErrors.numberOfGuests}</p>
					)}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
					}}
				>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						name="occasion"
						value={formValue.occasion}
						onChange={handleChange}
						onBlur={handleBlur}
						aria-required="true"
					>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
					</select>
					{touched.occasion && formErrors.occasion && (
						<p style={{ color: "red" }}>{formErrors.occasion}</p>
					)}
				</div>
				<input
					type="submit"
					value="Make Your reservation"
					aria-label="On Click"
				/>
			</form>
		</div>
	)
}
