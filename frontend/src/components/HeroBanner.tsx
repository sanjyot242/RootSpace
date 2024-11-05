
import { Button } from './Buttons/Button';

const HeroBanner = () => {
  return (
    <section className="relative flex flex-col self-stretch items-center">
      {/* Image with Gradient Overlay */}
      <div className="relative w-full h-full">
        <img 
          loading="lazy" 
          src="/images/Hero.png" 
          alt="Sale background" 
          className="object-cover w-full h-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,28,36,0.6)] to-[rgba(21,28,36,0.6)]"></div>
      </div>
      
      {/* Text Content */}
      <div className="absolute inset-x-0 bottom-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center text-center text-text-inverse lg:p-none px-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-mobile-headings-h1-medium lg:text-desktop-headings-display-large-medium font-ebgaramond ">
            Sale Update: Now up to 60% off on select items
          </h1>
          <p className="paragraphsmallmedium">
            The world's greatest designers - Now on sale! T&C apply
          </p>
        </div>
        {/* Button with 32px gap */}
        <div className="mt-32 mb-16 flex justify-center items-center">
          <Button size='medium' theme='secondary' stateProp='normal'  >Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
