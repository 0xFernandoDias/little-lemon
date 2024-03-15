import { Button } from "../Button"

export function CallToAction() {
	return (
		<main
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				paddingTop: "1.5rem",
				paddingBottom: "1.5rem",
				backgroundColor: "#6E6F6E",
				width: "100%",
			}}
		>
			<div
				style={{
					maxWidth: "70%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					paddingLeft: "15%",
					paddingRight: "15%",
				}}
			>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}
				>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.25rem",
							}}
						>
							<span style={{ fontSize: "3rem" }}>Little Lemon</span>
							<span style={{ fontSize: "1.5rem" }}>Chicago</span>
						</div>
						<span style={{ display: "flex", maxWidth: "26.3rem" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</span>
					</div>
					<Button href="/booking">Reserve a Table</Button>
				</div>
				{/* Image IMG */}
				<img
					style={{
						display: "flex",
						width: "20.3rem",
						height: "20.3rem",
					}}
					src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
				/>
			</div>
		</main>
	)
}
