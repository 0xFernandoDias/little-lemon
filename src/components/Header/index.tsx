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
			<div
				style={{
					display: "flex",
					width: "202px",
					height: "76px",
					backgroundColor: "#D9D9D9",
				}}
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
