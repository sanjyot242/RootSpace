import { Checkbox } from "@material-tailwind/react";
import { ShoppingProducts, trendingProducts } from "../../dummyData/data";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/Buttons/Button";
import Chip from "../components/Chips/Chips";
import MenuList from "../components/MenuList/MenuList";

export default function SalesPage() {
  return (
    <div className="flex flex-col p-16 lg:py-64 lg:px-120 items-start gap-16 self-stretch">
      {/* div for buttons to mobile screen */}
      <div className="lg:hidden flex p-16 flex-col items-start gap-16 self-stretch">
        <div className="flex items-start justify-evenly gap-16 self-stretch ">
        <Button size="medium" leftIcon={false} rightIcon={false} stateProp="normal" theme="secondary" socialMediaIcon={false} className="w-1/2">Filters</Button>
        <Button size="medium" leftIcon={false} rightIcon={false} stateProp="normal" theme="secondary" socialMediaIcon={false} className="w-1/2">Sort By</Button>
        </div>
      </div>

      {/* CONTINALLY DISPLAY AS PER SCREEN SIZE THIS OR BUTTONS */}
      <div className="hidden  lg:flex p-8 items-start gap-8 self-stretch">
          <span className="h-24 flex-1 basis-0 flex-shrink-0 text-shades-black font-ebgaramond font-medium text-desktop-headings-h6-medium">Filters</span>
          <div className="flex items-center gap-16">
          <Chip label="Occassion Filter" style="Light" state="Information" showCross={true} size="Small" />
          <Chip label="Size Filter" style="Light" state="Information" showCross={true} size="Small"/>
          </div>
      </div>

      
      <div className="flex items-start gap-16 self-stretch">
        {/* Area for filter table not to displayed on small screen */}
        <div className="hidden lg:flex py-0  px-16 flex-col items-start gap-16 w-1/3">
          <MenuList device="Web" showAction1={true} showRightIcon={false} showRadio={false} showCheckbox={true} showAction2={true} label={'Categories'}/> 
          <MenuList device="Web" showAction1={true} showRightIcon={false} showRadio={false} showCheckbox={true} showAction2={true} label={'Brand'}/> 
          <MenuList device="Web" showAction1={true} showRightIcon={false} showRadio={false} showCheckbox={true} showAction2={true} label={'Price'}/> 
          <MenuList device="Web" showAction1={true} showRightIcon={false} showRadio={false} showCheckbox={true} showAction2={true} label={'Color'}/> 
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
    // <div id="error-page" className="mx-60  py-20">
    //   <div className="flex justify-between mb-12">
    //     <p>Filters</p>
    //     <p>occassion filter</p>
    //   </div>
    //   <div className="grid grid-col-4 grid-flow-col gap-8 mt-12">
    //     <div className="col-span-1">
    //       <div className="">
    //         <div className="flex justify-between border-b-2">
    //           <p>Categories</p>
    //           <p>Clear</p>
    //           <hr />
    //         </div>
    //         <Checkbox label="Filter" />
    //       </div>
    //       <div className="my-16">
    //         <div className="flex justify-between border-b-2">
    //           <p>Categories</p>
    //           <p>Clear</p>
    //           <hr />
    //         </div>

    //         <Checkbox label="Filter" />
    //       </div>
    //     </div>
    //     <div className="col-span-3">
    //       <div className="flex flex-auto flex-wrap gap-20 ">
    //         {newProducts.map((product, index) => (
    //           <div className="max-w-[30%]">
    //             <ProductCard key={index} {...product} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
