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
import SecureCodingPracticesHero from "components/hero/Technical/SecureCodingPracticesHero";
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
const CenteredContent = tw.div`flex items-center justify-center text-xl`;
const IndentDiv = tw.div`pl-8`;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-blue-900 mb-10`;
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
			<SecureCodingPracticesHero></SecureCodingPracticesHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>Web Application Development</Heading>
					</HeadingRow>
					<p>Last updated: 13th June 2023</p>
					<Text>
						<h1>Secure Coding Practices: Building Resilient Software</h1>
						<p>
							As technical users, understanding secure coding practices is
							paramount to building resilient and secure software applications.
							By following best practices and avoiding common vulnerabilities,
							you can significantly reduce the risk of introducing security
							flaws in your code. Here are essential principles to consider:
						</p>
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img
										src="https://imgur.com/wCdpHMC.png"
										alt="input validation"
									/>
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<h2>Input Validation:</h2>
								<p>
									Always validate and sanitize user inputs to prevent attacks
									like SQL injection, Cross-Site Scripting (XSS), and command
									injection. Trust no input and implement appropriate validation
									checks.
									<br></br>
									<br></br>A lack of safe input handling is the main cause of
									security flaws in web applications. Web applications must
									therefore never assume the validity of any input without
									conducting validation or sanitisation, including website
									addresses and their parameters, HTML, form data, cookie
									settings, and request headers. Examples of validation and
									sanitisation is making sure a phone form field only contains
									numbers and that data is used in a Structured Query Language,
									query is sanitised properly and ensuring Unicode input is
									handled appropriately.
								</p>
							</RightColumn>
						</TwoColumn>
						<TwoColumn>
							<LeftColumn>
								<h2>Output Encoding:</h2>
								<p>
									Output Encoding protect forms from cross-site scripting (XSS).
									It ensures the data output from your application is secure to
									be interpreted and displayed by a receiving application.
									<br></br>
									There is a chance that data output by your program could be
									interpreted incorrectly or used inappropriately, particularly
									if the data includes user-controlled input.
									<br></br>
									<br></br>
									The probability of cyberattacks such as Cross-Site Scripting
									(XSS) and other forms of content injection can be mitigated
									effectively through the implementation of output encoding
									techniques. These strategies are crucial, particularly when
									data derived from external sources—which may not have
									undergone rigorous input validation—are delivered to end
									users. The quintessential example of output encoding involves
									translating potentially hazardous HTML characters into their
									respective encoded forms, exemplified by the transformation of
									symbols like '&lt;', '&gt;' and '&' into their corresponding
									HTML character references, namely '&lt;', '&gt;', and '&'.
								</p>
							</LeftColumn>
							<RightColumn>
								<IllustrationContainer>
									<img
										src="https://imgur.com/x5BPXXi.png"
										alt="Ouput Encoding"
									/>
								</IllustrationContainer>
							</RightColumn>
						</TwoColumn>
						<h2>Parameterised Queries:</h2>
						<p>
							Utilise parameterised queries or prepared statements when
							interacting with databases to prevent SQL injection attacks. Avoid
							dynamically assembling SQL queries using user-provided data. The
							values entered by the user are provided as arguments. Due to the
							fact that the argument is handled as a literal value and its type
							and length are validated, they can no longer contain executable
							code.
							<br></br>
							<br></br>
							<b>
								<pre> Here is an example:</pre>
							</b>
							<br></br>
							<CenteredContent>
								<code>
									SELECT * FROM users WHERE username = 'user' AND email =
									'email@test.com';
								</code>
								<br></br>
								<br></br>
							</CenteredContent>
							<CenteredContent>
								<code>
									SELECT * FROM users WHERE username = :username_parameter AND
									email = :email_parameter;
								</code>
							</CenteredContent>
							<br></br>
							<CenteredContent>
								<b>
									<pre>
										{" "}
										The Basic Query (code above) will turn into a Parameterised
										Query (note the two parameters)
									</pre>
								</b>
							</CenteredContent>
							<br></br>
							The purpose of such queries are to “disconnect” the query from the
							values – if a value is malicious, it will be executed separately
							from the query itself and won’t cause any harm to the application.
							Parameterized queries operate by first establishing parameters,
							then associating those parameters with certain values, and
							subsequently executing the query. By executing queries in this
							manner, the system is safeguarded against injection attacks. This
							is because the parameters and the query are dispatched separately
							for execution, ensuring that they cannot be manipulated or
							exploited maliciously.
							<br></br>
							<br></br>
						</p>
						<h2>Secure Authentication:</h2>
						<p>
							Implement strong authentication mechanisms, such as multi-factor
							authentication (MFA), and never store passwords in plaintext. Use
							strong cryptographic hashing algorithms like bcrypt or Argon2 for
							password storage.
						</p>
						<h2>Secure Session Management:</h2>
						<p>
							Properly manage user sessions, use unique session IDs, and enforce
							session expiration to mitigate session-related vulnerabilities
							like session fixation and session hijacking.
						</p>
						<br></br> <br></br>
					</Text>
					<HeadingRow>
						<Heading>Application Development</Heading>
					</HeadingRow>
					<Text>
						<h2>Secure Software Design and Development</h2>
						<p>
							Leveraging secure-by-design and secure-by-default principles,
							memory-safe languages like C#, Go, Java, Ruby, Rust, and Swift,
							coupled with secure coding and agile methodologies, are integral
							to application development. They help identify and address
							software vulnerabilities and risky coding practices. Additionally,
							mechanisms to verify application authenticity and integrity,
							alongside secure configuration, can enhance software supply chain
							security.
						</p>
						<IndentDiv>
							`{" "}
							<TwoColumn>
								<LeftColumn>
									<h2>Authorization and Access Controls:</h2>
									<p>
										Enforce proper access controls to restrict users' privileges
										based on their roles and permissions. Ensure sensitive
										operations and data are only accessible to authorized users.
										<br></br>
										<br></br>
										The process of deciding what privileges an authenticated
										user has within a system is referred to as authorization.
										After a user's identity has been verified during
										authentication, authorization rules dictate what they are
										allowed to access and do. For instance, a sales department
										employee may have access to sales data but not to human
										resources data.
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img
											src="https://imgur.com/GDQBIbx.png"
											alt="Authorisation"
										/>
									</IllustrationContainer>
								</RightColumn>
							</TwoColumn>
							<TwoColumn>
								<LeftColumn>
									<h2>Secure Error Handling:</h2>
									<p>
										Handle errors gracefully, avoiding the exposure of sensitive
										information to users. Avoid verbose error messages that may
										assist attackers in identifying potential weaknesses.
										<br></br>
										<br></br>
										<b>Secure error handling practices generally include:</b>
										<ul>
											<li>
												Use of Exception Handling <br></br>
												Exceptions should be caught and handled properly to
												prevent the release of private information and to keep
												the program stable.
											</li>

											<li>
												User-Friendly Error Messages <br></br>
												Give the user generic error messages rather than
												revealing private system information.
											</li>
											<li>
												Logging <br></br>
												To aid in debugging, detailed error information should
												be logged. The log files need to be safeguarded and
												checked frequently for any problems.
											</li>
											<li>
												Input Validation <br></br>
												Validate input data to reduce the possibility of
												inaccurate data leading to mistakes or vulnerabilities.
											</li>
											<li>
												Fail Securely <br></br>
												The system should fail in a safe manner in the event of
												an error, reducing the chance of exploitation.
											</li>
										</ul>
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img
											src="https://imgur.com/I5rTJwK.png"
											alt="Error Handling"
										/>
									</IllustrationContainer>
								</RightColumn>
							</TwoColumn>
							<TwoColumn>
								<LeftColumn>
									<h2>Avoid Hardcoding Sensitive Information:</h2>
									<p>
										Do not hardcode sensitive information like passwords or API
										keys directly into the code. Instead, use secure
										configuration files or environment variables to store such
										data.
										<br></br>
										<br></br>
										Hardcoding sensitive data in code, such as passwords or API
										credentials, poses a security concern. This information
										should be kept in environment variables or secure
										configuration files. For secret management in cloud or
										containerized systems, consider solutions such as HashiCorp
										Vault or AWS Secrets Manager. Adhere to the concept of least
										privilege, provide only essential access to secrets, and
										have mechanisms in place for regular updates and audits.
										Avoiding hardcoding sensitive information improves program
										security greatly.
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img src="https://imgur.com/IrAiMt6.png" alt="Hard Code" />
									</IllustrationContainer>
								</RightColumn>
							</TwoColumn>
							`
						</IndentDiv>
						<h2>Regular Code Reviews:</h2>
						<p>
							Encourage thorough code reviews to identify and fix security
							issues early in the development process. Collaborate with team
							members to ensure security is an integral part of the development
							lifecycle.
							<br></br>
							<br></br>
							Regular code reviews are an essential component of secure software
							development. This procedure comprises systematically inspecting a
							peer's code for potential concerns such as security
							vulnerabilities, bugs, and design flaws. Code reviews prevent
							security risks from infiltrating the production environment, where
							they could be exploited by malicious actors, by enabling early
							detection and rectification of security concerns. Code reviews
							also build a team-oriented culture by promoting shared knowledge
							about the codebase and its inherent weaknesses. As a result, there
							is a stronger defense against security risks and more secure
							applications.
							<br></br>
							<br></br>
							Code reviews, in addition to establishing a collaborative culture,
							provide invaluable teaching opportunities. Developers can learn
							from their peers' achievements and failures, resulting in a
							thorough understanding and adoption of secure coding techniques
							across the organization. By quickly scanning code for common
							security flaws, automated tools can supplement manual assessments.
							However, while these tools can improve efficiency, they should not
							be used in place of manual evaluations because they may miss some
							possible issues. Code reviews should be fully integrated into the
							development lifecycle, with dedicated time allotted for this
							critical activity. This technique emphasizes the importance of
							security in software development and guarantees that it is not
							overlooked in the rush to fulfill project deadlines.
						</p>
						<h2>Update Dependencies and Libraries:</h2>
						<p>
							Frequently update and patch third-party dependencies and libraries
							to avoid vulnerabilities present in outdated versions.
							<br></br>
							<br></br>
							It is critical to update and patch third-party dependencies and
							libraries in your software on a regular basis. If these components
							are out of current, they may have vulnerabilities that can be
							exploited, jeopardizing the security of your application. Regular
							updates not only address known vulnerabilities, but they also
							improve performance and functionality. It's critical to stay up to
							date on new releases and security warnings so you can respond
							quickly to identified dangers. In short, staying up to current on
							dependencies and libraries is a must for maintaining secure
							software.
						</p>
						<h2>Use Security Libraries and Frameworks:</h2>
						<p>
							Leverage trusted security libraries and frameworks to handle
							critical security functions. These have been extensively tested
							and are designed to prevent common vulnerabilities.<br></br>
							Using reliable security libraries and frameworks is critical in
							developing secure software. These tools, which are designed to
							handle critical security functions, make it easier to construct
							secure apps by enforcing secure coding best practices. Their
							comprehensive testing of their inherent security procedures
							reduces the possibility of vulnerabilities caused by errors or
							oversights. They manage complicated tasks like input validation,
							output encoding, and cryptography properly, preventing common
							vulnerabilities like XSS, injection attacks, and weak encryption.
							<br></br>
							<br></br>
							These tools are often maintained by credible organizations, which
							ensures regular updates and fixes to address any detected
							vulnerabilities. Misconfigurations can cause vulnerabilities,
							therefore proper configuration and usage are critical to
							maintaining security. In summary, using security libraries and
							frameworks greatly contributes to the development of secure
							software by reducing potential security issues.
						</p>
						<h1>Moving Forward</h1>
						<p>
							As technical users, implementing secure coding practices is not
							only our responsibility but also a critical aspect of building
							secure and reliable software. By staying informed about emerging
							threats and consistently following secure coding principles, we
							can contribute to the overall cybersecurity posture of our
							applications and protect our users' data and privacy.
						</p>
						<h1>Quiz</h1>
						<iframe
							src="https://securecodingpractice.onrender.com/"
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
							src="https://rmcodingpractice-c53e6.web.app"
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
