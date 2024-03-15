import { Button } from "../Button"

export function CallToAction() {
	return (
		<main
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "24px",
				paddingBottom: "24px",
				backgroundColor: "#6E6F6E",
			}}
		>
			<div style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
				<div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
					<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
						<span style={{ fontSize: "48px" }}>Little Lemon</span>
						<span style={{ fontSize: "24px" }}>Chicago</span>
					</div>
					<span style={{ display: "flex", maxWidth: "422px" }}>
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
					width: "375px",
					height: "325px",
				}}
				src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
			/>
		</main>
	)
}
