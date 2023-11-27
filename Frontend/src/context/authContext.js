import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload, role: action.payload2, supevisor: action.payload3};
		case "LOGOUT":
			return { user: null, role: null, supevisor: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, {
		user: null,
		role: null,
		supevisor: null
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			const role = user.Role;
			if (role == "Supevisor")
				dispatch({ type: "LOGIN", payload: user, payload2: null, payload3: role });
			else if (role == "Technical")
				dispatch({ type: "LOGIN", payload: user, payload2: role, payload3: null});
			else dispatch({ type: "LOGIN", payload: user, payload2: null, payload3: null });
		}
	}, []);

	console.log("Authcontext state: ", state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
