import { Checkbox } from "@material-tailwind/react";
import { newProducts, trendingProducts } from "../../dummyData/data";
import ProductCard from "../components/ProductCard";

export default function SalesPage() {
  return (
    <div id="error-page" className="mx-60  py-20">
      <div className="flex justify-between mb-12">
        <p>Filters</p>
        <p>occassion filter</p>
      </div>
      <div className="grid grid-col-3 grid-flow-col gap-8 mt-12">
        <div className="">
          <div className="">
            <div className="flex justify-between border-b-2">
              <p>Categories</p>
              <p>Clear</p>
              <hr />
            </div>
            <Checkbox label="Filter" />
          </div>
          <div className="my-16">
            <div className="flex justify-between border-b-2">
              <p>Categories</p>
              <p>Clear</p>
              <hr />
            </div>

            <Checkbox label="Filter" />
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-wrap gap-20 ">
            {newProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
