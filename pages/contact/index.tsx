import React from "react";
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";
import Head from "next/head";

export default function index() {
  return (
    <div><Head>
        <title>Contact Us | Sightline Wealth Advisors</title>
        <meta 
          name="description" 
          content="Contact Sightline Wealth Advisors to discuss your financial goals. Our team of experienced advisors is ready to help guide your financial journey." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          property="og:title" 
          content="Contact Sightline Wealth Advisors | Financial Planning & Investment Services" 
        />
        <meta 
          property="og:description" 
          content="Get in touch with Sightline Wealth Advisors to learn how we can help you achieve your financial goals through personalized wealth management solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="We'll Help You Achieve Your Financial Goals"
        subtitle="Contact Sightline Wealth Advisors to learn how we can help you achieve your financial goals. "
        className="text-white text-8xl py-40"
        right_component={
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=13Dt9dLVsdhpuflcBjxwCqJpQEZrecOA&ehbc=2E312F&noprof=1" width="auto" height="400"></iframe>

        }
        buttons={[
          {
            title: "info@sightlineaw.com",
            href: "mailto:info@sightlineaw.com",
            type: "dark",
          },
        ]}
      />
      
    </div>
  );
}
