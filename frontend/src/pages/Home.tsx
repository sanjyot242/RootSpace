
import HeroBanner from '../components/HeroBanner.tsx';

import NewsletterSignup from '../components/NewsletterSignup.tsx';
import { newProducts, trendingProducts } from '../../dummyData/data';
import FeatureSection from '../components/FeatureSection.tsx';
import CustomizableSection from '../components/CustomizableSection.tsx';

function Home() {
  return (
    <>
      <HeroBanner />
      <CustomizableSection
        title='New in: Daily selection from the worlds best brands.'
        products={newProducts}
        subtitle={''}
      />
      <FeatureSection
        title='Streetwear for anywhere'
        description="The world's greatest designers - Now on sale! T&C apply"
        buttonText='Shop now'
        imageSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/27ea2a498441aad79bc1f49dd6372beb3fa2823073c9c23871be7b211087df66?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
        imageAlt='Streetwear collection'
        
      />
      <FeatureSection
        title='Sale Update: Now upto 60% off on select items'
        description="The world's greatest designers - Now on sale! T&C apply"
        buttonText='Shop now'
        imageSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/257009a17ef1733b5ee3c518fb6f9771c820cd7d675cb52a6fc78d6e9de0bd45?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
        imageAlt='Sale items'
        reverse={true}
      />
      <CustomizableSection
        title='New In'
        products={trendingProducts}
        subtitle={''}
      />
      <CustomizableSection
        title='Trending now'
        products={trendingProducts}
        subtitle={''}
      />
      <NewsletterSignup />
    </>
  );
}

export default Home;
