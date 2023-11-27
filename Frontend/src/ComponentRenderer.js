import React from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
import HostingCloudLandingPageImageSrc from "images/demo/HostingCloudLandingPage.jpeg";
import HostingCloudLandingPage from "pages/HostingCloudLandingPage.js";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";

import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import NonTechnicalTopics from "pages/NonTechnicalTopics.js";
import ContentPage from "pages/Contentpage.js";

import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";
import ContentPageImageSrc from "images/demo/ContentPage.jpg";

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "components/hero/LandingHeros/LandingPageHero.js";

import TwoPlansWithDurationSwitcherPricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "components/pricing/ThreePlans.js";

import ThreeColWithSideImageFeatures from "components/features/ThreeColWithSideImage.js";
import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "components/cards/ThreeColSlider.js";
import TrendingCards from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js";
import ThreeColContactDetailsCards from "components/cards/ThreeColContactDetails.js";

import ThreeColSimpleWithImageBlog from "components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "components/testimonials/SimplePrimaryBackground.js";

import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";
import SingleColFAQS from "components/faqs/SingleCol.js";
import TwoColumnPrimaryBackgroundFAQS from "components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

import SimpleFiveColumnFooter from "components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "components/footers/FiveColumnDark.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";
import RansomwarePage from "pages/Non-Technical Topics/RansomwarePage";
import SettingPassphrases from "pages/Non-Technical Topics/SettingPassphrases";
import ProtectingBusinessEmployee from "pages/Non-Technical Topics/ProtectingBusinessEmployee";

import MFAAuthentication from "pages/Non-Technical Topics/MFAAuthentication";

import CloudSecurity from "pages/Technical Topics/CloudSecurity";
import EncryptionCryptography from "pages/Technical Topics/EncryptionCryptography";
import networkSecurity from "pages/Technical Topics/networkSecurity";
import PenetrationTesting from "pages/Technical Topics/PenetrationTesting";
import secureCodingPractices from "pages/Technical Topics/secureCodingPractices";
import SecurityIncidentResponse from "pages/Technical Topics/SecurityIncidentResponse";
import SocialEngineeringAwareness from "pages/Technical Topics/SocialEngineeringAwareness";
import WebApplicationSecurity from "pages/Technical Topics/WebApplicationSecurity";
import LogOutSuccessfully from "pages/LogOutSuccessfully";
import TechnicalLandingPage from "pages/Landing Pages/TechnicalLandingPage";
import NonTechnicalLandingPage from "pages/Landing Pages/NonTechnicalLandingPage";
import LandingPageHero from "components/hero/LandingHeros/LandingPageHero.js";
import TechnicalTopics from "pages/Technical Topics/TechnicalTopics";
import NonTechnicalPageHero from "components/hero/LandingHeros/NonTechnicalPageHero";
import TechnicalPageHero from "components/hero/LandingHeros/TechnicalPageHero";
import TechnicalHeader from "components/headers/TechnicalHeader";
import NonTechnicalHeader from "components/headers/Non_TechnicalHeader";
import Phishing from "pages/Non-Technical Topics/Phishing";
import RecognisingAndReporting from "pages/Non-Technical Topics/RecognisingAndReporting";
import SupervisorHero from "components/hero/SupervisorHero";
import SupervisorPage from "pages/Non-Technical Topics/SupervisorPage";
export const components = {
	landingPages: {
		HostingCloudLandingPage: {
			component: HostingCloudLandingPage,
			imageSrc: HostingCloudLandingPageImageSrc,
			url: "/components/landingPages/HostingCloudLandingPage",
		},
		TechnicalLandingPage: {
			component: TechnicalLandingPage,
			imageSrc: HostingCloudLandingPageImageSrc,
			url: "/components/landingPages/TechnicalLandingPage",
		},
		NonTechnicalLandingPage: {
			component: NonTechnicalLandingPage,
			imageSrc: HostingCloudLandingPageImageSrc,
			url: "/components/landingPages/NonTechnicalLandingPage",
		},
	},

	innerPages: {
		LoginPage: {
			component: LoginPage,
			imageSrc: LoginPageImageSrc,
			scrollAnimationDisabled: true,
			url: "/components/innerPages/LoginPage",
		},
		SignupPage: {
			component: SignupPage,
			url: `/components/innerPages/SignupPage`,
			imageSrc: SignupPageImageSrc,
			scrollAnimationDisabled: true,
		},
		AboutUsPage: {
			component: AboutUsPage,
			url: `/components/innerPages/AboutUsPage`,
			imageSrc: AboutUsPageImageSrc,
		},
		ContactUsPage: {
			component: ContactUsPage,
			url: `/components/innerPages/ContactUsPage`,
			imageSrc: ContactUsPageImageSrc,
		},
		NonTechnicalTopics: {
			component: NonTechnicalTopics,
			url: `/components/innerPages/NonTechnicalTopics`,
			imageSrc: BlogIndexPageImageSrc,
		},

		SettingPassphrases: {
			component: SettingPassphrases,
			url: `/components/innerPages/SettingPassPhrases`,
			imageSrc: BlogIndexPageImageSrc,
		},
		RansomwarePage: {
			component: RansomwarePage,
			url: `/components/innerPages/:topicName`,
			imageSrc: TermsOfServicePageImageSrc,
		},
		ProtectingBusinessEmployee: {
			component: ProtectingBusinessEmployee,
			url: `/components/innerPages/ProtectingBusinessEmployee`,
			imageSrc: TermsOfServicePageImageSrc,
		},
		ContentPage: {
			component: ContentPage,
			url: `/components/innerPages/ContentPage`,
			imageSrc: ContentPageImageSrc,
		},
		MFAAuthentication: {
			component: MFAAuthentication,
			url: `/components/innerPages/MFAAuthentication`,
			imageSrc: ContentPageImageSrc,
		},

		RecognisingAndReporting: {
			component: RecognisingAndReporting,
			url: `/components/innerPages/RecognisingAndReporting`,
			imageSrc: ContentPageImageSrc,
		},
		Phishing: {
			component: Phishing,
			url: `/components/innerPages/Phishing`,
			imageSrc: ContentPageImageSrc,
		},
		LogOutSuccessfully: {
			component: LogOutSuccessfully,
			url: `/components/innerPages/LogOutSuccessfully`,
			imageSrc: ContentPageImageSrc,
		},
		TechnicalTopics: {
			component: TechnicalTopics,
			url: `/components/innerPages/TechnicalTopics`,
			imageSrc: ContentPageImageSrc,
		},

		CloudSecurity: {
			component: CloudSecurity,
			url: `/components/innerPages/CloudSecurity`,
			imageSrc: ContentPageImageSrc,
		},
		EncryptionCryptography: {
			component: EncryptionCryptography,
			url: `/components/innerPages/EncryptionCryptography`,
			imageSrc: ContentPageImageSrc,
		},
		networkSecurity: {
			component: networkSecurity,
			url: `/components/innerPages/networkSecurity`,
			imageSrc: ContentPageImageSrc,
		},
		PenetrationTesting: {
			component: PenetrationTesting,
			url: `/components/innerPages/PenetrationTesting`,
			imageSrc: ContentPageImageSrc,
		},
		SecureCodingPractices: {
			component: secureCodingPractices,
			url: `/components/innerPages/secureCodingPractices`,
			imageSrc: ContentPageImageSrc,
		},
		SecurityIncidentResponse: {
			component: SecurityIncidentResponse,
			url: `/components/innerPages/SecurityIncidentResponse`,
			imageSrc: ContentPageImageSrc,
		},
		SocialEngineeringAwareness: {
			component: SocialEngineeringAwareness,
			url: `/components/innerPages/SocialEngineeringAwareness`,
			imageSrc: ContentPageImageSrc,
		},
		WebApplicationSecurity: {
			component: WebApplicationSecurity,
			url: `/components/innerPages/WebApplicationSecurity`,
			imageSrc: ContentPageImageSrc,
		},
		SupervisorPage: {
			component: SupervisorPage,
			url: `/components/innerPages/SupervisorPage`,
			imageSrc: ContentPageImageSrc,
		},
	},

	Quiz: {
		Hero: {},

		blocks: {
			Hero: {
				type: "Hero Section",
				elements: {
					BackgroundAsImage: {
						name: "With Background Image",
						component: BackgroundAsImageHero,
						url: "/components/blocks/Hero/BackgroundAsImage",
					},
					IllustrationAndInput: {
						name: "With Image Illustration and Input",
						component: IllustrationAndInputHero,
						url: "/components/blocks/Hero/IllustrationAndInput",
					},
					IllustrationAndVideo: {
						name: "With Image Illustration and Video",
						component: IllustrationAndVideoHero,
						url: "/components/blocks/Hero/IllustrationAndVideo",
					},
					FeaturesAndTestimonial: {
						name: "With Features And Customer Testimonial",
						component: FeaturesAndTestimonialHero,
						url: "/components/blocks/Hero/FeaturesAndTestimonial",
					},
					FullWidthWithImage: {
						name: "Full Width With Image",
						component: FullWidthWithImageHero,
						url: "/components/blocks/Hero/FullWidthWithImage",
					},
					BackgroundAsImageWithCenteredContent: {
						name: "Full Width Background Image with centered content",
						component: BackgroundAsImageWithCenteredContentHero,
						url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
					},
					IllustrationAndPrimaryBackground: {
						name: "Primary Background With Illustration",
						component: IllustrationAndPrimaryBackgroundHero,
						url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
					},
					NonTechnicalPageHero: {
						name: "Non Technical Hero",
						component: NonTechnicalPageHero,
						url: "components/blocks/Hero/NonTechnicalHero",
					},
					TechnicalPageHero: {
						name: "Technical Page Hero",
						component: TechnicalPageHero,
						url: "/components/blocks/Hero/TechnicalPageHero",
					},
					SupervisorHero: {
						name: "Supervisor Hero",
						component: SupervisorHero,
						url: "/components/blocks/Hero/SupervisorHero",
					},
				},
			},

			Header: {
				type: "Header Section",
				elements: {
					TechnicalHeader: {
						name: "Technical Header",
						component: TechnicalHeader,
						url: "/components/blocks/Header/TechnicalHeader",
					},
					NonTechnicalHeader: {
						name: "NonTechnicalHeader",
						component: NonTechnicalHeader,
						url: "/components/blocks/Header/NonTechnicalHeader",
					},
					ThreePlans: {
						name: "Simple Three Plans",
						component: ThreePlansPricing,
						url: "/components/blocks/Pricing/ThreePlans",
					},
				},
			},

			Pricing: {
				type: "Pricing Section",
				elements: {
					TwoPlansWithDurationSwitcher: {
						name: "Two Plans With Duration Switcher",
						component: TwoPlansWithDurationSwitcherPricing,
						url: "/components/blocks/Pricing/TwoPlansWithDurationSwitcher",
					},
					ThreePlansWithHalfPrimaryBackground: {
						name: "Three Plans With Primary Background at Top",
						component: ThreePlansWithHalfPrimaryBackgroundPricing,
						url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
					},
					ThreePlans: {
						name: "Simple Three Plans",
						component: ThreePlansPricing,
						url: "/components/blocks/Pricing/ThreePlans",
					},
				},
			},
			Features: {
				type: "Features Section",
				elements: {
					ThreeColWithSideImage: {
						name: "Three Column With Side Image",
						component: ThreeColWithSideImageFeatures,
						url: "/components/blocks/Features/ThreeColWithSideImage",
					},
					TwoColWithButton: {
						name: "Two Column With Image and Action Button",
						component: TwoColWithButtonFeatures,
						url: "/components/blocks/Features/TwoColWithButton",
					},
					ThreeColSimple: {
						name: "Three Column Simple",
						component: ThreeColSimpleFeatures,
						url: "/components/blocks/Features/ThreeColSimple",
					},
					ThreeColWithSideImageWithPrimaryBackground: {
						name: "Three Column With Side Image With Primary Background",
						component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
						url: "/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
					},
					TwoColHorizontalWithButton: {
						name: "Two Column With Button and Horizonatal Features with Icon",
						component: TwoColHorizontalWithButtonFeatures,
						url: "/components/blocks/Features/TwoColHorizontalWithButton",
					},
					TwoColVerticalWithButton: {
						name: "Two Column With Vertical Features and Button",
						component: TwoColVerticalWithButtonFeatures,
						url: "/components/blocks/Features/TwoColVerticalWithButton",
					},
					WithStepsAndImage: {
						name: "Steps with Image",
						component: WithStepsAndImageFeatures,
						url: "/components/blocks/Features/WithStepsAndImage",
					},
					ThreeColumnDashedBorder: {
						name: "Three Column With Dashed Primary Border",
						component: ThreeColumnDashedBorderFeatures,
						url: "/components/blocks/Features/ThreeColumnDashedBorder",
					},
					ThreeColCenteredStatsPrimaryBackground: {
						name: "Three Column With Centered Stats on Primary Background",
						component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
						url: "/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
					},
					WithStatsAndImage: {
						name: "Stats With Image",
						component: WithStatsAndImageFeatures,
						url: "/components/blocks/Features/WithStatsAndImage",
					},
					WithStatsAndImage2: {
						name: "Stats With Image 2",
						component: WithStatsAndImage2Features,
						url: "/components/blocks/Features/WithStatsAndImage2",
					},
					VerticalWithAlternateImageAndText: {
						name: "Vertical Feature Cards With Alternate Image and Text",
						component: VerticalWithAlternateImageAndTextFeatures,
						url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
					},
					LandingPageHero: {
						name: "Landing Page Hero",
						component: LandingPageHero,
						url: "/components/blocks/Features/LandingPageHero",
					},
				},
			},

			Cards: {
				type: "Cards",
				elements: {
					Slider: {
						name: "Three Column Slider",
						component: SliderCards,
						url: "/components/blocks/Cards/Slider",
					},
					Portfolio: {
						name: "Two Column Portfolio Cards With Images ",
						component: PortfolioCards,
						url: "/components/blocks/Cards/Portfolio",
					},
					TabGrid: {
						name: "Tab Card Grid With Tab Switcher",
						component: TabGridCards,
						url: "/components/blocks/Cards/TabGrid",
					},
					ProfileThreeColGrid: {
						name: "Three Column Grid Cards For Profile",
						component: ProfileThreeColGridCards,
						url: "/components/blocks/Cards/ProfileThreeColGrid",
					},
					ThreeColContactDetails: {
						name: "Three Column Contact Details Cards",
						component: ThreeColContactDetailsCards,
						url: "/components/blocks/Cards/ThreeColContactDetails",
					},
					Trending: {
						name: "Two Trending Preview Cards With Images",
						component: TrendingCards,
						url: "/components/blocks/Cards/Trending",
					},
				},
			},

			Blog: {
				type: "Blog Section",
				elements: {
					GridWithFeaturedPost: {
						name: "Grid With Featured Post",
						component: GridWithFeaturedPostBlog,
						url: "/components/blocks/Blog/GridWithFeaturedPost",
					},
					PopularAndRecentPosts: {
						name: "Popular And Recent Posts",
						component: PopularAndRecentPostsBlog,
						url: "/components/blocks/Blog/PopularAndRecentPosts",
					},
					ThreeColSimpleWithImage: {
						name: "Simple Three Column With Image",
						component: ThreeColSimpleWithImageBlog,
						url: "/components/blocks/Blog/ThreeColSimpleWithImage",
					},
					ThreeColSimpleWithImageAndDashedBorder: {
						name: "Simple Three Column With Image and Dashed Border",
						component: ThreeColSimpleWithImageAndDashedBorderBlog,
						url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
					},
				},
			},

			Testimonial: {
				type: "Testimonial Section",
				elements: {
					TwoColumnWithImage: {
						name: "Two Column With Image",
						component: TwoColumnWithImageTestimonial,
						url: "/components/blocks/Testimonial/TwoColumnWithImage",
					},
					TwoColumnWithImageAndProfilePictureReview: {
						name: "Two Column With Image And Profile Picture Review",
						component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
						url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
					},
					TwoColumnWithImageAndRating: {
						name: "Two Column With Image And Rating",
						component: TwoColumnWithImageAndRatingTestimonial,
						url: "/components/blocks/Testimonial/TwoColumnWithImageAndRating",
					},
					ThreeColumnWithProfileImage: {
						name: "Three Column With Profile Image",
						component: ThreeColumnWithProfileImageTestimonial,
						url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
					},
					SimplePrimaryBackground: {
						name: "Simple With Primary Background",
						component: SimplePrimaryBackgroundTestimonial,
						url: "/components/blocks/Testimonial/SimplePrimaryBackground",
					},
				},
			},

			FAQS: {
				type: "FAQs Section",
				elements: {
					SimpleWithSideImage: {
						name: "Simple With Side Image",
						component: SimpleWithSideImageFAQS,
						url: "/components/blocks/FAQS/SimpleWithSideImage",
					},
					SingleCol: {
						name: "Single Column",
						component: SingleColFAQS,
						url: "/components/blocks/FAQS/SingleCol",
					},
					TwoColumnPrimaryBackground: {
						name: "Two Column With Primary Background",
						component: TwoColumnPrimaryBackgroundFAQS,
						url: "/components/blocks/FAQS/TwoColumnPrimaryBackground",
					},
				},
			},

			Form: {
				type: "Forms Section",
				elements: {
					SimpleContactUs: {
						name: "Simple Contact Us",
						component: SimpleContactUsForm,
						url: "/components/blocks/Form/SimpleContactUs",
					},
					SimpleSubscribeNewsletter: {
						name: "Simple Subscribe newsletter",
						component: SimpleSubscribeNewsletterForm,
						url: "/components/blocks/Form/SimpleSubscribeNewsletter",
					},
					TwoColContactUs: {
						name: "Two Column Contact Us",
						component: TwoColContactUsForm,
						url: "/components/blocks/Form/TwoColContactUs",
					},
					TwoColContactUsFull: {
						name: "Two Column Contact Us - Full Form",
						component: TwoColContactUsFullForm,
						url: "/components/blocks/Form/TwoColContactUsFull",
					},
				},
			},

			CTA: {
				type: "CTA Section",
				elements: {},
			},

			Footer: {
				type: "Footers Section",
				elements: {
					SimpleFiveColumn: {
						name: "Simple Five Column",
						component: SimpleFiveColumnFooter,
						url: "/components/blocks/Footer/SimpleFiveColumn",
					},
					FiveColumnWithInputForm: {
						name: "Five Column With Input Form",
						component: FiveColumnWithInputFormFooter,
						url: "/components/blocks/Footer/FiveColumnWithInputForm",
					},
					FiveColumnWithBackground: {
						name: "Five Column With background",
						component: FiveColumnWithBackgroundFooter,
						url: "/components/blocks/Footer/FiveColumnWithBackground",
					},
					FiveColumnDark: {
						name: "Five Column Dark",
						component: FiveColumnDarkFooter,
						url: "/components/blocks/Footer/FiveColumnDark",
					},
					MiniCentered: {
						name: "Mini Centered Dark",
						component: MiniCenteredFooter,
						url: "/components/blocks/Footer/MiniCentered",
					},
				},
			},
		},
	},
};

export default () => {
	const { type, subtype, name, topicName } = useParams();

	try {
		let Component = null;
		if (type === "blocks" && subtype) {
			Component = components[type][subtype]["elements"][name].component;
			return (
				<AnimationRevealPage disabled>
					<Component />
				</AnimationRevealPage>
			);
		} else Component = components[type][name].component;

		if (Component) return <Component topicName={topicName} />;

		throw new Error("Component Not Found");
	} catch (e) {
		console.log(e);
		return <div>Error: Component Not Found</div>;
	}
};
