export function Header() {
	return (
		<header
			style={{
				display: "flex",
				gap: "2.8rem",
				alignItems: "center",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				maxWidth: "70%",
				paddingTop: "1.5rem",
				paddingBottom: "1.5rem",
			}}
		>
			{/* Image IMG */}
			<img
				style={{
					display: "flex",
					width: "4.75rem",
					height: "4.75rem",
				}}
				src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
			/>
			<ul style={{ display: "flex" }}>
				<li style={{ display: "flex", gap: "1.75rem" }}>
					<a href="/">Home</a>
					<a href="/booking">Booking</a>
				</li>
			</ul>
		</header>
	)
}
