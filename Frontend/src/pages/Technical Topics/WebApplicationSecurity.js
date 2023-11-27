import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import TwoColumnWithInput from "components/hero/TwoColumnWithInput";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";
import Ransomware from "components/hero/Ransomware";
import RandsomwareStats from "components/features/RansomwareStats";

import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";
import WebApplicationHero from "components/hero/Technical/WebApplicationHero";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
	${tw`text-lg  text-gray-800`}
	p {
		${tw`mt-2 leading-loose`}
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6`}
	}
	ul {
		${tw`list-disc list-inside`}
		li {
			${tw`ml-2 mb-3`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`;

export default ({ headingText = "Web Application Security" }) => {
	return (
		<AnimationRevealPage>
			<WebApplicationHero></WebApplicationHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						<p>Last updated: 13th June 2023</p>
						<h1>Common Threats to Web Application Security</h1>
						<p>
							Web applications are susceptible to various security threats that
							can compromise sensitive data and expose users to potential risks.
							As technical users, it's essential to be aware of the following
							common threats to web application security:
						</p>
						<li>Injection Attacks:</li>
						<p>
							Injection attacks, such as SQL injection and Cross-Site Scripting
							(XSS), occur when malicious code is inserted into input fields to
							manipulate the application's behavior or access unauthorized data.
						</p>
						<li>Broken Authentication and Session Management:</li>
						<p>
							Weak authentication mechanisms, session fixation, or improper
							session handling can lead to unauthorized access to user accounts
							and compromise user data.
						</p>
						<li>Cross-Site Request Forgery (CSRF):</li>
						<p>
							CSRF attacks trick authenticated users into unknowingly executing
							actions on a vulnerable web application, potentially causing
							unwanted changes to their accounts or data.
						</p>
						<li>Security Misconfiguration:</li>
						<p>
							Improperly configured web servers, databases, or security settings
							can lead to unintended exposure of sensitive information or
							provide attackers with entry points to exploit.
						</p>
						<li>Insufficient Logging and Monitoring:</li>
						<p>
							Inadequate logging and monitoring can hinder timely detection and
							response to security incidents, allowing attackers to persist
							undetected within the application.
						</p>
						<h1>Best Practices for Web Application Security</h1>
						<p>
							To strengthen web application security and mitigate potential
							risks, follow these best practices:
						</p>
						<li>Input Validation:</li>
						<p>
							Implement robust input validation to ensure that user-provided
							data is sanitized and free from malicious code or scripting.
						</p>
						<li>Authentication and Authorization:</li>
						<p>
							Implement strong authentication methods, such as multi-factor
							authentication, and grant appropriate permissions through
							effective authorization controls.
						</p>
						<li>Secure Coding:</li>
						<p>
							Adhere to secure coding practices, including using libraries and
							frameworks with known security features and regularly updating
							dependencies.
						</p>
						<li>HTTPS and SSL/TLS:</li>
						<p>
							Always use HTTPS with valid SSL/TLS certificates to encrypt data
							transmission between the web server and clients.
						</p>
						<li>Regular Security Testing:</li>
						<p>
							Conduct regular security assessments, penetration testing, and
							code reviews to identify and address vulnerabilities proactively.
						</p>
						<li>Security Patch Management:</li>
						<p>
							Stay up-to-date with security patches for all software components
							used in the web application to protect against known
							vulnerabilities.
						</p>
						<h1>Moving Forward</h1>
						<p>
							As technical users, understanding and implementing web application
							security measures are crucial in safeguarding sensitive data and
							maintaining the trust of users. Continuously stay informed about
							emerging threats and security best practices to stay one step
							ahead of potential attackers. A proactive approach to web
							application security will help protect your organization and its
							users from cyber threats effectively.
						</p>

						<br></br>
						<h1>Leaderboard</h1>

						<br></br>
						<br></br>

						<h1> Game</h1>
						<iframe
							src="https://rmwebapplicationsecurity.web.app/"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
