import { Header } from "../components/Header"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Root() {
	return (
		<>
			<Header />
			<CallToAction />
			<Outlet />
			<Footer />
		</>
	)
}
