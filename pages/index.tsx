import Header from "@/components/shared/Header";
import ReactBody from "@/components/shared/ReactBody";
import ReactHeading from "@/components/shared/ReactHeading";
import ReactCountdown from "@/components/shared/ReactCountdown";
import Shape from "@/components/shared/Shape.tsx";
import Head from 'next/head';

export default function Home() {
  return (
    <>
          <Head>
        <title>Sightline Wealth Advisors | Navigate Your Financial Journey</title>
        <meta name="description" content="Sightline Wealth Advisors takes a 360° perspective when creating your living financial plan. Partner with experienced financial advisors for customized wealth management solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sightline Wealth Advisors | Navigate Your Financial Journey" />
        <meta property="og:description" content="Experience strategic financial planning with certified advisors managing over $300M in assets. Comprehensive wealth management solutions for your financial goals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/home/sailbot.webm" type="video/webm" />
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>
        <div className=" z-10">
          <Header
            title="NAVIGATE YOUR"
            title2="FINANCIAL JOURNEY"
            subtitle="Success requires a strategic vision."
            className="text-white pb-40 text-8xl min-h-screen"
            right_component={
              <Shape
                className={`montserrat-bold backdrop-blur-xl text-white scale-150 text-[20px] md:scale-100 md:text-4xl`}
              />
            }
            buttons={[{ title: "About Us", href: "/about", type: "dark" }]}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <ReactBody
          title="Your Financial Partner"
          description="Sightline Wealth Advisors takes a 360° perspective when creating your living financial plan. With our abundant experience, focus on client relationships and investment in unifying technology, we don't just advise our clients on single, unrelated investments. We partner with you to define your specific goals, assess your opportunities and challenges, and create a customized, holistic financial plan that lets you clearly see where you're going and how you'll get there."
          // imageUrl="/assets/home/monitorarrow.png"
          imageUrl="/assets/home/monitorarrow-blue.jpg"
          imageClassName="w-full h-auto rounded-lg "
          imageWidth={400}
          imageHeight={400}
          imageAlt="Financial Partner"
          containerClassName="px-4 sm:px-6 lg:px-8"
          titleColor="text-gray-900"
          descriptionColor="text-gray-600"
          showDivider={true}
          animate={true}
          layout="text-right"
          titleClassName="text-3xl font-bold mb-4"
          descriptionClassName="text-lg mb-6"
          contentClassName="flex flex-col items-center text-center"
          contentOrder="order-1"
          imageOrder="order-2"
        />

        <div className="flex flex-col md:flex-row bg-white w-full items-center justify-center gap-2 md:gap-40 px-4 sm:px-6 lg:px-8">
          <ReactCountdown
            value="300"
            type="dollar-million"
            title="Assets Under Management"
            animate={true}
            className="py-4 rounded-lg text-[#4f88a6]"
          />
          <ReactCountdown
            value="70"
            type="number"
            title="Years Combined Experience"
            animate={true}
            className="py-4 text-[#4f88a6] rounded-lg "
          />
          <ReactCountdown
            value="22"
            type="number"
            title="States Served"
            animate={true}
            className="py-4 text-[#4f88a6] rounded-lg "
          />
          <ReactCountdown
            value="99"
            type="rate"
            title="Client Retention Rate"
            animate={true}
            className="py-4 text-[#4f88a6] rounded-lg"
          />
        </div>
      </div>
      <ReactHeading
        title="Why Sightline Wealth Advisors?"
        description="Experience the difference of working with a team that puts your financial 
       future first"
        titleSize="xl"
        descriptionSize="lg"
        align="center"
        color="default"
        withDivider={true}
        containerClassName="pt-12 bg-white"
      />
      <ReactBody
        title="Knowledge, Experience and Service"
        description="Both Alex Pellish and Mark Steffen are Certified Financial Planners™ (CFP®) 
      with over 30 years of combined experience. We’ve helped clients navigate through volatile 
      markets, managed the impact of significant changes to tax and estate law, and adjusted 
      to a changing landscape in employee benefits and health care. More than 90 percent of our
       new clients are referred by existing clients, many of whom we’ve advised through the
        family life cycle of births, graduations, weddings, retirements and deaths."
        // imageUrl="/assets/home/service.png"
        imageUrl="/assets/home/service-blue.jpg"
        imageClassName="w-full h-auto rounded-lg "
        imageWidth={400}
        imageHeight={400}
        imageAlt="Financial Partner"
        containerClassName="px-4 sm:px-6 lg:px-8"
        titleColor="text-gray-900"
        descriptionColor="text-gray-600"
        showDivider={true}
        animate={true}
        layout="text-left"
        titleClassName="text-3xl font-bold mb-4"
        descriptionClassName="text-lg mb-6"
        contentClassName="flex flex-col items-center text-center"
        contentOrder="order-1"
        imageOrder="order-2"
      />
      <ReactBody
        title="We're Always One Step Ahead."
        description="We believe helping our clients determine and define their goals while also
       preparing for the unexpected is an irreplaceable first step before creating an investment
        portfolio. Thorough planning plots the course, lets us track progress and ensures we’re
         helping our clients reduce taxes, maximize employer benefits, obtain appropriate levels 
         of insurance and maintain the right cash reserve. As your situation or the law evolves,
          we revisit your plan to adjust it to your new goals."
        // imageUrl="/assets/home/taxi.png"
        imageUrl="/assets/home/taxi-blue.jpg"
        imageClassName="w-full h-auto rounded-lg "
        imageWidth={400}
        imageHeight={400}
        imageAlt="Financial Partner"
        containerClassName="px-4 sm:px-6 lg:px-8"
        titleColor="text-gray-900"
        descriptionColor="text-gray-600"
        showDivider={true}
        animate={true}
        layout="text-right"
        titleClassName="text-3xl font-bold mb-4"
        descriptionClassName="text-lg mb-6"
        contentClassName="flex flex-col items-center text-center"
        contentOrder="order-2"
        imageOrder="order-1"
      />
      <ReactBody
        title="High Tech Keeps Track Of Your Portfolio."
        description="Sightline’s private, secure web portal offers a document vault, on-demand reports, and two-way online workflow communication and secure messaging via desktop or mobile. Our portal provides a consolidated portfolio view—bank accounts, 401(k), investment accounts, insurance policies and more—to create a living financial plan that’s updated in real time. That means we can spend less time managing documentation and more time understanding our clients as individuals."
        imageUrl="/assets/home/stax-blue.jpg"
        imageClassName="w-full h-auto rounded-lg "
        imageWidth={400}
        imageHeight={400}
        imageAlt="Financial Partner"
        containerClassName="px-4 sm:px-6 lg:px-8"
        titleColor="text-gray-900"
        descriptionColor="text-gray-600"
        showDivider={true}
        animate={true}
        layout="text-left"
        titleClassName="text-3xl font-bold mb-4"
        descriptionClassName="text-lg mb-6"
        contentClassName="flex flex-col items-center text-center"
        contentOrder="order-1"
        imageOrder="order-2"
      />
    </>
  );
}
