export function initializeTimes() {
	return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

export function timesReducer(
	state: string[],
	action: { type: string; payload: string }
) {
	switch (action.type) {
		default:
			return state
	}
}
