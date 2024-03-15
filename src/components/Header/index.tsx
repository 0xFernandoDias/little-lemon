export function Header() {
	return (
		<header
			style={{
				display: "flex",
				gap: "45px",
				alignItems: "center",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "24px",
				paddingBottom: "24px",
			}}
		>
			{/* Image IMG */}
			<img
				style={{
					display: "flex",
					width: "76px",
					height: "76px",
				}}
				src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
			/>
			<ul style={{ display: "flex" }}>
				<li style={{ display: "flex", gap: "28px" }}>
					<a href="/">Home</a>
					<a href="/booking">Booking</a>
				</li>
			</ul>
		</header>
	)
}
