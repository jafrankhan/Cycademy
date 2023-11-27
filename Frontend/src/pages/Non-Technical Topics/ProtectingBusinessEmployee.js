import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";

import ProtectingBusinessComp from "components/hero/ProtectingBusinessComp";

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

export default ({ headingText = "Protecting your Business and Employees" }) => {
	return (
		<AnimationRevealPage>
			<ProtectingBusinessComp></ProtectingBusinessComp>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						<h1>Introduction</h1>
						<p>
							Business email compromise occurs when malicious actors use email
							to abuse trust in business processes in order to defraud
							organisations money or assets. Malicious actors can impersonate a
							company representative by using a deceptive name, domain, and/or
							logo similar to that of a legitimate organisation, or by using
							compromised and fake email accounts pretending to be a trusted
							colleague.
						</p>
						<p>
							Here are a few common things to look out for to see if someone
							else has accessed your email account:
						</p>
						<br></br>
						<img src="https://imgur.com/AMnyVtF.png" alt="Invoice Fraud" />
						<h2>Invoice Fraud</h2>
						<p>
							Malicious actors compromise supplier email accounts and thereby
							gain access to legitimate invoices. The malicious actors then
							modify the contact and bank details on these invoices and send
							them to the customer along with the compromised email account. The
							customer pays the bill, thinking to pay the supplier, but instead
							sends the money to the malicious actors' bank accounts.
						</p>

						<br></br>
						<img
							src="https://imgur.com/QWLeQlu.png"
							alt="Employee Impersonation"
						/>
						<h2>Employee Impersonation</h2>
						<p>
							Malicious actors compromise work email accounts and impersonate
							colleagues via email. Malicious actors can use this identity to
							commit fraud in many ways. One common method is to impersonate
							someone powerful (such as the CEO or CFO) and issue fake invoices.
							Another method is to request a change in the employee's bank
							details. Money from fake invoices or workers' wages is then sent
							to the malicious actors' bank accounts.
						</p>

						<br></br>
						<img
							src="https://imgur.com/DWFHjhQ.png"
							alt="Company Impersonation"
						/>
						<h2>Company Impersonation</h2>
						<p>
							Malicious actors register domain names that are very similar to a
							large, well-known, and trusted organisation. The malicious actors
							then impersonate the organisation in an email to the supplier and
							request a quote for a number of expensive goods, such as laptops.
							They negotiate with the supplier to deliver the goods before
							paying. The goods are delivered to a specified location, however,
							the invoices are sent to a legitimate organisation that has never
							ordered or received the goods.
						</p>

						<h1>How to prevent Business email compromise</h1>
						<p>
							Implement protective measures that are simple, cost-effective and
							immediately beneficial. Here are some ways:
						</p>

						<br></br>
						<img
							src="https://imgur.com/bznu8LW.png"
							alt="Multi-Factor Authentication & Strong Passphrases"
						/>
						<h2>Multi-Factor Authentication & Strong Passphrases</h2>
						<p>
							Having a multi-factor authentication increases the security on
							your email account, by having two checks in place to prove your
							identity before you can access your account. For example, you may
							need to supply an authentication code from an app as well as your
							password. This makes it more difficult for someone to access your
							files or account. Follow ACSC’s multi-factor authentication guide
							to learn how to enable multi-factor authentication. If you are
							unable to utilise multi-factor authentication, use a strong
							passphrase for your email account. Using multiple forms of
							authentication makes it much more difficult to get into your
							system. Malicious actors can successfully steal one type of
							credentials, but it's very difficult to steal the exact
							combination of multiple logins for a given account.
						</p>
						<br></br>
						<img
							src="https://imgur.com/JP47J4J.png"
							alt="Protecting Domain Names"
						/>
						<h2>Protecting Domain Names</h2>
						<p>
							A domain name is a string of characters that are frequently words.
							It helps to identify you or your company to other Internet users.
							This is the text that follows the "@" symbol in an email address.
							If your domain name expires, it will be offered for purchase to
							anyone. A criminal may buy your old domain name and use it to
							impersonate you or your company by creating an email address and
							contacting your customers. Customers or contacts may recognise
							your domain name and believe that you are still using that email
							account. Unbeknownst to them, they are communicating with a
							cyber-criminal. Remember to renew your domain names, even if you
							no longer use them.
						</p>
						<br></br>
						<img
							src="https://imgur.com/LRH19cI.png"
							alt="Register Additional Domain Names"
						/>
						<h2>Register Additional Domain Names</h2>
						<p>
							A typical method of fraud used by hackers is to register a domain
							name that is very close to your company name. At first glance,
							email addresses generated by bogus domain names may appear
							identical to your own. This could lead your contacts to believe
							they are emailing the genuine you. Consider registering domain
							names that are similar which could be utilized to deceive your
							contacts.
						</p>
						<br></br>
						<img
							src="https://imgur.com/myC0M8i.png"
							alt="Set Up Email Authentication Measures"
						/>
						<h2>Set Up Email Authentication Measures</h2>
						<p>
							Setting up email authentication procedures on your domain may help
							to prevent email spoofing attacks if you have your own business
							domain that you use for emailing. A cyber criminal could be able
							to send an email appearing to be from your email address without
							ever having to breach your email account. Email spoofing is
							analogous to faking the authorship of a letter. Anyone can write a
							return address on an envelope, but that doesn't mean it's from
							that location.
						</p>
						<p>
							Email spoofing occurs when someone forges an email's "From:" box
							to indicate that it was sent from a different email account than
							their own. Setting up email authentication procedures will
							identify emails that are not valid if someonen attempts to spoof
							your email account. These methods assist to ensure that faked
							emails do not reach their intended recipient; instead, they are
							routed to the recipient's spam folder or are not delivered at all.
							Discuss adding Sender Policy Framework (SPF), DomainKeys
							Identified Mail (DKIM), and Domain-based Message Authentication,
							Reporting, and Conformance (DMARC) entries to your domain name
							with your service provider. If your DNS hosting is with a
							different provider, you will also need to contact them.
						</p>
						<br></br>
						<img
							src="https://imgur.com/YXmIPKu.png"
							alt="Protect Your Privacy"
						/>
						<h2>Protect Your Privacy</h2>
						<p>Be cautious when uploading material that identifies:</p>
						<p>
							<li>What your job title is</li>
							<li>where you work</li>
							<li>Your company's email address</li>
							<li>Your private email address</li>
						</p>
						<p>
							Your email address may become a target for impersonation if it is
							available on several websites or forums. Visit the Office of the
							Australian Information Commissioner (OAIC) at oaic.gov.au for
							further information on how to manage your information online.
						</p>
						<br></br>
						<img
							src="https://imgur.com/rmDxBqM.png"
							alt="Implement Policies & Procedures"
						/>
						<h2>Implement Policies & Procedures</h2>
						<p>
							If a staff member receives an email from a client, colleague, or
							supplier with an unusual or unexpected request, they should verify
							the authenticity of the email before acting on it. Introduce
							policies and procedures to handle security issues and help keep
							your firm secure to ensure this. As an example:
						</p>
						<p>
							<li>
								Consider instituting an approval process for requests to modify
								payment information or make a significant transfer
							</li>
							<li>
								Call the sender to confirm any such requests. Call them on a
								known and verified phone number (not the phone number in the
								email, which could be run by a cyber criminal). Speak with the
								sender over the phone to vocally affirm or amend the request.
							</li>
							<li>
								Ensure that employees are given clear instructions on how to
								verify account details and think critically before acting on
								unexpected requests
							</li>
							<li>
								Establish a reporting procedure for threatening demands for
								immediate action, secrecy, or requests to circumvent protective
								business processes
							</li>
						</p>
						<br></br>
						<img
							src="https://imgur.com/u6iUiJL.png"
							alt="Training & Awareness"
						/>
						<h2>Training & Awareness</h2>
						<p>
							Training and awareness for your staff, especially how to recognize
							frauds or phishing efforts, is the best defense against email
							scams. Make it clear to your employees that they should always be
							wary of emails of the following nature:
						</p>
						<p>
							<li>Requests for money</li>
							<li>Change of bank account</li>
							<li>Attachments from unknown or suspicious email addresses</li>
							<li>Requests to check or confirm login details</li>
							<li>Unexpected or suspicious links</li>
						</p>
						<p>
							Incorporate, update, and regularly repeat cybersecurity awareness
							and training for your employees to protect your business from
							cyber criminals.
						</p>
						<br></br>
						<img
							src="https://imgur.com/YaqXx7n.png"
							alt="Remain Vigilant and Informed"
						/>
						<h2>Remain Vigilant and Informed</h2>
						<p>
							While it's one thing to build defenses to protect your
							information, it's best to stay up to date with ever-changing
							trends and cyber threats that could affect you at any time. Stay
							up to date with cyber security threats and trends by becoming an
							ACSC partner.
						</p>
						<h1>Quiz</h1>
						<iframe
							src="https://quizrecognise.onrender.com"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>

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
