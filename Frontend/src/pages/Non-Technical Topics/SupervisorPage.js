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
import SupervisorHero from "components/hero/SupervisorHero";

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

const SupervisorPage = () => {
	const { user } = useAuthContext();

	return (
		<AnimationRevealPage>
			<SupervisorHero></SupervisorHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>{user && <Heading>{user.Email}</Heading>}</HeadingRow>
					<Text>
						<h1>Leaderboard </h1>
						<p>Get to know your Employees Score for their Quiz</p>
						<ResultTable></ResultTable>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};

export default SupervisorPage;
