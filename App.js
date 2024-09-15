import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnboardingScreen from "./screens/Onboarding"
import SplashScreen from "./screens/Splash"
import HomeScreen from "./screens/Home"
import ProfileScreen from "./screens/Profile"
import Header from "./components/Header"

const Stack = createNativeStackNavigator()

function App() {
	if (state.isLoading) {
		// We haven't finished reading from AsyncStorage yet
		return <SplashScreen />
	}

	return (
		<NavigationContainer>
			<Header />
			<Stack.Navigator>
				{state.isOnboardingCompleted ? (
					<>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Profile" component={ProfileScreen} />
					</>
				) : (
					// User is NOT signed in
					<Stack.Screen name="Onboarding" component={OnboardingScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default App
