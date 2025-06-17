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
            src="/assets/services/plane-blue.png"
            alt="Services"
            width={500}
            height={500}
          />
        }
        buttons={[
          {
            title: "Form CRS March 2024",
            href: "/uploads/form-crs-march-2024",
            type: "dark",
          },
        ]}
      />
      <ReactHeading
        title="Our Financial Planning Process"
        description="We operate in accordance with the established financial planning process of the CFP® Board of Standards"
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
