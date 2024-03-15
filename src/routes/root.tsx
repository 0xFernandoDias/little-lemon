import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Root() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				justifyContent: "space-between",
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
