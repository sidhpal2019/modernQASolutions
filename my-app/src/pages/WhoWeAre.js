import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SiteHeader from "components/SiteHeader.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const Content = tw.div`max-w-screen-xl mx-auto px-8 py-12 md:py-20`;
const Heading = tw.h1`text-3xl sm:text-4xl font-black text-primary-900`;
const Intro = tw.p`mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed`;
const Grid = tw.div`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6`;
const Card = tw.div`bg-white rounded-lg shadow-md p-6 border border-gray-100`;
const CardTitle = tw.h2`text-xl font-bold text-gray-900`;
const CardText = tw.p`mt-3 text-gray-700 leading-relaxed`;

export default function WhoWeAre() {
  return (
    <AnimationRevealPage>
      <SiteHeader />
      <Content>
        <Heading>Who We Are</Heading>
        <Intro>
          Modern QA Solutions is a team of very experienced quality engineering experts who are focused on developing new QA products and solutions which can greatly benefit IT companies by improving efficiency, lowering cost, and accelerating project delivery cycles. We combine automation, thoughtful test strategy, and modern
          tooling to reduce release risk without slowing delivery.
        </Intro>

        <Grid>
          <Card>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              Enable teams to build with confidence by embedding quality into every stage of the
              software lifecycle.
            </CardText>
          </Card>

          <Card>
            <CardTitle>How We Work</CardTitle>
            <CardText>
              We partner closely with engineering and product teams to design practical, scalable
              test approaches tailored to each product.
            </CardText>
          </Card>

          <Card>
            <CardTitle>What We Value</CardTitle>
            <CardText>
              Clarity, collaboration, and continuous improvement. Quality is not a gate; it is a
              shared responsibility.
            </CardText>
          </Card>
        </Grid>
      </Content>
      <Footer />
    </AnimationRevealPage>
  );
}