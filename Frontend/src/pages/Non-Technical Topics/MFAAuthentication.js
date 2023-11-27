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
import RansomwareStats from "components/features/RansomwareStats";
import { useEffect, useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import MFAAuthenticationHero from "components/hero/MFAAuthenticationHero";
import ResultTable from "components/hero/ResultTable";

const HeadingRow = tw.div`flex`;

const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const ResponsiveIframeContainer = styled.div`
	position: relative;
	padding-top: 56.25%;
`;

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

const MFAAuthentication = () => {
	const { user } = useAuthContext();

	return (
		<AnimationRevealPage>
			<MFAAuthenticationHero></MFAAuthenticationHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>{user && <Heading>{user.Email}</Heading>}</HeadingRow>
					<Text>
						<h1>Diving Deeper into Multi-Factor Authentication</h1>
						<p>
							Using Multi-Factor-Authentication (MFA) is a great way to keep
							your accounts safe from unauthorised access. But if you can't use
							multi-factor authentication, having a strong passphrase is the
							best way to protect yourself. Adding MFA to your account is like
							installing a security system in your house that requires a PIN to
							deactivate. It offers an additional safeguard against online
							intruders aiming to gain unauthorised access. Even if they break
							through one layer of security, they still have to overcome another
							barrier to access your account.
						</p>
						<h2>How does Multi-Factor Authentication Work?</h2>
						<img src="https://imgur.com/GBQx4dG.png" alt="How does MFA Work" />
						<p>
							You may already be utilising MFA, which involves using two or more
							distinct actions to confirm your identity. For instance, when you
							submit your password to log into an online account and
							subsequently receive an authentication code via SMS text message.
							One of the best ways to guard against account hacking is with MFA.
							By adding additional levels of security, it makes it more
							difficult for online fraudsters to gain control of your account.
						</p>
						<p>
							For MFA to work, a combination of two or more of the following
							factors is needed for you to access your accounts:
						</p>
						<p>
							<li>Something you know (e.g. a PIN, password or passphrase)</li>
							<li>
								Something you have (e.g. a smartcard, physical token,
								authenticator app, SMS or email)
							</li>
							<li>
								Something you are (e.g. a fingerprint, facial recognition or
								iris scan)
							</li>
						</p>
						<p>
							MFA helps to prevent the vast majority of password-related hacks.
							For example, MFA protects against credential stuffing, which
							occurs when fraudsters repeat previously obtained credentials from
							one website to gain access to additional accounts. Consider adding
							MFA to your account in the same way that you would add a house
							alarm that requires a PIN to disable. It adds an extra layer of
							security against cyber criminals attempting to break in. Even if
							they get past one layer (like guessing your password), they still
							need to get past a second barrier to have access to your account.
						</p>
						<p>
							An extra step may seem difficult at first, but remember that
							cutting corners would make your system susceptible to cyber
							attacks. Spending a few seconds now by inputting a one-time code
							would save you hours later, when you try to recover access to your
							account and the implications of your data being stolen.
						</p>
						<h2>Ways to implement Multi-Factor Authentication</h2>
						<br></br>
						<img src="https://imgur.com/9lQOv7i.png" alt="SMS Code" />
						<h3>SMS code</h3>
						<p>
							This is a random code that you will be given in order to access or
							utilise an online service. For example, after entering your
							username and password to log in, you will receive an SMS
							containing a 'one-time password' (OTP) that you must enter to
							access your account. Another example is receiving an SMS code
							before transferring money to a new payee for the first time when
							using online banking. You may be given the option of receiving the
							OTP via email or phone call. If you prefer to get an OTP through
							email, ensure that your email account has been secured with MFA.
						</p>
						<p>
							It should be noted that SMS and email authentication are less
							secure than other methods of MFA.
						</p>
						<br></br>
						<img
							src="https://imgur.com/00VT35J.png"
							alt="Authenticator Application"
						/>
						<h3>Authenticator Application</h3>
						<p>
							Authenticator applications are smartphone applications that
							produce a random OTP and are more secure than SMS codes. You must
							first install an authenticator application on your device. Among
							the most popular are Google Authenticator, LastPass Authenticator,
							Microsoft Authenticator, and Authy Authenticator. Turn on MFA and
							select the authentication application option in the settings of
							your online account. This will reveal a QR code carrying a
							one-of-a-kind key. For it to link your account to the
							authenticator application, use your authenticator application to
							take a picture of the QR code or manually enter the key. Once this
							is completed, the application will generate a new six-digit code
							every 30 seconds. Enter the six-digit code whenever you are
							logging in, and MFA is on!
						</p>
						<br></br>
						<img src="https://imgur.com/NRKY0K5.png" alt="Biometrics" />
						<h3>Biometrics</h3>
						<p>
							Your unique qualities serve as the authenticator in biometrics.
							Using your face or fingerprint to access your smartphone or mobile
							applications is an example of using biometrics for MFA. Biometrics
							are convenient for MFA because they are always with you and cannot
							be misplaced or forgotten.
						</p>
						<br></br>
						<img src="https://imgur.com/KNo5VHD.png" alt="Security Key" />
						<h3>Security Key</h3>
						<p>
							A security key is a small physical token that does not have a
							display screen and is typically inserted into your device through
							a USB connection or kept close by for wireless versions. It
							prompts the user to enable authentication processes and is the
							most secure kind of MFA than the other options discussed above.
						</p>
						<h2>Turning on Multi-Factor Authentication</h2>
						<p>
							You should enable MFA whenever you can, starting with your
							important accounts, like:
						</p>
						<p>
							<li>Email Accounts(e.g Gmail,Outlook,Yahoo Mail)</li>
							<li>Financial Services(e.g Online Banking)</li>
							<li>
								Cloud Services(e.g Dropbox,Google Drive, Microsoft One Drive)
							</li>
							<li>Social Media Accounts ( e.g Facebook,Instagram)</li>
							<li>
								Accounts that store or use your payment
								information(Amazon,Paypal)
							</li>
						</p>
						<h2> Advantages of Multi-Factor Authentication</h2>
						<p>
							<li>Increased Security</li>
							<li>Protect Against Common Attacks </li>
							<li>Help organisations meet security compliance requirements</li>
							<li>Reduced Risk of Data Breaches</li>
							<li>Protect Against Weak Employee Passwords</li>
							<li>
								Allows for less extensive sign in process for high security
								networks
							</li>
							<li>Improved Customer Trust </li>
						</p>
						<h1>Quiz</h1>
						<div className="flex items-center justify-center h-screen">
							<iframe
								src="https://quizmfa.onrender.com"
								title="Embedded Website"
								width="100%"
								height="800"
								style={{ border: "none" }} // Optional: Remove iframe border
							/>
						</div>
						<br></br>
						<br></br>
						<br></br>
						<h1>Game</h1>

						<iframe
							src="https://rmmultifactorauthentication.web.app/"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>

						<h1>Result Table</h1>

						<ResultTable></ResultTable>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};

export default MFAAuthentication;
