import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import SiteHeader from "components/SiteHeader.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import HowItWorks from "components/features/TwoColWithSteps.js";
import Benefits from "components/features/TwoColWithTwoFeaturesAndButtons.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <SiteHeader />
      <MainFeature1
        subheading={<Subheading>MobileOrbit</Subheading>}
        heading="MobileOrbit — Access Real-Time Mobile Devices for Testing"
        description="MobileOrbit is a mobile cloud solution to provide access to real-time mobile devices in various OS and manufacturers. This is an easy to use and cost effective testing solution for the QA team to get access to a large collection of mobile devices. Experience seamless testing across Android, iOS, and more, ensuring your apps perform flawlessly on every device. With MobileOrbit, reduce testing time, improve quality, and deliver exceptional user experiences without the hassle of maintaining physical device labs."
        buttonRounded={false}
        primaryButtonText={null}
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <HowItWorks
        heading="How MobileOrbit Works"
        textOnLeft={false}
        imageDecoratorBlob={true}
        primaryButtonText="Start Testing"
        primaryButtonUrl="#"
        steps={[
          {
            heading: "Select Devices",
            description: "Choose from a vast collection of real-time mobile devices across different OS versions and manufacturers."
          },
          {
            heading: "Run Tests",
            description: "Execute automated or manual tests on selected devices in the cloud, with real-time access and monitoring."
          },
          {
            heading: "Analyze Results",
            description: "Get detailed reports on app performance, bugs, and compatibility issues to optimize your mobile experience."
          },
          {
            heading: "Scale & Integrate",
            description: "Integrate with your CI/CD pipelines for continuous testing and scale your testing efforts as needed."
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Benefits
        heading="Why Choose MobileOrbit?"
        primaryButtonText={null}
        primaryButtonUrl="#"
        features={[
          {
            Icon: () => <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Cost-Effective" />,
            title: "Cost-Effective",
            description: "Avoid the high costs of physical device labs. Pay only for the devices and time you use in the cloud.",
            url: "#"
          },
          {
            Icon: () => <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Comprehensive Coverage" />,
            title: "Comprehensive Coverage",
            description: "Test on thousands of device combinations, ensuring your app works on all popular and niche devices.",
            url: "#"
          }
        ]}
        textOnLeft={true}
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
