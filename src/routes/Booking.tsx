import { BookingForm } from "../components/BookingForm"

export default function Booking() {
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
			<BookingForm />
		</div>
	)
}
