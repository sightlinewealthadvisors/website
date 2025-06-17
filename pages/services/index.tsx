import React from "react";
import Header from "@/components/shared/Header";
import Image from "next/image";
import ReactHeading from "@/components/shared/ReactHeading";
import Timeline from "@/components/services/Timeline";

export default function index() {

const financialPlanningEvents: TimelineEvent[] = [
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 1",
    title: "Establish Relationship",
    description: "Establish and define the client-planner relationship.",
    type: "type1"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 2",
    title: "Gather Data",
    description: "Gather your financial and personal data, including your goals and needs.",
    type: "type2"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 3",
    title: "Analyze & Evaluate",
    description: "Analyze and evaluate your financial status.",
    type: "type1"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 4",
    title: "Develop & Present",
    description: "Develop and present financial planning recommendations and/or alternatives.",
    type: "type2"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 5",
    title: "Implementation",
    description: "Implement the financial planning recommendations, including working with tax advisors, estate attorneys, insurance professionals and workplace benefit coordinators.",
    type: "type1"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Step 6",
    title: "Monitor Progress",
    description: "Monitor the financial planning recommendations. We regularly track your progress toward your financial goals and make strategic adjustments based on changes to your goals, your financial situation, or tax and estate law.",
    type: "type2"
  }
];

const investmentManagementEvents: TimelineEvent[] = [
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Phase 1",
    title: "Investment Plan Design",
    description: "Based on the targeted risk and return objectives of your financial plan and your specific tax bracket, time frame and liquidity needs, we create your IPS. This statement provides a roadmap for the development of your portfolio, clearly defining goals and the investment strategies we'll use to help achieve them.",
    type: "type1"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Phase 2",
    title: "Investment Implementation",
    description: "Once you've approved your IPS, we make all necessary changes to the portfolio to implement the plan. Using low-cost exchange traded funds (ETFs) and mutual funds as the core of the portfolio, we may supplement the allocation with a broad array of additional investments depending upon your income or growth needs.",
    type: "type2"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Phase 3",
    title: "Quarterly Reporting",
    description: "In addition to providing monthly account statements, Sightline delivers an easy-to-understand, detailed review of your portfolio after the end of each calendar quarter. This report, which includes a summary of activity for the last quarter, 12 months and lifetime of the account, allows you to evaluate performance on your accounts.",
    type: "type1"
  },
  {
    imageUrl: "/assets/services/handshake.png",
    imageWidth: 250,
    imageHeight: 250,
    date: "Phase 4",
    title: "Strategic Adjustment",
    description: "Change—in your goals, financial circumstances, the market or tax and estate law—is inevitable. Because proper asset allocation is vital to managing risk, we regularly rebalance your portfolio to realign with the target allocation defined in your IPS.",
    type: "type2"
  }
];
  return (
    <div>
      <Header
        title="How do you see your future?"
        subtitle="First we work with you to establish a 
        plan that addresses your goals, then we manage the investments that bring that plan to life."
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
            href: "/manuals/form-crs-march-2024",
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

<Timeline 
  events={financialPlanningEvents}
  animated={true}
  showDates={true}
  animationDelay={0.2}
  className="mx-auto max-w-6xl px-4 py-8"
/>

<ReactHeading 
  title="Our Financial Management Process"
  description="Once we have a firm understanding of your unique opportunities and potential challenges, we apply our skills to deliver specific, actionable & written advice."
  titleSize="xl"
  descriptionSize="lg"
  align="center"
  color="default"
  withDivider={true}
  containerClassName="pt-12 bg-white"
/>

<Timeline 
  events={investmentManagementEvents}
  animated={true}
  showDates={true}
  animationDelay={0.2}
  className="mx-auto max-w-6xl px-4 py-8"
/>

    </div>
  );
}
