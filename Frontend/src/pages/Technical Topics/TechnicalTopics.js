import React, { useState, link } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { components } from "ComponentRenderer";
import TechnicalHeader from "components/headers/TechnicalHeader";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
	${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
	${(props) =>
		props.featured &&
		css`
			${tw`w-full!`}
			${Post} {
				${tw`sm:flex-row! h-full sm:pr-4`}
			}
			${Image} {
				${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
			}
			${Info} {
				${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
			}
			${Description} {
				${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
			}
		`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
	${(props) =>
		css`
			background-image: url("${props.imageSrc}");
		`}
	${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
	headingText = "Technical Topics",
	text = "Welcome",

	posts = [
		{
			imageSrc: "https://source.unsplash.com/cAuANa0VvGw",

			title:
				"Technical Topics: Cybersecurity 101: Understanding Threats and Protecting Yourself Online",
			description:
				"In today's digital age, the prevalence of cyberattacks is on the rise. This introductory page aims to equip you with essential knowledge about different cyberthreats and empower you to safeguard yourself, your workplace, and your colleagues. Learn practical tips and best practices to fortify your online presence and ensure a safer digital experience for everyone.",
			featured: true,
		},

		secureCodingPractices(),
		SocialEngineeringAwareness(),
		SecurityIncidentResponse(),
		CloudSecurity(),
		EncryptionCryptography(),
		networkSecurity(),
		PenetrationTesting(),
		WebApplicationSecurity(),
	],
}) => {
	const [visible, setVisible] = useState(7);
	const onLoadMoreClick = () => {
		setVisible((v) => v + 6);
	};
	return (
		<AnimationRevealPage>
			<TechnicalHeader></TechnicalHeader>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Posts>
						{posts.slice(0, visible).map((post, index) => (
							<PostContainer key={index} featured={post.featured}>
								<Post className="group" as="a" href={post.url}>
									<Image imageSrc={post.imageSrc} />
									<Info>
										<Category>{post.category}</Category>
										<CreationDate>{post.date}</CreationDate>
										<Title>{post.title}</Title>
										{post.featured && post.description && (
											<Description>{post.description}</Description>
										)}
									</Info>
								</Post>
							</PostContainer>
						))}
					</Posts>
					{visible < posts.length && (
						<ButtonContainer>
							<LoadMoreButton onClick={onLoadMoreClick}>
								Load More
							</LoadMoreButton>
						</ButtonContainer>
					)}
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};

const CloudSecurity = () => ({
	imageSrc: "https://imgur.com/XBJCVBw.png",
	category: "CloudSecurity",
	date: "13 June 2023",
	title: " What is Cloud Security?",
	description:
		"Discover what is Cloud Security and how you can protect the cloud!",
	url: "/components/innerPages/CloudSecurity",
});

const EncryptionCryptography = () => ({
	imageSrc: "https://imgur.com/fs0gBKt.png",
	category: "Encryption",
	date: "13 June 2023",
	title: "Encryption and Cryptography?",
	description: "Discover more on what is Encryption and Cryptography!",
	url: "/components/innerPages/EncryptionCryptography",
});

const networkSecurity = () => ({
	imageSrc: "https://imgur.com/0E75tyG.png",
	category: "Network Security",
	date: "13 June 2023",
	title: "Network Security",
	description: "Diving deeper into Network Security",
	url: "/components/innerPages/networkSecurity",
});

const PenetrationTesting = () => ({
	imageSrc: "https://imgur.com/MxMADqi.png",
	category: "Penetration Testing",
	date: "13 June 2023",
	title: "Penetration Testing",
	description: "Diving deeper into Penetration Testing",
	url: "/components/innerPages/PenetrationTesting",
});

const secureCodingPractices = () => ({
	imageSrc: "https://imgur.com/eJ2sWwG.png",
	category: "SecureCodingPractices",
	date: "13 June 2023",
	title: "Secure Coding Practices",
	description: "Looking into Secure Coding Practices",
	url: "/components/innerPages/SecureCodingPractices",
});

const SecurityIncidentResponse = () => ({
	imageSrc: "https://imgur.com/WGUweaT.png",
	category: "Security Incident Response",
	date: "13 June 2023",
	title: "Security Incident Response",
	description: "Looking into Security Incident Response",
	url: "/components/innerPages/SecurityIncidentResponse",
});

const SocialEngineeringAwareness = () => ({
	imageSrc: "https://imgur.com/jcmYmYy.png",
	category: "Social Engineering",
	date: "13 June 2023",
	title: "Social Engineering Awareness",
	description: "Looking into Social Engineering Awareness",
	url: "/components/innerPages/SocialEngineeringAwareness",
});

const WebApplicationSecurity = () => ({
	imageSrc: "https://imgur.com/dyvpOE9.png",
	category: "Web Application Security",
	date: "13 June 2023",
	title: "Web Application Security",
	description: "Looking into Web Application Security",
	url: "/components/innerPages/WebApplicationSecurity",
});
