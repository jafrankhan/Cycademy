import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
	LogoLink as LogoLinkBase,
	NavLinks,
	NavLink as NavLinkBase,
	PrimaryLink as PrimaryLinkBase,
} from "../../headers/light.js";
import {
	Container as ContainerBase,
	ContentWithVerticalPadding,
	Content2Xl,
} from "components/misc/Layouts.js";

import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light.png";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import styled from "styled-components";
import cycaLogo from "../../../../src/cycaImages/cycademylogo.png";
import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin.js";
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(
	NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
	PrimaryLinkBase
)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
	SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(
	SectionDescription
)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(
	PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`;
const LogoutPage = `/components/innerPages/LogutSuccesfully`;
const size = {
	height: 105,
	width: 105,
};

export default ({
	heading = "Welcome " + <Heading>userName here</Heading>,
	description = "Welcome to Cyacademy, the free e-learning platform designed specifically for small to medium businesses to  have a comprehensive understanding of cybersecurity.",
	primaryButtonText = "Let's start learning about Technical Topics",
	primaryButtonUrl = "/components/innerPages/TechnicalTopics",

	imageSrc = serverIllustrationImageSrc,
}) => {
	const logoLink = (
		<LogoLink href="https://cycademy-b1095.web.app/">
			<img src={cycaLogo} />
		</LogoLink>
	);

	const navLinks = [
		<NavLinks key={1}>
			<NavLink href="/">Home</NavLink>
			<NavLink href="/components/innerPages/AboutUsPage">About</NavLink>
			<NavLink href="/components/innerPages/TechnicalTopics">
				Technical Topics
			</NavLink>
			<NavLink href="/components/innerPages/ContactUsPage">Contact</NavLink>
			<PrimaryLink href="/components/innerPages/LoginPage">Log in </PrimaryLink>
			<PrimaryLink href="/components/innerPages/SignupPage">
				{" "}
				Sign Up
			</PrimaryLink>
		</NavLinks>,
	];

	return (
		<PrimaryBackgroundContainer>
			<Content2Xl>
				<Header logoLink={logoLink} links={navLinks} />
				<Container>
					<ContentWithVerticalPadding>
						<Row>
							<TextColumn>
								<Heading>{heading}</Heading>
								<Description>{description}</Description>
								<PrimaryButton
									as="a"
									href={`/components/innerPages/TechnicalTopics`}
								>
									{primaryButtonText}
								</PrimaryButton>
							</TextColumn>
							<IllustrationColumn>
								<Image styles={size} src={imageSrc} />
							</IllustrationColumn>
						</Row>
					</ContentWithVerticalPadding>
				</Container>
			</Content2Xl>
		</PrimaryBackgroundContainer>
	);
};
