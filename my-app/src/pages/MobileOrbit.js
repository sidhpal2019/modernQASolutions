import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import SiteHeader from "components/SiteHeader.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <SiteHeader />
      <MainFeature1
        subheading={<Subheading>MobileOrbit</Subheading>}
        heading="MobileOrbit — Build cross-platform mobile experiences"
        buttonRounded={false}
        primaryButtonText="Learn More"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
