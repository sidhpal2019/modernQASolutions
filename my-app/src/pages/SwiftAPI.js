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
import Testimonials from "components/testimonials/ThreeColumnWithProfileImage.js";
import Pricing from "components/pricing/ThreePlans.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <SiteHeader />
      <MainFeature1
        subheading={<Subheading>SwiftAPI</Subheading>}
        heading="SwiftAPI — Complete API Testing Solution for Modern Development"
        description="SwiftAPI is your comprehensive API testing platform that streamlines API validation and performance monitoring. With quick analysis of API definitions, fast test development and execution, and precise performance measurement for each endpoint, SwiftAPI empowers your team to deliver reliable and high-performing APIs. Automate your API testing workflow, identify bottlenecks instantly, and ensure your services meet quality standards with minimal effort."
        buttonRounded={false}
        primaryButtonText="Get Started"
        imageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <HowItWorks
        heading="How SwiftAPI Works"
        textOnLeft={false}
        imageDecoratorBlob={true}
        primaryButtonText="Start Testing"
        primaryButtonUrl="#"
        steps={[
          {
            heading: "Quick Definition Analysis",
            description: "Import your API specifications (OpenAPI, Swagger, Postman collections) and SwiftAPI automatically analyzes endpoints, parameters, and data models for comprehensive test coverage."
          },
          {
            heading: "Fast Test Development",
            description: "Create test cases in minutes with our intuitive interface. Use auto-generated tests from your API definitions, customize assertions, and build complex test scenarios with ease."
          },
          {
            heading: "Execute & Monitor",
            description: "Run tests individually or in suites, schedule automated runs, and integrate with your CI/CD pipeline for continuous API validation across environments."
          },
          {
            heading: "Measure Performance",
            description: "Get detailed performance metrics for each API including response times, throughput, error rates, and resource consumption. Identify bottlenecks and optimize your services."
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Benefits
        heading="Why Choose SwiftAPI?"
        primaryButtonText="Try Free Trial"
        primaryButtonUrl="#"
        features={[
          {
            Icon: () => <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Comprehensive Analysis" />,
            title: "Intelligent API Analysis",
            description: "Automatically analyze API definitions to understand endpoints, data structures, and dependencies. Get instant insights into API complexity and test coverage requirements.",
            url: "#"
          },
          {
            Icon: () => <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Performance Metrics" />,
            title: "Detailed Performance Metrics",
            description: "Track response times, throughput, error rates, and resource usage for every API. Real-time dashboards and historical trends help you maintain optimal performance.",
            url: "#"
          }
        ]}
        textOnLeft={true}
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Testimonials
        heading="What Our Customers Say"
        testimonials={[
          {
            imageSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "SwiftAPI transformed our API testing process. The automatic analysis of our OpenAPI specs saved us days of work, and the performance metrics helped us identify and fix bottlenecks before they reached production. It's now an essential part of our development workflow.",
            customerName: "Alex Thompson",
            customerTitle: "API Lead, CloudTech Solutions"
          },
          {
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "The speed of test development is incredible. What used to take hours now takes minutes. SwiftAPI's intelligent test generation and easy customization let our team focus on complex scenarios while routine tests are handled automatically.",
            customerName: "David Kim",
            customerTitle: "Senior QA Engineer, DataFlow Inc."
          },
          {
            imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "Performance monitoring with SwiftAPI is outstanding. We can see exactly how each API performs under different loads, and the historical data helps us track improvements over time. This level of visibility was impossible with our previous tools.",
            customerName: "Rachel Martinez",
            customerTitle: "DevOps Manager, FinTech Pro"
          }
        ]}
      />
      <Pricing
        heading="Choose Your SwiftAPI Plan"
        subheading="Start testing your APIs today with our flexible pricing options."
        plans={[
          {
            name: "Developer",
            price: "$39",
            duration: "per month",
            mainFeature: "For individual developers",
            features: [
              "Up to 10 API endpoints",
              "Basic performance metrics",
              "Manual test execution",
              "Email support",
              "API definition import"
            ],
            featured: false,
            url: "#"
          },
          {
            name: "Team",
            price: "$129",
            duration: "per month",
            mainFeature: "For development teams",
            features: [
              "Unlimited API endpoints",
              "Advanced performance analytics",
              "Automated test execution",
              "CI/CD integration",
              "Priority support",
              "Custom assertions & validators",
              "Test scheduling"
            ],
            featured: true,
            url: "#"
          },
          {
            name: "Enterprise",
            price: "Custom",
            duration: "pricing",
            mainFeature: "For large organizations",
            features: [
              "Everything in Team plan",
              "Dedicated infrastructure",
              "24/7 phone support",
              "Advanced security & compliance",
              "Custom integrations",
              "On-premise deployment",
              "SLA guarantees",
              "Training & onboarding"
            ],
            featured: false,
            url: "#"
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
