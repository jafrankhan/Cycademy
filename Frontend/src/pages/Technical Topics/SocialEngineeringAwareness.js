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
import SocialEngineeringHero from "components/hero/Technical/SocialEngineeringHero";
const IndentDiv = tw.div`pl-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

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
			<SocialEngineeringHero></SocialEngineeringHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>Recognizing Socially Engineered Messages</Heading>
					</HeadingRow>
					<p>Last updated: 13th June 2023</p>
					<Text>
						<h1>Social Engineering Awareness for Technical Users</h1>
						<p>
							Social engineering refers to the deception strategies used by
							cybercriminals to mislead people into disclosing sensitive
							information or executing specific tasks. These deceptive methods
							frequently entail the fabrication of seemingly valid messages that
							appear to come from a reliable source. This could include
							coworkers, authoritative figures, or departments within a company.
							These messages are intended to elicit behaviors like as clicking
							on an attachment, visiting a specific website, or revealing
							sensitive information.
							<br></br>
							<br></br>
							These malicious actors structure their messages to appear
							professional, often instilling an impression of urgency or
							aligning them with the recipient's interests. Such measures
							increase the likelihood of the recipient falling into the trap and
							obeying the manipulative commands greatly. It is critical for
							people with technical expertise to grasp these tactics and take
							precautions against such cybersecurity dangers.
						</p>
						<h1>Who do socially engineered messages target?</h1>
						<p>
							Although anyone can receive socially engineered messages,
							malicious actors frequently prioritize targeting particular users
							because of their profile, access to sensitive information, ability
							to change system settings, authority to carry out risky business
							activities (like transferring large sums of money), or their job's
							requirement to frequently interact with strangers. In general,
							this can consist of:
							<br></br>
							<br></br>
							<ul>
								<li>high profile individuals</li>
								<li>senior managers and their staff</li>
								<li>system administrators</li>
								<li>
									staff members from human resources, sales, marketing, finance
									and legal areas.
								</li>
							</ul>
							<br></br>
							It is important to stress that other users shouldn't assume they
							are protected from socially engineered messaging. In the hopes
							that at least one message will be read and read back, malicious
							actors may message as many users as possible.
						</p>
						<h1> Social Engineering Attacks </h1>
						<p>
							Each of these strategies makes use of deceit and manipulation to
							persuade people to unintentionally compromise their own security
							or the security of their organization. The first step in defending
							against social engineering attacks is being aware of these
							techniques.
						</p>
						<IndentDiv>
							<TwoColumn>
								<LeftColumn>
									<IllustrationContainer>
										<img src="https://imgur.com/zzkHWfD.png" alt="Phishing" />
									</IllustrationContainer>
									<h2>Phishing Emails and Links</h2>
									<p>
										Be cautious when opening emails or clicking on links,
										especially from unknown sources. Phishing emails often
										appear genuine and may contain malicious links that can lead
										to malware infections or credential theft.
										<br></br>
										<br></br>
										The main tools in a cybercriminal's toolbox are phishing
										emails and URLs. These trick emails are made to look like
										real correspondence and frequently arouse curiosity or a
										sense of urgency. Embedded links are frequently used to urge
										recipients to click, which increases the risk of malware
										infections or redirects to phony websites intended for
										credential theft. Be very cautious when opening emails from
										sources you don't know. Even messages that appear to be
										familiar should be checked for strange content, sudden
										urgency, or grammatical mistakes. Before connecting with the
										content, always check the source, and stay away from sending
										important information over these channels.
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img
											src="https://imgur.com/9QIEIYL.png"
											alt="Suspicious Attachment"
										/>
									</IllustrationContainer>
									<h2>Suspicious Attachments</h2>
									<p>
										Exercise caution when opening email attachments, even if
										they seem to come from familiar sources. Malicious
										attachments can contain ransomware or other malware that can
										compromise your system.
										<br></br>
										<br></br>
										Malicious software, such as ransomware and other varieties
										of malware, is frequently distributed using email
										attachments. These attachments can appear to come from
										well-known contacts, but if opened, they represent a serious
										threat to system security. Always use extreme caution when
										opening email attachments, especially if they arrive
										unexpectedly or if anything about the email's content seems
										strange. Before opening an attachment, get in touch with the
										sender immediately through a recognized, reliable
										communication channel if you have any doubts about its
										validity. You can avoid unintentional system compromise and
										preserve your online security in this way.
									</p>
								</RightColumn>
							</TwoColumn>
							<TwoColumn>
								<LeftColumn>
									<IllustrationContainer>
										<img src="https://imgur.com/g328Fea.png" alt="Spoofing" />
									</IllustrationContainer>
									<h2>Caller ID Spoofing</h2>
									<p>
										Be wary of phone calls from unknown or unexpected sources,
										even if the caller ID appears legitimate. Caller ID spoofing
										is a common social engineering technique used to deceive
										users into providing sensitive information over the phone.
										<br></br>
										<br></br>
										Cybercriminals frequently use caller ID spoofing, a form of
										social engineering, to make it appear as though the call is
										coming from a reliable source. The goal is to manipulate the
										victim into divulging private information over the phone by
										taking advantage of their trust in that organization. This
										strategy takes advantage of the authority that comes with
										familiar phone numbers and can successfully imitate calls
										from organizations like banks, law enforcement, or even
										internal divisions inside your own company. Irrespective of
										the caller ID, it is imperative to be wary of incoming
										calls. Prior to disclosing any critical information, confirm
										the caller's identity by hanging up and dialing a verified
										number.
									</p>
								</LeftColumn>
								<RightColumn>
									<IllustrationContainer>
										<img
											src="https://imgur.com/Jt7DLve.png"
											alt="Authority Impersonation"
										/>
									</IllustrationContainer>
									<br></br>
									<h2>Authority Impersonation</h2>
									<p>
										Cybercriminals may impersonate authority figures, such as IT
										administrators or company executives, to gain access to
										sensitive information or convince users to take certain
										actions. Always verify requests for sensitive data or
										actions with proper channels.
										<br></br>
										<br></br>
										Cybercriminals pose as people in positions of authority,
										such as IT administrators or business executives, using the
										effective social engineering approach known as authority
										impersonation. The intention is to take advantage of the
										natural respect and trust that come with these
										responsibilities in order to persuade users to reveal
										sensitive information or take actions that could jeopardize
										security. Such impersonations may take place via email,
										phone calls, or even in-person. It's crucial to proceed
										cautiously when receiving unauthorized requests for private
										information or strange behavior. To protect your personal
										and organizational security, always confirm such requests
										through separate, established communication channels or by
										speaking with a superior or colleague.
									</p>
								</RightColumn>
							</TwoColumn>

							<h2>USB Baiting</h2>
							<p>
								Be cautious of finding USB drives or other storage devices lying
								around, as they may be intentionally placed to bait unsuspecting
								users. Plugging in such devices can lead to malware infections
								or unauthorized access to your system.
								<br></br>
								<br></br>
								By hiding malware-infected USB drives or other storage devices
								in places where potential victims are likely to find them,
								fraudsters practice a technique known as USB baiting. People may
								plug these devices into their computers out of curiosity or out
								of apparent luck from finding a "free" storage device. But doing
								so can bring in malware attacks or unapproved system access.
								Always use utmost caution while handling discarded storage
								devices. Report or turn them over to your IT department rather
								than using them. It's critical to keep in mind that in
								cybersecurity, caution is always preferred above curiosity.
							</p>
							<h2>Social Media Caution</h2>
							<p>
								Be mindful of the information you share on social media
								platforms. Cybercriminals often use publicly available
								information to craft convincing social engineering attacks.
								<br></br>
								<br></br>
								Social media has potential to be both a blessing and a curse in
								the field of cybersecurity. These platforms help people interact
								and share information, but they can also provide thieves access
								to a wealth of openly available data. Using this information,
								one can create convincing, individualized social engineering
								assaults, commonly referred to as "spear phishing." Your job,
								hobbies, and social network are all examples of information that
								might be utilized to pose as friends or create plausible stories
								to persuade you into disclosing private information or taking
								dangerous activities. Always use caution when sharing
								information online, and limit public access to your profile by
								adjusting your privacy settings.
							</p>
						</IndentDiv>
						<h1>How should we respond to socially engineered messages?</h1>
						<p>
							Socially designed communications must be identified and handled
							with knowledge and caution. Such mails can be identified by their
							unusual urgency, strange sender addresses, generic greetings,
							spelling mistakes, and requests for private information. Avoid
							clicking on any dubious links or attachments, and prevent from
							giving out any personal or sensitive information.
							<br></br>
							<br></br>
							Even if it seems to be coming from a known person or group, if a
							message seems suspect, independently confirm its legitimacy by
							getting in touch with the purported sender via a reliable
							communication channel. To assist safeguard other employees in your
							firm, report any socially engineered messages to your IT or
							security division.
							<br></br>
							<br></br>
							Staying ahead of new threats requires keeping up-to-date knowledge
							of social engineering techniques and regular participation in
							cybersecurity awareness training. Additionally, maintaining your
							devices with the most recent security software, such as spam
							filters and anti-virus applications, adds an essential layer of
							protection against many socially engineered assaults. An informed,
							proactive user is the best defense against these dangers.
						</p>
						<h1>Moving Forward</h1>
						<p>
							As technical users, understanding the tactics used in social
							engineering attacks is crucial to maintaining a strong defense
							against cyber threats. Stay vigilant, question suspicious
							communications, and follow established protocols for verifying
							requests or information. Regular security awareness training and a
							security-first mindset are essential for protecting yourself and
							your organization from social engineering attacks.
						</p>

						<h1>Quiz</h1>
						<iframe
							src="https://quizsocialengineer.onrender.com/"
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
							src="https://rmsocialengineeringawareness.web.app"
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
