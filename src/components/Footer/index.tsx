export function Footer() {
	return (
		<footer
			style={{
				display: "flex",
				gap: "4.3rem",
				alignItems: "center",
				// paddingLeft: "18rem",
				paddingTop: "3.75rem",
				paddingBottom: "3.75rem",
				backgroundColor: "#D9D9D9",
				width: "100%",
			}}
		>
			<div style={{ maxWidth: "70%", display: "flex" }}>
				{/* Image IMG */}
				<img
					style={{
						display: "flex",
						width: "10rem",
						height: "10rem",
					}}
					src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<span>Doormat Nav igation</span>
						<ul style={{ display: "flex", flexDirection: "column" }}>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/booking">Booking</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
