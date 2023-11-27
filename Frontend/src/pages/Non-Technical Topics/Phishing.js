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
import PhishingHero from "components/hero/PhishingHero";
import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";

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

export default ({ headingText = "Phishing Hero" }) => {
	return (
		<AnimationRevealPage>
			<PhishingHero></PhishingHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						<h1>Recognising and Avoiding Phishing Attacks</h1>
						<p>
							Using Multi-Factor Authentication or MFA is a great way to keep
							your accounts safe from unauthorised access. However, if MFA is
							not available, being cautious about phishing attacks is crucial to
							protect yourself from potential threats.
						</p>

						<h1>Identifying Phishing Attempts</h1>
						<p>Make sure to be aware of the following:</p>
						<h2>Be Skeptical of Unsolicited Requests</h2>
						<p>
							Phishers often use emails, text messages, or phone calls to
							impersonate reputable entities and request personal information or
							payment details. Be cautious of unsolicited communications asking
							for sensitive data.
						</p>
						<h2>Check for Suspicious Links</h2>
						<p>
							Phishing emails or messages may contain links that appear
							legitimate but lead to fake websites designed to steal your
							information. Hover over links to see the actual URLs before
							clicking on them.
						</p>
						<h2>Verify the Source</h2>
						<p>
							If you receive an email claiming to be from a company or
							organisation, double-check the sender's email address and compare
							it with the official contact information provided on the entity's
							website.
						</p>
						<h2>Urgency and Fear Tactics</h2>
						<p>
							Phishers often create a sense of urgency or use fear tactics to
							pressure you into taking immediate action. Be cautious of messages
							threatening account closure or claiming that your account has been
							compromised.
						</p>

						<h1>Protecting Yourself from Phishing Attacks</h1>
						<p>To safeguard against phishing:</p>
						<h2>Keep Software Updated</h2>
						<p>
							Regularly update your operating system, web browsers, and security
							software to ensure you have the latest protection against known
							vulnerabilities.
						</p>
						<h2>Use Strong Passwords</h2>
						<p>
							Create strong and unique passwords for each of your accounts.
							Avoid using easily guessable information such as birthdates or
							common phrases.
						</p>
						<h2>Enable Multi-Factor Authentication (MFA)</h2>
						<p>
							If available, enable 2FA for your accounts to add an extra layer
							of security beyond your password.
						</p>
						<h1>Moving Forward</h1>
						<p>
							Being informed and cautious about phishing attempts is crucial to
							maintaining your online security. By staying vigilant and
							following these tips, you can better protect yourself from falling
							victim to phishing attacks. Remember that cyber threats are
							constantly evolving, so it's essential to stay educated and
							practice safe online habits.
						</p>
						<h1>Quiz</h1>

						<iframe
							src="https://quizrecognise.onrender.com"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>

						<iframe
							src="https://rmprotectingemployees.web.app/"
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
