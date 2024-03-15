import React from "react"

export function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			style={{
				display: "flex",
				maxWidth: "200px",
				backgroundColor: "black",
				color: "white",
				alignItems: "center",
				justifyContent: "center",
				paddingTop: "20px",
				paddingBottom: "20px",
				borderRadius: "5px",
			}}
			type="button"
			role="button"
			onClick={undefined}
		>
			{children}
		</button>
	)
}
