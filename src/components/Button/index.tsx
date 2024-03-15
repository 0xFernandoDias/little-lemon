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
				maxWidth: "200px",
				backgroundColor: "black",
				color: "white",
				alignItems: "center",
				justifyContent: "center",
				paddingLeft: "4px",
				paddingRight: "4px",
				paddingTop: "20px",
				paddingBottom: "20px",
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
