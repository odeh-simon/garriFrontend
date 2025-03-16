import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h1 className="text-center text-[#080E52] font-roboto text-2xl md:text-3xl lg:text-[40px] font-bold">How it Works?</h1>
      <h2 className="text-[#080E52] font-roboto text-xs md:text-lg lg:text-2xl">
        At Garri market Place, we&apos;ve designed a straightforward Agro and
        food shopping experience at your convinience.
      </h2>
      <div className="flex flex-col gap-4">
        <HowItWorksCard 
        number="01"
        headerText="Search for Item"
        paragraphText="Explore our  collection of various food items from several vendors"
        />

        <HowItWorksCard
        number="02"
        headerText="Secure Checkout"
        paragraphText="Add your items to the cart and proceed to our secure checkout."
        />

        <HowItWorksCard
        number="03"
        headerText="Swift Payment Option"
        paragraphText="Experience borderless payment option with Garri token."
        />

        <HowItWorksCard
        number="04"
        headerText="Unbox Happiness"
        paragraphText="Receive your carefully packaged Food order."
        />
      </div>
    </div>
  );
}
