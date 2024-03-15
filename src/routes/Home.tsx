import { Button } from "../components/Button"
import { CallToAction } from "../components/CallToAction"

export default function Home() {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<CallToAction />
			<Specials />
			<Testimonials />
			<Backstory />
		</div>
	)
}

function Specials() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "3.5rem",
				alignItems: "center",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				paddingTop: "5.5rem",
				paddingBottom: "4.75rem",
				maxWidth: "70%",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}
			>
				<span style={{ fontSize: "2rem" }}>Specials</span>
				<Button href="/">Online Menu</Button>
			</div>
			<div
				style={{
					display: "flex",
					gap: "2.25rem",
					width: "100%",
				}}
			>
				{[
					[...Array(3)].map(() => (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{/* Image IMG */}
							<img
								style={{
									display: "flex",
									width: "11.5rem",
									height: "11.5rem",
								}}
								src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "2.25rem",
									paddingLeft: "1.5rem",
									paddingRight: "1.5rem",
									paddingTop: "1.12rem",
									paddingBottom: "2rem",
									backgroundColor: "#EDEFEE",
								}}
							>
								<div
									style={{
										display: "flex",
										width: "100%",
										justifyContent: "space-between",
										alignItems: "center",
										fontSize: "1.12rem",
									}}
								>
									<span>Greek salad</span>
									<span>$12.99</span>
								</div>

								<span>
									The famous greek salad of crispy lettuce, peppers, olives and
									our Chicago style feta cheese, garnished with crunchy garlic
									and rosemary croutons.
								</span>

								<a href="/">Order a delivery</a>
							</div>
						</div>
					)),
				]}
			</div>
		</main>
	)
}

function Testimonials() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "4.5rem",
				alignItems: "center",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				paddingTop: "7.5rem",
				paddingBottom: "11rem",
				backgroundColor: "#D9D9D9",
			}}
		>
			<div
				style={{
					maxWidth: "70%",
					display: "flex",
					flexDirection: "column",
					gap: "4rem",
				}}
			>
				<span style={{ fontSize: "2rem" }}>Testimonials</span>
				<div
					style={{
						display: "flex",
						gap: "1.12rem",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					{[
						[...Array(3)].map(() => (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "1.25rem",
									backgroundColor: "white",
									paddingLeft: "1.5rem",
									paddingRight: "4.75rem",
									paddingTop: "1.75rem",
									paddingBottom: "2.5rem",
								}}
							>
								<span>Rating</span>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "0.75rem",
									}}
								>
									<div
										style={{
											display: "flex",
											width: "3rem",
											height: "2.5rem",
											backgroundColor: "#D9D9D9",
										}}
									/>
									<span>Name</span>
								</div>
								<span>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint.
								</span>
							</div>
						)),
					]}
				</div>
			</div>
		</main>
	)
}

function Backstory() {
	return (
		<div
			style={{
				display: "flex",
				gap: "3rem",
				alignItems: "center",
				justifyContent: "space-between",
				// paddingLeft: "18rem",
				// paddingRight: "18rem",
				paddingTop: "6rem",
				paddingBottom: "2.25rem",
				maxWidth: "70%",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "3.25rem",
					maxWidth: "33.75rem",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<span style={{ fontSize: "3rem" }}>Little Lemon</span>
					<span style={{ fontSize: "1.5rem" }}>Chicago</span>
				</div>
				<span>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit.
				</span>
			</div>
			<img
				style={{
					display: "flex",
					width: "27.5rem",
					height: "27.5rem",
				}}
				src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL"
			/>
		</div>
	)
}
