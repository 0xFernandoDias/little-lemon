export function Footer() {
	return (
		<footer
			style={{
				display: "flex",
				gap: "69px",
				alignItems: "center",
				paddingLeft: "290px",
				paddingTop: "60px",
				paddingBottom: "60px",
				backgroundColor: "#D9D9D9",
				maxWidth: "100%",
			}}
		>
			{/* Image IMG */}
			<img
				style={{
					display: "flex",
					width: "162px",
					height: "162px",
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
		</footer>
	)
}
