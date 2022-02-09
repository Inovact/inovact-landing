import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import CoreFeature from "sections/core-feature";
import Feature from "sections/feature";
import PartnerSection from "sections/partner";
import WorkFlow from "sections/workflow";
import TestimonialCard from "sections/testimonial";
import SecurePayment from "sections/secure-payment";
import Package from "sections/package";
import Faq from "sections/faq";
import Video from "sections/video";
import ComBanner from "sections/com-banner";
import ComKeyFeature from "sections/com-key-feature";
import ComFeature from "sections/com-feature";
import Footer from "components/footer/footer";
import Form from "sections/form";
import ComGallery from "sections/com-gallery";

export default function CommunityPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <ComBanner />
          <ComKeyFeature />
          {/* <CoreFeature /> */}
          <ComFeature />
          <PartnerSection />
          <ComGallery />
          <TestimonialCard />
          {/* <WorkFlow />
          <SecurePayment />
          <Package />
          <Faq /> */}
          <Form />
          <Footer />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
