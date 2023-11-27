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
import { useAuthContext } from "hooks/useAuthContext.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import logoImageSrc from "images/logo-light.png";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import styled from "styled-components";
import cycaLogo from "../../../cycaImages/cycademylogo.png";
import { useState } from "react";
import { useLogin } from "hooks/useLogin.js";
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

const Image = tw.img`w-144 ml-auto`;
const LogoutPage = `/components/innerPages/LogutSuccesfully`;
const size = {
	height: 105,
	width: 105,
};

export default ({
	heading = "Empowering Businesses Through Cybersecurity Education",
	description = "Welcome to Cyacademy, the free e-learning platform designed specifically for small to medium businesses to  have a comprehensive understanding of cybersecurity.",

	imageSrc = serverIllustrationImageSrc,
}) => {
	const logoLink = (
		<LogoLink href="/">
			<img src={cycaLogo} />
		</LogoLink>
	);

	const { dispatch } = useAuthContext();

	const isLoggedIn = !!localStorage.getItem("user");
	const handleLogout = () => {
		// Remove user data from local storage
		localStorage.removeItem("user");

		// Update auth context to indicate that the user is logged out
		dispatch({ type: "LOGOUT" });
	};

	const handleLogoutClick = () => {
		handleLogout();
		<Link href={LogoutPage}> </Link>;
	};

	const navLinks =
		// Define the navLinks variable with your navigation links
		[
			<NavLinks key={1}>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/components/innerPages/AboutUsPage">About</NavLink>
				{/* 
				I will be removing the Blog
				 here since we shall not make that the Technical Page/ Non- Technical Page Appear here */}
				<NavLink href="/components/innerPages/ContactUsPage">Contact</NavLink>
				{isLoggedIn ? (
					<PrimaryLink onClick={handleLogoutClick}>Log out</PrimaryLink>
				) : (
					<>
						<PrimaryLink href="/login">Log in</PrimaryLink>
					</>
				)}
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
