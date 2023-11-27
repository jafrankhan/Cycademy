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

import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";
import ImgOne from "../../images/demo/Passphrases1.png";
import ImgTwo from "../../images/demo/Passphrases2.png";
import ImgThree from "../../images/demo/Passphrases3.png";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";

const HeadingRow = tw.div`flex`;
const Heading = tw(
	SectionHeading
)`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Subheading = tw(
	SectionHeading
)`font-black text-3xl md:text-5xl leading-snug max-w-3xl text-center`;

const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Paragraph = tw.p`my-5 lg:my-8 text-xl lg:text-base font-medium text-gray-600 mx-auto lg:mx-0 text-center`;
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
	headingText = "Setting Passphrases",
	heading1 = "Make it Long",
	description1 = "The longer the better. Aim for at least 14 characters long. Four or more random words that you will remember is great. An example: 'purple duck potato boat' ",
	heading2 = "Make it Unpredictable",
	description2 = "The less predictable your passphrase, the better! A good passphrase is made up of four or more random words. Use a mixture of random words will make it far more unpredictable and makes stronger passphrases.",
	heading3 = "Make it Unique",
	description3 = "Do not recycle passphrases! Use different passphrases for different accounts. Your social media password should not be the same as your email password.",
	imageSrcOne = ImgOne,
	imageSrcTwo = ImgTwo,
	imageSrcThree = ImgThree,
	imageCss = null,
	imageDecoratorBlob = false,
}) => {
	return (
		<AnimationRevealPage>
			<SettingParaphrasesComp></SettingParaphrasesComp>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						Last updated: 13th June 2023
						<h1>Before Setting up a passphrase </h1>
						<p>
							Using MFA or Multi-Factor-Authentication (such as something you
							know, something you have, or something you are) is a great way to
							keep your accounts safe from unauthorized access. But if you can't
							use multi-factor authentication, having a strong passphrase is the
							best way to protect yourself. Passphrases work best when they are
							long, unpredictable and unique. You may generate stronger
							passphrases by following to this principles and avoiding common
							flaws that adversaries take advantage of.
						</p>
						<h1>When choosing your passphrase</h1>
						<h2>Principles for strong passphrases</h2>
						<p>
							Use a passphrase whenever possible in place of a password. You
							will be able to generate the most secure passphrases by adhering
							to as many of the principles as you can.
						</p>
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcOne} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
								<Subheading>{heading1}</Subheading>
								<Paragraph>{description1}</Paragraph>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading2}</Subheading>
								<Paragraph>{description2}</Paragraph>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcTwo} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</RightColumn>
						</TwoColumn>
						<TwoColumn>
							<LeftColumn>
								<IllustrationContainer>
									<img css={imageCss} src={imageSrcThree} alt="Hero" />
									{imageDecoratorBlob && <DecoratorBlob2 />}
								</IllustrationContainer>
							</LeftColumn>
							<RightColumn>
								<Subheading>{heading3}</Subheading>
								<Paragraph>{description3}</Paragraph>
							</RightColumn>
						</TwoColumn>
						<h2>Protect your passphrases</h2>
						<h3>Secure your passphrases</h3>
						<p>
							Passphrases can be stored in password managers. It encourages good
							cybersecurity habits. It may seem burdensome to have a different
							passphrase for each valuable account, but using a password manager
							to store your passphrases will save you of the pressure of
							remembering which passphrase goes where.
							<br></br>
							<br></br>
							Many web browsers come with an integrated password manager. When
							entering into accounts, you could have seen a pop-up box asking
							you to save your password. Although quality and security can vary,
							password managers are also available for purchase separately.
							<br></br>
							<br></br>
							When using a password manager:
							<ul>
								<li>
									conduct research to ensure the password manager is from a
									reputable vendor
								</li>
								<li>
									conduct research to ensure the password manager is maintained
									by the vendor with regular security updates
								</li>
								<li>
									protect the password manager with its own strong and memorable
									passphrase.
								</li>
							</ul>
						</p>
						<br></br>
						<h3>Protect what protects you</h3>
						<p>
							To prevent identity theft, carefully handle and save your
							passphrases. Do not share your passphrases with anyone and be
							aware of your surroundings when using them in public. When logging
							into sensitive accounts, only use secure Wi-Fi, secure
							telecommunications networks, or a Virtual Private Network (VPN).
							Free public Wi-Fi, without the use of a VPN, can potentially
							expose your browsing activity. When you're done using an account,
							log off and sign out of it.
						</p>
						<h1>Moving Forward</h1>
						<p>
							Using a passphrase is important for ensuring the security of our
							accounts and sensitive information. By employing four or more
							random words instead of predictable sentences, we can create
							stronger and more unpredictable passphrases. This significantly
							enhances our defense against unauthorized access, especially when
							multi-factor authentication is not available. Embracing the use of
							passphrases serves as a vital safeguard in today's digital
							landscape, where protecting our personal and online identities is
							crucial.
						</p>
						<h1>Quiz</h1>
						<iframe
							src="https://quizpassphrases.onrender.com/"
							title="Embedded Website"
							width="100%"
							height="700"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>
						<div>
							<iframe
								src="https://runningman-ff928.web.app/"
								title="Embedded Website"
								width="100%"
								height="700"
								style={{ border: "none" }} // Optional: Remove iframe border
							/>
						</div>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
