import React from "react";
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";

export default function index() {
  return (
    <div>
      <Header
        title="Seasoned financial advisors"
        subtitle="Our relationship with you is our most important asset."
        className="text-white text-8xl py-40"
        right_component={
          <Image
            src="/assets/about/advisors.png"
            alt="Advisors"
            width={500}
            height={500}
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
      <ReactHeading
        title="Our Experts"
        description="Our expertise spans across various areas of finance, ensuring that we provide comprehensive and tailored solutions."
        titleSize="xl"
        descriptionSize="lg"
        align="center"
        color="default"
        withDivider={true}
        containerClassName="pt-12 bg-white"
      />
    </div>
  );
}
