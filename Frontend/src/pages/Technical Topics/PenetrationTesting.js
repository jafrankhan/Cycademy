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
import PenetrationTestingHero from "components/hero/Technical/PenetrationTestingHero";

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

export default () => {
	return (
		<AnimationRevealPage>
			<PenetrationTestingHero></PenetrationTestingHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading></Heading>
					</HeadingRow>
					<Text>
						<h1>Understanding Penetration Testing</h1>
						<p>
							Penetration testing, also known as ethical hacking, is a proactive
							approach used to assess the security of computer systems,
							networks, or applications. It involves simulating real-world
							attacks to identify vulnerabilities before malicious hackers can
							exploit them. Technical users can benefit from understanding the
							key aspects of penetration testing, which are outlined below.
						</p>

						<br></br>
						<img
							src="https://imgur.com/mbhPhC9.png"
							alt="Penetration Testing"
						/>
						<h1>Types of Penetration Testing</h1>
						<p>There are various types of penetration testing, including:</p>

						<h2>Network Penetration Testing</h2>
						<p>
							Network penetration testing works by simulating an actual attack,
							providing important insights into potential weaknesses that
							hackers can use as entry points into your network. "Ethical
							hackers" (either security experts on your team or a third-party
							vendor) use a variety of methods to try to compromise your
							network(s).
						</p>
						<h2>Web Application Penetration Testing</h2>
						<p>
							Web application penetration testing involves simulating attacks on
							web applications with the aim of gaining access to sensitive data
							to determine if web applications are secure. These attacks are
							performed inside or outside the web applications, and they help to
							provide information about the web application, identify
							vulnerabilities inside and uncover exploits that can actually
							compromise the web application. This is an essential health check
							step that notifies the tester if corrective and safety actions
							need to be taken.
						</p>
						<h2>Wireless Penetration Testing</h2>
						<p>
							Wireless penetration testing involves identifying and testing
							connections between all devices that are connected to the
							company's wireless network. These devices include laptops,
							tablets, smartphones, and any other Internet of Things (IoT)
							devices. Wireless penetration testing is usually performed at the
							company's location, as the tester must be within range of the
							wireless signal to gain access.
						</p>
						<h2>Mobile Application Penetration Testing</h2>
						<p>
							Mobile application penetration testing is a security assessment
							performed on a native mobile application. The native mobile
							application is a dedicated application for smartphones that is
							coded in a programming language specific to its respective
							operating system. As with all software and systems, mobile
							application security vulnerabilities can be exploited by hackers
							to gain access to sensitive data, real-time communications, and
							information. Mobile application testing mimics the actions of a
							real-life threat actor so you can better understand the security
							holes in your mobile applications and fix them.
						</p>
						<h2>Cloud Penetration Testing</h2>
						<p>
							Cloud penetration testing is a simulated attack to evaluate the
							security of an organisation's cloud-based infrastructure and
							applications. It's an effective way to proactively identify
							potential vulnerabilities, risks, and bugs, and devise a workable
							remediation plan to fix vulnerabilities before hackers exploit
							them. Cloud penetration testing helps an organisation's security
							team understand vulnerabilities and misconfigurations, allowing
							them to respond appropriately to strengthen their security
							posture. The ever escalating risks of cloud cyber attack have
							placed businesses at risk. By performing cloud penetration
							testing, an organisation can fix critical cloud security issues
							and fix them immediately before they are taken advantage of by
							malicious hackers.
						</p>

						<br></br>
						<img
							src="https://imgur.com/7sPbwnw.png"
							alt="Penetration Testing Process"
						/>
						<h1>Penetration Testing Process</h1>
						<p>
							The penetration testing process typically involves the following
							steps:
						</p>
						<h2>Reconnaissance</h2>
						<p>
							The first phase of penetration testing is reconnaissance. During
							this phase, the tester collects as much information as possible
							about the target system, together with information about the
							network topology, operating systems and applications, user
							accounts, and other relevant information. The goal is to collect
							as much data as possible so that testers can plan a fruitful
							strike strategy.
						</p>
						<h2>Scanning</h2>
						<p>
							Once all relevant data has been collected in the reconnaissance
							phase, it's time to move on to scanning. During this penetration
							testing phase, the tester uses a variety of tools to identify open
							ports and verify network traffic on the target system. Since open
							ports are a potential entry point for an attacker, the penetration
							tester should identify as many open ports as possible for the next
							phase of penetration testing.
						</p>
						<h2>Vulnerability Analysis</h2>
						<p>
							The third phase of penetration testing is vulnerability analysis,
							where the tester use all the data collected during the
							reconnaissance and scanning phase to recognise potential
							vulnerabilities. It would then be determine if the vulnerabilities
							can be exploited or not. Like scanning, vulnerability analysis
							itself is a useful tool, but it is most powerful when combined
							with other phases of penetration testing.
						</p>
						<h2>Exploitation</h2>
						<p>
							Once the vulnerabilities have been identified, the penetration
							tester would begin to exploit them. During this penetration
							testing phase, the penetration tester would attempt to gain access
							to the target system and exploit the recognised vulnerabilities,
							often using tools to simulate real world attacks. This is arguably
							the most difficult phase of penetration testing because to access
							the target system, it requires bypassing security restrictions.
						</p>
						<h2>Reporting</h2>
						<p>
							Once the exploitation phase is complete, the penetration tester
							would prepare reports documenting the results of the penetration
							test. Generating such penetration test reports requires the
							penetration tester to specifically document the vulnerabilities
							and put them in context. Reports generated during this final
							penetration testing phase can be used to rectify vulnerabilities
							found and enhance the security posture of the organisation.
						</p>

						<br></br>
						<img
							src="https://imgur.com/ouQ13sH.png"
							alt="Importance of Penetration Testing"
						/>
						<h1>Importance of Penetration Testing</h1>
						<p>
							Penetration testing is a crucial component of a comprehensive
							cybersecurity strategy for technical users because it:
						</p>
						<h2>Identifies Weaknesses</h2>
						<p>
							Identifying and exploiting previously unknown security
							vulnerabilities before an attacker does is important to
							maintaining security, which is why there are many security patches
							in applications. Penetration testing can reveal vulnerabilities in
							a cyber security plan that were overlooked in the beginning.
							Penetration testing points out what is most likely to be
							exploited, to better prioritise the risks and use the resources
							efficiently. The human element of penetration testing means that
							the organisation can uncover vulnerabilities that only come to
							light through a combination of low-risk vulnerabilities that an
							attacker can exploit in a particular sequence. Parts of the
							security plan that requires work can also be uncovered, along with
							requiring additional authentication if it is required.
						</p>
						<h2>Measures Security Posture</h2>
						<p>
							The summary results of the penetration test helps to provide an
							organisation with a better understanding of their security
							posture. The organisation would benefit from the knowledge of
							security vulnerabilities and the possible damage that the
							attackers can cause to the system efficiency and performance. In
							addition to giving recommendations for quick fixes, a qualified
							penetration tester can help the organisation to build a strong
							cyber security infrastructure.
						</p>
						<h2>Supports Compliance</h2>
						<p>
							On top of being an essential part of protecting the organisation
							and its assets against attackers, penetration testing can help an
							organisation to comply with the highest privacy and security
							standards requirements. Security system testing and auditing
							should be regularly, to comply with the regulations and to avoid
							hefty fines. Penetration testing helps the organisation to
							strengthen their security policies and demonstrate to reviewers
							that they are diligently monitoring vulnerabilities.
						</p>
						<h2>Ensures Trust</h2>
						<p>
							Customers/Partners want to know their information is secure when
							dealing with an organisation, especially in light of the frequent
							reports of data breaches. Penetration testing is a way to show
							them that the organisation is secure. A security review that
							commonly includes the discussion of penetration testing is always
							done before large contracts such as consolidation or vendor
							agreements are signed off.
						</p>

						<h1>Moving Forward</h1>
						<p>
							Penetration testing plays a critical role in strengthening an
							organization's cybersecurity defenses. By understanding the
							different types of penetration testing, the testing process, and
							the benefits it offers, technical users can contribute
							significantly to securing their systems, networks, and
							applications from potential threats.
						</p>

						<br></br>
						<br></br>
						<br></br>
						<h1>Game</h1>
						<iframe
							src="https://rmpenetrationtesting.web.app"
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
