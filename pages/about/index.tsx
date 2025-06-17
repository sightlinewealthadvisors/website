import React from "react";
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";
import UserCard from "@/components/about/UserCard";
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
      <div className="flex flex-col md:flex-row  justify-center items-center p-8">
         <div className="w-full md:w-1/2 lg:w-2/3">
           <UserCard
         imageUrl="/assets/about/alex-pellish.png"
         imageAlt="S. Alexander Pellish"
         textClassName=""
         name="S. Alexander Pellish, CFP®, ChFC®, CIMA®, CLTC, CLU®"
         title="Principal at Sightline Wealth Advisors, LLC"
         description="Alex is a CERTIFIED FINANCIAL PLANNER™ practitioner, a Certified Investment Management Analyst, Chartered Life Underwriter, and Chartered Financial Consultant. He's a graduate of the University of Connecticut with a BA degree in communications. In his free time, Alex enjoys traveling and playing music. Alex is a volunteer with Groton Community services."
         socialLinks={{
           linkedin: "https://www.linkedin.com/in/salexanderpellish"
         }}
         size="large"
         layout="vertical"
           />
         </div>

         <div className="w-full md:w-1/2 lg:w-2/3">
           <UserCard
         imageUrl="/assets/about/mark-steffen.png"
         imageAlt="Mark Steffen"
         name="Mark Steffen, CFP®"
         title="Principal at Sightline Wealth Advisors, LLC"
         description="Mark is a CERTIFIED FINANCIAL PLANNER™ practitioner and a magna cum laude graduate of Boston College with a BS degree from the Carroll School of Management, concentrations in finance and economics. Outside of the office, he volunteers as a member of the Madison Beach and Recreation Commission."
         socialLinks={{
           linkedin: "https://www.linkedin.com/in/markjsteffen"
         }}
         size="large"
         layout="vertical"
           />
         </div>

         <div className="w-full md:w-1/2 lg:w-2/3">
           <UserCard
         imageUrl="/assets/about/mark-michna.png"
         imageAlt="Mark Michna"
         name="Mark Michna, CFA®"
         title="Wealth Advisor"
         description="Mark is a CFA® charter holder with over 20 years of experience in the financial services industry. He received his MBA in Finance from Fairfield University and graduated from the University of Connecticut with a BS degree in Physiology and Neurobiology. He enjoys spending his free time with his wife, Tricia, and their three children."
         socialLinks={{
           linkedin: "https://www.linkedin.com/in/mark-michna-cfa-a594a2"
         }}
         size="large"
         layout="vertical"
           />
         </div>
      </div>
    </div>
  );
}
