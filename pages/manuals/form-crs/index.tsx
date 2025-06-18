import React from 'react'
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";
import PDFPreview from "@/components/manuals/PDFPreview";
import Head from 'next/head';

export default function index() {
  return (
    <div>
 <Head>
        <title>Form CRS | Sightline Wealth Advisors</title>
        <meta name="description" content="View our Form CRS (Customer Relationship Summary). Learn about our services, fees, conflicts of interest, and standards of conduct as an investment adviser." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Form CRS | Sightline Wealth Advisors" />
        <meta property="og:description" content="Access Sightline Wealth Advisors' Form CRS (Customer Relationship Summary) to understand our investment advisory services, fees, and business practices." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Form CRS March 2024"
        subtitle="Sightline Wealth Advisors LLC"
        className="text-white text-8xl "
        right_component={
          <Image
            src="/assets/manuals/folder.png"
            alt="Form CRS"
            width={250}
            height={250}
          />
        }
        buttons={[
          {
            title: "Disclosure",
            href: "/manuals/disclosure",
            type: "dark",
          },
          {
            title: "Privacy Policy",
            href: "/manuals/privacy-policy",
            type: "dark",
          },
        ]}
      />
      <PDFPreview
        pdfUrl="/assets/manuals/form-crs.pdf"
        className="pt-12 "
      />
      
      </div>
  )
}
 