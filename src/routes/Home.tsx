import { Button } from "../components/Button"

export default function Home() {
	return (
		<>
			<Specials />
			<Testimonials />
			<Backstory />
		</>
	)
}

function Specials() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "55px",
				alignItems: "center",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "88px",
				paddingBottom: "76px",
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
				<span style={{ fontSize: "32px" }}>Specials</span>
				<Button>Online Menu</Button>
			</div>
			<div
				style={{
					display: "flex",
					gap: "34px",
					width: "100%",
				}}
			>
				{[
					[...Array(3)].map(() => (
						<div style={{ display: "flex", flexDirection: "column" }}>
							{/* Image IMG */}
							<div
								style={{
									display: "flex",
									width: "100%",
									height: "185px",
									backgroundColor: "#D9D9D9",
								}}
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "34px",
									paddingLeft: "25px",
									paddingRight: "25px",
									paddingTop: "18px",
									paddingBottom: "32px",
									backgroundColor: "#EDEFEE",
								}}
							>
								<div
									style={{
										display: "flex",
										width: "100%",
										justifyContent: "space-between",
										alignItems: "center",
										fontSize: "18px",
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

								<a>Order a delivery</a>
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
				gap: "79px",
				alignItems: "center",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "122px",
				paddingBottom: "181px",
				backgroundColor: "#D9D9D9",
			}}
		>
			<span style={{ fontSize: "32px" }}>Testimonials</span>
			<div
				style={{
					display: "flex",
					gap: "18px",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				{[
					[...Array(4)].map(() => (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
								backgroundColor: "white",
								paddingLeft: "24px",
								paddingRight: "76px",
								paddingTop: "28px",
								paddingBottom: "42px",
							}}
						>
							<span>Rating</span>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "12px",
								}}
							>
								<div
									style={{
										display: "flex",
										width: "47px",
										height: "46px",
										backgroundColor: "#D9D9D9",
									}}
								/>
								<span>Name</span>
							</div>
							<span>Review rext</span>
						</div>
					)),
				]}
			</div>
		</main>
	)
}

function Backstory() {
	return (
		<div
			style={{
				display: "flex",
				gap: "47px",
				alignItems: "center",
				justifyContent: "space-between",
				paddingLeft: "290px",
				paddingRight: "290px",
				paddingTop: "97px",
				paddingBottom: "36px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "52px",
					maxWidth: "360px",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<span style={{ fontSize: "48px" }}>Little Lemon</span>
					<span style={{ fontSize: "24px" }}>Chicago</span>
				</div>
				<span>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit.
				</span>
			</div>
			<div
				style={{
					display: "flex",
					width: "440px",
					height: "440px",
					backgroundColor: "#D9D9D9",
				}}
			/>
		</div>
	)
}
