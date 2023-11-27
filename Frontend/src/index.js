import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import { AuthContextProvider } from "context/authContext";
import Ransomware from "components/hero/Ransomware";
import RansomwarePage from "pages/Non-Technical Topics/RansomwarePage";

/* import ReactDOM from "react-dom/client"; */
/** Redux Store */

/* import store from "../src/components/Quiz/src/redux/store";
import { Provider } from "react-redux";
import Main from "../src/components/Quiz/src/components/Main"; */
/* const root1 = ReactDOM.createRoot(document.getElementById("root")); */

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<App></App>
		</AuthContextProvider>
	</React.StrictMode>
);
