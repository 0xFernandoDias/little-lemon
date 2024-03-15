import { fetchAPI } from "./api"

export async function initializeTimes(date: string) {
	const response = await fetchAPI(date)

	if (response) return response
}

export const initializeState = {
	date: "",
	availableTimesByDate: [],
}

export function timesReducer(
	state: {
		date: string
		availableTimesByDate: string[]
	},
	action: { type: string; field: string; payload: string }
) {
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
