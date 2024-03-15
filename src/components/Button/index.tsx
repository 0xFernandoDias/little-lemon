import React from "react"

export function Button({
	children,
	href,
}: {
	children: React.ReactNode
	href: string
}) {
	return (
		<a
			style={{
				display: "flex",
				maxWidth: "12.5rem",
				backgroundColor: "black",
				color: "white",
				alignItems: "center",
				justifyContent: "center",
				paddingLeft: "0.25rem",
				paddingRight: "0.25rem",
				paddingTop: "1.25rem",
				paddingBottom: "1.25rem",
				borderRadius: "5px",
				cursor: "pointer",
			}}
			type="button"
			role="button"
			href={href}
			onClick={undefined}
		>
			{children}
		</a>
	)
}
