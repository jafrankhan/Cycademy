import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import HeaderWithoutDifferentPage from "components/headers/HeaderWithoutDifferentPage";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
    <HeaderWithoutDifferentPage></HeaderWithoutDifferentPage>
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Cyacademy Inc",
            description: (
              <>
                <Address>
                  <AddressLine>461 Clementi Rd, Singapore 599491</AddressLine>
                </Address>
                <Email>Cyacademy@gmail.com</Email>
                <Phone>+65 9232423</Phone>
              </>
            )
            }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
