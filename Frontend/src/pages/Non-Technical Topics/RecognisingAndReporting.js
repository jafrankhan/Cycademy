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

import ImgOne from "../../images/demo/RecogniseScam1.png";
import ImgTwo from "../../images/demo/RecogniseScam2.png";
import ImgThree from "../../images/demo/RecogniseScam3.png";
import ImgFour from "../../images/demo/RecogniseScam4.png";
import ImgFive from "../../images/demo/RecogniseScam5.png";
import RecognisingScams from "components/hero/RecognisingScams";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Subheading = tw(
	SectionHeading
)`relative font-black text-3xl md:text-5xl leading-snug max-w-3xl text-left`;

const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Paragraph = tw.p`my-5 lg:my-8 text-3xl lg:text-base font-medium text-gray-600 mx-auto lg:mx-0`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
	${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const Text = styled.div`
	${tw`text-xl text-gray-800`}
	p {
		${tw`mt-2 leading-loose ml-8`}
		bg-yellow-300
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8 ml-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6 ml-8`}
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
export default ({
	headingText = "Recognising and Reporting Scams",
	heading1 = "Authority",
	heading2 = "Urgency and Fear Tactics",
	heading3 = "Emotion",
	heading4 = "Scarcity",
	heading5 = "Current events",
	subheader1 = "Is the message claiming to be from someone official? ",
	subheader2 = "Are you told you have a limited time to respond? ",
	subheader3 = "Does the message make you panic, fearful, hopeful or curious?",
	subheader4 = "Is the message offering something that seems too good to be true?",
	subheader5 = "Are you expecting to see a message like this?",
	description1 = "Like your bank, a government agency, a utility company, a doctor, or a lawyer. Criminals pose as influential individuals or institutions to manipulate you into doing what they want. ",
	description2 = "For example, 'within 24 hours' or 'immediately'. Criminals often threaten you with fines or other negative consequences.",
	description3 = "Scammers use threatening language, make false claims of support, or tease you into wanting to find out more.",
	description4 = "Like concert tickets, money or a cure for medical conditions? Fear of missing out on a good deal or opportunity can make you respond quickly.",
	description5 = "To make their scam seem more real, criminals can exploit current news stories and events. For example, some scammers pretend to be from the tax office at tax time to make their scam seem more relevant.",
	imageSrcOne = ImgOne,
	imageSrcTwo = ImgTwo,
	imageSrcThree = ImgThree,
	imageSrcFour = ImgFour,
	imageSrcFive = ImgFive,
	imageCss = null,
	imageDecoratorBlob = false,
}) => {
	return (
		<AnimationRevealPage>
			<RecognisingScams></RecognisingScams>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						Last updated: 13th June 2023
						<p>
							Scammers are constantly devising new tactics to deceive
							individuals and steal their personal information or money. Being
							able to recognize and report scams is crucial for safeguarding
							yourself and others from falling victim to fraudulent schemes.
							Here are some essential tips to spot and report scams:
						</p>
						<h2>Types of Scams</h2>
						<p>
							Scams can come in various forms, including phishing emails, fake
							websites, phone calls from imposters, investment schemes, lottery
							scams, and more. Stay informed about the latest scam trends to
							better protect yourself.
							<br></br>
							<br></br>
							Scammers will try to gain access to your devices or personal
							information through the various methods:
							<ul>
								<li>Phishing</li>
								<li>Malware</li>
								<li>Ransomware</li>
								<li>Spear Phishing</li>
								<li>Remote Access</li>
								<li>Hacking</li>
							</ul>
						</p>
						<h2>Verify the Source</h2>
						<p>
							Before sharing any personal information or money, verify the
							identity of the individual or organization contacting you.
							Legitimate entities will not mind you double-checking their
							credentials.
						</p>
						<h2>Use Strong Passwords</h2>
						<p>
							As mentioned earlier, utilize strong and unique passwords for
							different accounts. This practice prevents scammers from accessing
							multiple accounts if one of your passwords is compromised.
						</p>
						<h2>Common things scammers do to trick you </h2>
						{/* First point */}
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcOne} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading1}</Subheading>
								<Paragraph>{subheader1}</Paragraph>
								<Paragraph>{description1}</Paragraph>
							</RightColumn>
						</TwoColumn>
						{/* Second point */}
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcTwo} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading2}</Subheading>
								<Paragraph>{subheader2}</Paragraph>
								<Paragraph>{description2}</Paragraph>
							</RightColumn>
						</TwoColumn>
						{/* Third point */}
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcThree} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading3}</Subheading>
								<Paragraph>{subheader3}</Paragraph>
								<Paragraph>{description3}</Paragraph>
							</RightColumn>
						</TwoColumn>
						{/* Fourth point */}
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcFour} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading4}</Subheading>
								<Paragraph>{subheader4}</Paragraph>
								<Paragraph>{description4}</Paragraph>
							</RightColumn>
						</TwoColumn>
						{/* Fifth point */}
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcFive} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading5}</Subheading>
								<Paragraph>{subheader5}</Paragraph>
								<Paragraph>{description5}</Paragraph>
							</RightColumn>
						</TwoColumn>
						<h2>Report Suspected Scams</h2>
						<p>
							If you encounter a potential scam, report it immediately to the
							appropriate authorities. You can contact your local law
							enforcement agency or utilize online platforms provided by
							consumer protection agencies to report the incident.
						</p>
						<h2>Stay Informed</h2>
						<p>
							Regularly stay informed about the latest scams and fraud alerts
							issued by reputable sources. Organizations like the Federal Trade
							Commission (FTC) and the Internet Crime Complaint Center (IC3)
							provide up-to-date information on scams and how to avoid them.
						</p>
						<h2>Protect Others</h2>
						<p>
							If you come across a scam, warn your friends, family, and
							colleagues about it. By sharing information, you help protect
							others from falling prey to similar fraudulent schemes.
						</p>
						<h1>Moving Forward</h1>
						<p>
							Recognizing and reporting scams is an essential aspect of personal
							cybersecurity. By staying vigilant and educated about potential
							threats, we can create a safer digital environment for everyone.
							Remember, never hesitate to report suspicious activities to
							protect yourself and others from falling victim to scams.
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
						<div></div>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
