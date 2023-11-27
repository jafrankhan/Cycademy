import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line
import ComponentRenderer from "ComponentRenderer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NonTechnicalLandingPage from "pages/Landing Pages/NonTechnicalLandingPage";
import { useAuthContext } from "hooks/useAuthContext";
import Login from "pages/Login";
import SignUp from "pages/Signup";
import NonTechnicalTopics from "pages/NonTechnicalTopics";
import TechnicalTopics from "pages/Technical Topics/TechnicalTopics";
import HostingCloudLandingPage from "pages/HostingCloudLandingPage";
import SupervisorPage from "pages/Non-Technical Topics/SupervisorPage";

export default function App() {
	// If you want to disable the animation just use the disabled `prop` like below on your page's component
	// return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
	const { user, role, supevisor } = useAuthContext();
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route
						path="/components/:type/:subtype/:name"
						element={<ComponentRenderer />}
					/>
					<Route
						path="/components/:type/:name"
						element={<ComponentRenderer />}
					/>

					<Route
						path="/components/:type/:subtype/:name/:topicName"
						element={<ComponentRenderer />}
					/>

					<Route
						path="/components/:type/:topicName"
						element={<ComponentRenderer />}
					/>

					<Route
						path="/signup"
						element={<SignUp/>}
					/>

					<Route
						path="/login"
						element={
							user && supevisor ? (
								<SupervisorPage />
							) : user && role ? (
								<TechnicalTopics />
							) : user ? (
								<NonTechnicalTopics />
							) : (
								<Login />
							)
						}
					/>

					<Route path="/" element={<HostingCloudLandingPage />} />
				</Routes>
			</Router>
		</>
	);
}
