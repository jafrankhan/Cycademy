import React, { useEffect, useState } from "react";
import { getServerData } from "../hero/helper";
import "../hero/Styles/Result.css";
export default function ResultTable() {
	const [data, setData] = useState([]);
/* 
	const [selectedTopic, setSelectedTopic] = useState("SocialEng"); // Default topic or initial value

	const topicOptions = [
		{ value: "SocialEng", label: "Social Engineering" },
		{ value: "SecIncident", label: "Security Incident" },
		{ value: "SecCoding", label: "Secure Coding Practice" },
		{ value: "RecogScams", label: "Recognise Scams" },
		{ value: "passphrase", label: "Setting Passphrases" },
		{ value: "MFA", label: "Multi-Factor Authentication" },

		// Add more topics as needed
	];

	useEffect(() => {
		let url;
		// Modify the URL based on the selected topic
		if (selectedTopic === "SocialEng") {
			url = "https://quizsocialengineer-api.onrender.com/api/result";
		} else if (selectedTopic === "SecIncident") {
			url = "https://quizsecurityincident-api.onrender.com/api/result";
		} else if (selectedTopic === "SecCoding") {
			url = "https://securecodingpractice-api.onrender.com/api/result";
		} else if (selectedTopic === "RecogScams") {
			url = "https://quizrecognise-api.onrender.com/api/result";
		} else if (selectedTopic === "passphrase") {
			url = "https://quizpassphrases-api.onrender.com/api/result";
		} else if (selectedTopic === "MFA") {
			url = "https://quizmfa-api.onrender.com/api/result";
		}
		if (url) {
			getServerData(url, (res) => {
				setData(res);
			});
		}
	}, [selectedTopic]); // Run this effect whenever selectedTopic changes */

	useEffect(() => {
		getServerData(
			`https://quizsocialEngineer-api.onrender.com/api/result`,
			(res) => {
				setData(res);
			}
		);
	});

	return (
		<div>
			<div style={{ display: "flex", alignItems: "center" }}>
				{/* 	<select
					value={selectedTopic}
					onChange={(e) => setSelectedTopic(e.target.value)}
				>
					<option value="MFA">Select a topic</option>
					{topicOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select> */}
			</div>
			<table>
				<thead className="table-header">
					<tr className="table-row">
						<td>Name</td>
						<td>Attempts</td>
						<td>Earn Points</td>
						<td>Result</td>
					</tr>
				</thead>
				<tbody>
					{!data ?? <div>No Data Found </div>}
					{data.map((v, i) => (
						<tr className="table-body" key={i}>
							<td>{v?.username || ""}</td>
							<td>{v?.attempts || 0}</td>
							<td>{v?.points || 0}</td>
							<td>{v?.achived || ""}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
