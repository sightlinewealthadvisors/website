import React from 'react'
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";
import PDFPreview from "@/components/manuals/PDFPreview";
import PrivacyContent from "@/components/manuals/PrivacyContent";
import Head from 'next/head';

export default function index() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Sightline Wealth Advisors</title>
        <meta name="description" content="Read our privacy policy to understand how Sightline Wealth Advisors protects and manages your personal information. We are committed to maintaining the confidentiality and security of your data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Privacy Policy | Sightline Wealth Advisors" />
        <meta property="og:description" content="Learn about our commitment to protecting your privacy and personal information. Sightline Wealth Advisors maintains strict standards for data security and confidentiality." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Privacy Policy"
        subtitle="Sightline Wealth Advisors LLC"
        className="text-white text-8xl "
        right_component={
          <Image
            src="/assets/manuals/folder.png"
            alt="Privacy Policy"
            width={250}
            height={250}
          />
        }
        buttons={[
          {
            title: "Form CRS March 2024",
            href: "/manuals/form-crs",
            type: "dark",
          },
          {
            title: "Disclosure",
            href: "/manuals/disclosure",
            type: "dark",
          },
        ]}
      />
      <ReactHeading
        title="Our Commitment to You"
        description="We abide by the highest standards of privacy and security to protect your personal information."
        titleSize="xl"
        descriptionSize="lg"
        align="center"
        color="default"
        withDivider={true}
        containerClassName="pt-12 bg-white"
      />
      <PrivacyContent />
      
      </div>
  )
}
 