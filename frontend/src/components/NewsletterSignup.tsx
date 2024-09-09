import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center p-16  gap-16 lg:px-120 lg:py-64 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start py-4 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="headingsh3medium text-text-primary max-md:max-w-full">
            Never miss an update
          </h2>
          <p className="paragraphmediumregular max-md:max-w-full text-text-paragraph">
            Signup for promotions, new arrivals, updates and more - straight to your inbox
          </p>
        </div>
        <form className="flex flex-col min-w-[240px] w-[488px] max-md:max-w-full gap-32">
          <div className="flex flex-col w-full gap-8  max-w-[488px] max-md:max-w-full">
            <label htmlFor="email" className="flex  items-center self-start  text-text-primary paragraphmediumsemibold whitespace-nowrap">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="flex items-center -full text-text-tertiary  rounded-xxs  border-stroke-primary_hover  max-md:max-w-full paragraphmediumregular"
              required
            />
            <div className="flex flex-wrap gap-4 items-start self-stretch w-full   text-text-paragraph max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3e239e7365e07d60ce75dfe19e9d100026c16e1647b14203db1b1cdd576503?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba" alt="" className="object-contain shrink-0 aspect-square w-[18px] mt-2" />
              <div className="flex-1 shrink basis-0 paragraphmediumregular max-md:max-w-full">
              We will be sending you regular updates about offers and new arrivals. If you don't wish to receive them, you can opt out by clicking on Unsubscribe link in the email
            </div>
          </div>
        </div>
        <button type="submit" className="gap-2 self-stretch px-5 py-2.5 mt-8 max-w-full text-sm leading-none text-white whitespace-nowrap bg-gray-900 rounded shadow-sm w-[488px]">
          Signup
        </button>
      </form>
    </div>
  </section>
);
};

export default NewsletterSignup;