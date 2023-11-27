import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/LandingHeros/LandingPageHero.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import NonTechnicalTopics from "pages/NonTechnicalTopics";
import NonTechnicalPageHero from "components/hero/LandingHeros/NonTechnicalPageHero";
export default () => {
	return (
		<AnimationRevealPage>
			<NonTechnicalPageHero></NonTechnicalPageHero>
			<Features />
			<TwoColSingleFeatureWithStats />
			<MainFeature
				subheading="Bite-Sized Content"
				heading="Learn More in an Engaging Way"
				description="Immerse yourself in a world of knowledge with short, engaging lessons designed specifically for busy individuals like you.
				With our bite-sized content, you'll unlock the secrets of various topics effortlessly, one step at a time. Join us and embark on an exciting journey where learning is not only educational but also enjoyable!"
				imageSrc={serverSecureIllustrationImageSrc}
				buttonRounded={false}
				textOnLeft={false}
			/>

			<MainFeature
				subheading="Accessibility"
				heading="Learn Anywhere, Anytime"
				description="Whether you're at home, in the office, or traveling, our website is your virtual classroom at your fingertips. Stay ahead of the curve and empower yourself with the flexibility to master new concepts at your own convenience."
				imageSrc={serverRedundancyIllustrationImageSrc}
				buttonRounded={false}
			/>
			<FAQ />
			<Footer />
		</AnimationRevealPage>
	);
};
