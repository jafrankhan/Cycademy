import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (Email, Password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			"https://cycademy-api.onrender.com/api/user/login",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					Email: Email,
					Password: Password,
				}),
			}
		);

		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}

		if (response.ok) {
			// save user to local storage for quality of life usage
			localStorage.setItem("user", JSON.stringify(json));
			console.log(json.Role)
			if (json.Role == "Supevisor")
			dispatch({ type: "LOGIN", payload: json, payload2: null, payload3: json.Role });
			else if (json.Role == "Technical")
			dispatch({ type: "LOGIN", payload: json, payload2: json.Role, payload3: null })
			else
			dispatch({ type: "LOGIN", payload: json, payload2: null, payload3: null })
			

			setIsLoading(false);
		}
	};

	return { login, isLoading, error };
};
