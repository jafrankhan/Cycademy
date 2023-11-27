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
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import ImgOne from "../../images/demo/SecurityIncidentResponse.png";

import SecurityIncidentResponseHero from "components/hero/Technical/SecurityIncidentResponseHero.js";
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-blue-900 mb-10`;

const Text = styled.div`
	${tw`text-xl  text-gray-800`}
	p {
		${tw`mt-3 leading-loose`}
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
			${tw`ml-2 mb-3 mt-4`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`;

export default () => {
	return (
		<AnimationRevealPage>
			<SecurityIncidentResponseHero></SecurityIncidentResponseHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading> Managing Cyber Security Incidents</Heading>
					</HeadingRow>
					<Text>
						<p>Last updated: 13th June 2023</p>
						<h1>
							Security Incident Response: How to Handle Security Incidents
						</h1>
						<p>
							In the event of a security incident, a prompt and effective
							response is crucial to minimize damage and protect sensitive
							information. As technical users, understanding the key steps for
							handling security incidents is essential. Below are the
							recommended actions for an efficient Security Incident Response
							(SIR) process:
						</p>
						<h2>1. Detection and Identification:</h2>
						<p>
							Detecting security incidents involves monitoring system logs,
							intrusion detection systems, and security alerts. Identify the
							nature and scope of the incident to determine its severity and
							potential impact on systems and data.
						</p>
						<h2>2. Containment:</h2>
						<p>
							Quickly isolate affected systems or devices to prevent the
							incident from spreading further. This may involve disconnecting
							compromised machines from the network or suspending user accounts
							associated with suspicious activity.
							<TwoColumn>
								<LeftColumn>
									In order to minimise damage and prevent an attacker from
									erasing evidence of their attack, containment measures are put
									in place.
									<br></br>
									<br></br>
									<b>Planning containment actions should take into account:</b>
									<ul>
										<li>
											Any additional impacts there could be to systems or
											services
										</li>
										<li>Time and resources required to contain the incident</li>
										<li>
											Effectiveness of the containment solution (e.g. partial vs
											full containment)
										</li>
										<li>
											Duration that the solution will remain in place (e.g.
											temporary vs permanent solution)
										</li>
									</ul>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img
											src="https://imgur.com/s2xde79.png"
											alt="Containment"
											class="center"
										/>
									</IllustrationContainer>
								</RightColumn>
							</TwoColumn>
						</p>
						<h2>3. Eradication:</h2>
						<p>
							Identify the root cause of the incident and eliminate all traces
							of the attacker's presence. This step may involve patching
							vulnerabilities, removing malware, and strengthening security
							controls to prevent similar incidents in the future.
							<br></br>
							<br></br>
							<b>The main objectives are:</b>
							<ul>
								<li>to evict the adversary completely from the environment</li>
								<li>
									to mitigate the vulnerability (if known) that enabled or could
									enable the adversary to reenter the environment.
								</li>
							</ul>
						</p>
						<h2>4. Recovery:</h2>
						<p>
							Restore affected systems and data from secure backups to bring
							operations back to normal. Ensure that all restored data is free
							from malware or compromise before reintegrating it into the
							environment.
						</p>
						<TwoColumn>
							<LeftColumn>
								<p>
									A Remediation Action Plan is to be developed and implemented
									for eradicating and resolving the incident following
									successful containment and evidence collection.
									<br></br>
									<br></br>
									<b>
										When developing the Redediation Action Plan, we can condider
										the following:
									</b>
									<ul>
										<li>
											{" "}
											What actions are required to eradicate/resolve the
											incident?{" "}
										</li>
										<li>
											{" "}
											What resources are required to resolve the incident ?{" "}
										</li>
										<li> Who is responsible for remediation actions? </li>
										<li> What systems/services should be prioritised? </li>
										<li>
											{" "}
											Which systems/ services will be affected during the
											remediation process?
										</li>
										<li> What is the expected resolution time? </li>
									</ul>
								</p>
							</LeftColumn>
							<RightColumn>
								<IllustrationContainer>
									<img src="https://imgur.com/tATh0lm.png" alt="Recovery" />
								</IllustrationContainer>
							</RightColumn>
						</TwoColumn>
						<h2>5. Investigation and Analysis:</h2>
						<p>
							Conduct a thorough investigation to understand how the incident
							occurred, what data or systems were affected, and the potential
							impact on the organization. Document the findings for further
							analysis and reporting.
							<br></br>
							<br></br>
							Create a set of investigative questions for each occurrence to
							direct incident response operations and help assess the extent and
							impact of the incident. With the information at hand, not all
							questions may be able to be answered, and questions may alter as
							your inquiry goes on.
							<br></br>
							<br></br>
							<b>Here are potential initial investigation questions: </b>
							<ul>
								<li> What was the initial intrusion vector? </li>
								<li>
									{" "}
									What post-exploitation activity occurred? Have accounts been
									compromised? What level of privilege?{" "}
								</li>
								<li>
									{" "}
									Does the actor have persistence on the network or device?
								</li>
								<li>
									{" "}
									Is lateral movement suspected or known? Where has the actor
									laterally moved to and how?{" "}
								</li>
								<li> How is the actor maintaining command and control? </li>
								<li>
									{" "}
									Has data been accessed or exfiltrated and, if so, what kind of
									data?{" "}
								</li>
							</ul>
						</p>
						<h2>6. Communication:</h2>
						<p>
							Effective communication is crucial during a security incident.
							Inform relevant stakeholders, including management, IT teams, and
							affected users, about the incident, its impact, and the actions
							being taken to mitigate it.
							<TwoColumn>
								<LeftColumn>
									<p>
										<b>Internal Communications</b>
										<br></br>
										Include your organization's procedure and anticipated
										turnaround times for informing your workforce of relevant
										incident information. Think about how you can assist company
										continuity and tell personnel about the incident in your
										internal communications.
										<br></br>
										Consider Providing:
										<ul>
											<li>
												{" "}
												A brief summary of the incident and business impact{" "}
											</li>
											<li>
												{" "}
												Actions currently being undertaken to resolve the
												incident{" "}
											</li>
											<li> Actions staff can take to assist </li>
											<li>
												{" "}
												Business continuity options for staff who are affected
												by the incident{" "}
											</li>
											<li> Messaging for external stakeholders </li>
											<li> Key points of contact for enquiries </li>
											<li>
												{" "}
												What is the expected timeframes for further updates
											</li>
										</ul>
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img src="https://imgur.com/O2jrvW8.png" alt="Recovery" />
									</IllustrationContainer>
								</RightColumn>
							</TwoColumn>
							<b>External Communications</b>
							<br></br>
							Include your organisation’s process and timeframes to communicate
							relevant incident information to external stakeholders. It can be
							important to interact with exteranal stakeholders depending on the
							significance and severity of the cyber incident.
							<br></br>
							They may include:
							<ul>
								<li>
									{" "}
									Stakeholders to support your incident response such as
									government agencies, third party incident response, law
									enforcement and/or sector organisations{" "}
								</li>
								<li>
									{" "}
									Stakeholders seeking information about the incident such as
									customers, government agencies, clients, shareholders,
									suppliers and/or sector organisations{" "}
								</li>
								<li> Media and the general public </li>
								<li> Other stakeholders, such as insurance providers. </li>
								<br></br>
								<br></br>
								Consider how you can inform external stakeholders about the
								incident according to their role:
								<li> Information they need to know </li>
								<li>
									{" "}
									Options for stakeholders affected by the incident (customers){" "}
								</li>
								<li> Key points of contact for enquiries </li>
								<li> What is the expected timeframes for further updates</li>
							</ul>
							<br></br>
						</p>
						<h2>7. Reporting and Documentation:</h2>
						<p>
							Document all aspects of the incident response process, including
							timelines, actions taken, and lessons learned. This documentation
							is vital for post-incident analysis and to improve the
							organization's overall security posture.
						</p>
						<h2>8. Post-Incident Review:</h2>
						<p>
							Conduct a post-incident review to assess the effectiveness of the
							response and identify areas for improvement. Use this review to
							refine incident response procedures and enhance the organization's
							security incident preparedness.
							<br></br>
							<br></br>A Post Incident Review (PIR) is a detailed review
							conducted after a cyber security incident.
							<br></br>
							<br></br>
							<b>Here are some key questions to consider in a PIR: </b>
							<ul>
								<li>
									{" "}
									What were the root causes of the incident and any incident
									response issues?
								</li>
								<li> Could the incident have been prevented? How?</li>
								<li> What worked well in the response to the incident?</li>
								<li>
									{" "}
									How can our response be improved for future incidents?{" "}
								</li>
							</ul>
						</p>

						<h1>Moving Forward</h1>
						<p>
							By familiarizing yourself with the Security Incident Response
							process, you can play a critical role in effectively managing and
							mitigating security incidents. Timely detection, swift response,
							and thorough documentation are key to minimizing the impact of
							security incidents and safeguarding the organization's assets and
							reputation.
						</p>
						<h1>Quiz</h1>
						<iframe
							src="https://quizsecurityincident.onrender.com/"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }}
						/>
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>

						<iframe
							src="https://rmcloudsecurityincident.web.app"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }}
						/>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
