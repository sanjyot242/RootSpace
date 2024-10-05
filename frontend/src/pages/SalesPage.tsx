import { Checkbox } from "@material-tailwind/react";
import { ShoppingProducts, trendingProducts } from "../../dummyData/data";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/Buttons/Button";
import Chip from "../components/Chips/Chips";
import MenuList from "../components/MenuList/MenuList";
import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft } from "../animations/animations";
import NewsletterSignup from "../components/NewsletterSignup";

export default function SalesPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle search overlay on small screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col p-16 lg:py-64 lg:px-120 items-start gap-16 self-stretch">
      {/* div for buttons to mobile screen */}
      <div className="lg:hidden flex p-16 flex-col items-start gap-16 self-stretch">
        <div className="flex items-start justify-evenly gap-16 self-stretch ">
          <Button
            size="medium"
            leftIcon={false}
            rightIcon={false}
            stateProp="normal"
            theme="secondary"
            socialMediaIcon={false}
            className="w-1/2"
            onClick={toggleMenu}
          >
            Filters
          </Button>
          <Button
            size="medium"
            leftIcon={false}
            rightIcon={false}
            stateProp="normal"
            theme="secondary"
            socialMediaIcon={false}
            className="w-1/2"
          >
            Sort By
          </Button>
        </div>
        <motion.div
          initial={slideInFromLeft.initial}
          animate={isOpen ? slideInFromLeft.animate : slideInFromLeft.exit}
          transition={slideInFromLeft.transition}
          className="fixed top-[50px] overflow-y-auto left-0 h-2/4 w-full p-16 items-start gap-32 bg-bg-primary border-[0.5px] border-stroke-primary_hover rounded-xxs"
        >
          <div className="flex flex-col gap-16 self-stretch shrink-0 items-start">
            {/* Close button inside the menu */}
            <button onClick={toggleMenu} className="self-start text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M11.8222 21.6224L4.2 14.0002M4.2 14.0002L11.8222 6.37793M4.2 14.0002L23.8 14.0002"
                  stroke="#171717"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div className="w-full self-stretch text-text-primary  paragraphsmallmedium">
              Select one
            </div>

            <div className="w-full flex flex-col self-start gap-8 shrink-0 ">
              {/* <Dropdown label={"Women"} />
              <Dropdown label={"Men"} />
              <Dropdown label={"Unisex"} /> */}
            </div>

            <div className="flex flex-col items-start gap-32 self-stretch">
              <div className="flex flex-col items-start gap-16  self-stretch">
                <div className="text-text-primary text-mobile-headings-h5-medium font-ebgaramond">
                  My Account
                </div>
                <Button
                  socialMediaIcon={false}
                  rightIcon={false}
                  leftIcon={false}
                  size="medium"
                  theme="primary"
                  stateProp="normal"
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  socialMediaIcon={false}
                  rightIcon={false}
                  leftIcon={false}
                  size="medium"
                  theme="secondary"
                  stateProp="normal"
                  className="w-full"
                >
                  Register
                </Button>
              </div>
              <div className="flex flex-col items-start gap-14  self-stretch"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTINALLY DISPLAY AS PER SCREEN SIZE THIS OR BUTTONS */}
      <div className="hidden  lg:flex p-8 items-start gap-8 self-stretch">
        <span className="h-24 flex-1 basis-0 flex-shrink-0 text-shades-black font-ebgaramond font-medium text-desktop-headings-h6-medium">
          Filters
        </span>
        <div className="flex items-center gap-16">
          <Chip
            label="Occassion Filter"
            style="Light"
            state="Information"
            showCross={true}
            size="Small"
          />
          <Chip
            label="Size Filter"
            style="Light"
            state="Information"
            showCross={true}
            size="Small"
          />
        </div>
      </div>

      <div className="flex items-start gap-16 self-stretch">
        {/* Area for filter table not to displayed on small screen */}
        <div className="hidden lg:flex py-0  px-16 flex-col items-start gap-16 w-1/3">
          <MenuList
            device="Web"
            showAction1={true}
            showRightIcon={false}
            showRadio={false}
            showCheckbox={true}
            showAction2={true}
            label="Categories"
          />
          <MenuList
            device="Web"
            showAction1={true}
            showRightIcon={false}
            showRadio={false}
            showCheckbox={true}
            showAction2={true}
            label={"Brand"}
          />
          <MenuList
            device="Web"
            showAction1={true}
            showRightIcon={false}
            showRadio={false}
            showCheckbox={true}
            showAction2={true}
            label={"Price"}
          />
          <MenuList
            device="Web"
            showAction1={true}
            showRightIcon={false}
            showRadio={false}
            showCheckbox={true}
            showAction2={true}
            label={"Color"}
          />
          <MenuList
            device="Web"
            showAction1={true}
            showRightIcon={false}
            showRadio={false}
            showCheckbox={true}
            showAction2={true}
            label={"Discounted Range"}
          />
        </div>
        {/* Grid for products (Always displayed ) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32 w-full">
          {ShoppingProducts.map((product, index) => (
            <div key={index} className="w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
