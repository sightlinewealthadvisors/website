import React from "react";
import Head from "next/head";
import UserCard from "@/components/about/UserCard";
import Header from "@/components/shared/Header";
import ReactHeading from "@/components/shared/ReactHeading";

export default function index() {
  return (
    <>
      <Head>
        <title>Login | Sightline Wealth Advisors</title>
        <meta
          name="description"
          content="Secure login portal for Sightline Wealth Advisors clients. Access your financial planning and investment management information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Client Login | Sightline Wealth Advisors"
        />
        <meta
          property="og:description"
          content="Access your secure client portal at Sightline Wealth Advisors. View your financial planning and investment management information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Get Started"
        subtitle="Login to your client portal to access your financial information and planning tools."
        className="text-white text-8xl py-40"
        buttons={[
          {
            title: "info@sightlineaw.com",
            href: "mailto:info@sightlineaw.com",
            type: "dark",
          },
        ]}
      />
      <ReactHeading
        title="Portals"
        description="While Sightline does contract with these third parties, Sightline does not control these websites and you agree to use these links at your own risk. Please be aware that Sightline is not responsible for the content of third party websites linked to Sightline nor are we responsible for the privacy policy or practices of third party websites. Should you decide to visit these third party websites, we strongly encourage you to review and become familiar with that website’s privacy policy."
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
            imageUrl="/assets/login/charles.png"
            imageAlt="Charles Schwab"
            textClassName=""
            name="Charles Schwab"
            description="To view your account online, please click on the button below:"
            socialLinks={{
              login: "https://client.schwab.com/Areas/Access/Login",
            }}
            size="large"
            layout="vertical"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <UserCard
            imageUrl="/assets/login/evestnet.png"
            imageAlt="MoneyGuidePro"
            name="MoneyGuidePro"
            description="To use our financial planning tool, please click on the button below:"
            socialLinks={{
              login:
                "https://www.moneyguidepro.com/schwabadvisorservices/Guests.aspx?gst=074BA8A012A8537D407F4F901DC17D6E663534696D6CDDAE0C95E18C8AEE4BAB&sDestPage=10032",
            }}
            size="large"
            layout="vertical"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <UserCard
            imageUrl="/assets/login/tamarcinc.png"
            imageAlt="Evestnet Tamarac"
            className="space-y-4"
            name="Evestnet Tamarac"
            description="With ClientView Live You Can:
Send messages directly to Sightline via the secure, private, ClientView Live portal.
View account statements, financial planning and estate documents and reports online using a simple, secure, process.
"
            socialLinks={{
              login:
                "https://sightlinewealth.portal.tamaracinc.com/Login.aspx?ReturnUrl=%2fClientDashboard.aspx",
            }}
            size="large"
            layout="vertical"
          />
        </div>
      </div>
    </>
  );
}
