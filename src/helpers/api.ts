export const fetchAPI = (date: string) => {
	return new Promise((resolve, reject) => {
		try {
			const times = JSON.parse(
				localStorage.getItem(`availableTimesByDate_${date}`)!
			)

			if (times && times.length > 0) {
				setTimeout(() => resolve(times), 1000)
			} else if (times && times.length === 0) {
				setTimeout(() => resolve("No available timeslots"), 1000)
			} else {
				const newTimes = generateNewTimeslots()
				localStorage.setItem(
					`availableTimesByDate_${date}`,
					JSON.stringify(newTimes)
				)
				setTimeout(() => resolve(newTimes), 1000)
			}
		} catch (error) {
			reject(error)
		}
	})
}

function generateNewTimeslots() {
	const startHour = 18
	const endHour = 22
	const totalHalfHours = (endHour - startHour) * 2 + 1
	const numberOfSlots = Math.floor(Math.random() * (6 - 4 + 1)) + 4

	const uniqueBlocks = new Set()
	while (uniqueBlocks.size < numberOfSlots) {
		const randomBlock = Math.floor(Math.random() * totalHalfHours)
		uniqueBlocks.add(randomBlock)
	}

	const times = Array.from(uniqueBlocks).map((block) => {
		const hour = startHour + Math.floor((block as number) / 2)
		const minute = ((block as number) % 2) * 30
		return `${hour.toString().padStart(2, "0")}:${minute
			.toString()
			.padStart(2, "0")}`
	})

	return times.sort()
}

export const submitAPI = (formData: {
	date: string
	time: string
	numberOfGuests: number
	occasion: string
}) => {
	const { date, time } = formData
	const availableTimeslots = JSON.parse(
		localStorage.getItem(`availableTimesByDate_${date}`) || "[]"
	)

	const updateAvailableTimeslots = availableTimeslots.filter(
		(t: string) => t !== time
	)

	localStorage.setItem(
		`availableTimesByDate_${date}`,
		JSON.stringify(updateAvailableTimeslots)
	)

	const reservedTimeslots = JSON.parse(
		localStorage.getItem(`reservedTimesByDate_${date}`) || "[]"
	)
	reservedTimeslots.push(time)
	localStorage.setItem(
		`reservedTimesByDate_${date}`,
		JSON.stringify(reservedTimeslots)
	)

	return true
}
