import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Navigate, useNavigate } from "react-router";



export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();
	
	const signup = async (Email, Username, Password, Role) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			"https://fyp123123.onrender.com/api/user/signup",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					Email: Email,
					userName: Username,
					Password: Password,
					Role: Role,
				}),
			}
		);

		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}

		if (response.ok) {
			console.log("Account Created");
			navigate("/login")
		}
	};

	return { signup, isLoading, error };
};
