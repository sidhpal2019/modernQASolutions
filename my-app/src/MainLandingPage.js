import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import SiteHeader from "components/SiteHeader.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import heroScreenshotImageSrc from "images/demo/Combined_Image_HomePage.png";
/* useInView and block icons removed with Component Blocks */

/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto lg:flex-nowrap`;

const Column = tw.div`flex-1`;

const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 w-full lg:w-7/12 xl:w-8/12 max-w-2xl lg:max-w-none flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 w-full max-w-none mx-auto lg:mx-0`;

const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-12 lg:mt-0 lg:ml-4 w-full lg:w-5/12 xl:w-4/12`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full lg:max-w-lg xl:max-w-xl mx-auto lg:ml-auto rounded-t sm:rounded`;

export default ({
  heading = "Modern QA Solutions for modern QA need.",
  description = "Modern QA Solutions specializes in delivering cutting-edge testing services tailored for today’s fast-paced IT environments.In today’s digital landscape, it’s essential for businesses to ensure software excellence with precision, speed, and scalability. At Modern QA Solutions, we provide innovative quality assurance services designed to meet the demands of modern IT systems—enabling faster releases, better performance, and a flawless user experience."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <SiteHeader />
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          {/* Landing Pages section removed */}
          {/* Inner Pages section removed */}

          {/* Component Blocks section removed */}
        </Content2Xl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

/* Component Blocks renderer removed */
