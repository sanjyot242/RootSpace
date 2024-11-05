

import { Button } from './Buttons/Button';

const FeatureSection = ({ title, description, buttonText, imageSrc, imageAlt, reverse = false }) => {
  return (
    <section
      className={`flex flex-col justify-center items-center gap-16 p-16 lg:gap-64 lg:px-120 lg:py-64 lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start flex-1 gap-32">
        <div className="flex flex-col items-center lg:items-start gap-8 text-text-primary">
          <h2 className="text-center lg:text-left text-mobile-headings-h1-medium font-ebgaramond lg:text-desktop-headings-display-large-medium">
            {title}
          </h2>
          <p className="text-center text-paragraph-small-regular font-ebgaramond lg:text-mobile-headings-h5-regular">
            {description}
          </p>
        </div>
        <Button size="small" stateProp="normal" theme="primary">
          {buttonText}
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full rounded aspect-[1.17] min-w-[240px]"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
