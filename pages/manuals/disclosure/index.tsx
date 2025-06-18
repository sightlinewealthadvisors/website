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
        <title>Disclosure Documents | Sightline Wealth Advisors</title>
        <meta name="description" content="Access important disclosure documents including Form CRS and Privacy Policy for Sightline Wealth Advisors LLC. View our commitment to transparency and client privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Disclosure Documents | Sightline Wealth Advisors" />
        <meta property="og:description" content="Review Sightline Wealth Advisors' regulatory disclosures, Form CRS, and privacy policy. Access important documents that demonstrate our commitment to transparency." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Disclosure"
        subtitle="Sightline Wealth Advisors LLC"
        className="text-white text-8xl "
        right_component={
          <Image
            src="/assets/manuals/folder.png"
            alt="Disclosure"
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
            title: "Privacy Policy",
            href: "/manuals/privacy-policy",
            type: "dark",
          },
        ]}
      />
      <PDFPreview
        pdfUrl="/assets/manuals/disclosure.pdf"
        className="pt-12 "
      />
      
      </div>
  )
}
 