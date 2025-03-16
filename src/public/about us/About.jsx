import { useState, useEffect } from "react";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SocialLinks from "../../components/SocialLinks";

const About = () => {
  const [activeTab, setActiveTab] = useState("About Us");

   // Scroll to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "About Us":
        return (
          <div className="p-4">
            <div className="mb-6">
              <h3 className="text-xl md:text-3xl lg:text-4xl text-[#080E52] font-bold font-roboto">
                Our Mission
              </h3>
              <p className="text-sm lg:text-lg text-justify text-[#080E52] font-light md:font-normal font-roboto">
                $Garri is committed to facilitating seamless digital payment
                transactions for farm produce and groceries, surmounting
                challenges associated with currency disparities, &quot;no cash,
                no sales&quot; scenarios, and resistance to digital asset or
                crypto payment methods. The mission is to revolutionize the
                agricultural and grocery payment landscape, making transactions
                effortless and universally accessible.
              </p>
            </div>
            <div className="mb-8 pb-6 border-b border-black">
              <h3 className="text-xl md:text-3xl lg:text-4xl text-[#080E52] font-bold font-roboto">
                Our Vision
              </h3>
              <p className="text-sm lg:text-lg text-justify text-[#080E52] font-light md:font-normal font-roboto">
                The vision of $Garri is to establish itself as a globally
                accepted payment method for groceries and agricultural products.
                This involves widespread adoption, integration of $Garri wallet
                and POS machines in every relevant market, and creating a
                financial ecosystem that transcends traditional barriers,
                fostering a future where $Garri is synonymous with efficient and
                inclusive digital payments.
              </p>
            </div>
            {/* socials */}
            <div className=" flex flex-col gap-6 items-center justify-center">
              <h3 className="text-xl md:text-3xl lg:text-4xl text-[#080E52] font-bold font-roboto">Our Socials</h3>
              <p className="text-sm md:text-lg lg:text-xl font-roboto text-center text-[#00053C]">Connect to Us via our various social media handles</p>

              <SocialLinks />
            </div>
          </div>
        );
      case "How it works":
        return <HowItWorks />;
      case "FAQs":
        return <FAQ />;
      case "Contact us":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="container w-full mx-auto py-8">
      <div className="bg-[#151C71] w-[90%] mx-auto lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          About
        </p>
      </div>
      <div className="border-b border-black pb-6 mb-4 mt-6 w-[94%] md:w-[68%] mx-auto">
        <nav className="flex justify-around space-x-8">
          {["About Us", "How it works", "FAQs", "Contact us"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs md:text-base lg:text-lg text-[#080E52] focus:outline-none ${
                activeTab === tab ? "border-b-2 border-[#080E52]" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="w-[94%] md:w-[70%] mx-auto">{renderContent()}</div>
    </div>
  );
};

export default About;
