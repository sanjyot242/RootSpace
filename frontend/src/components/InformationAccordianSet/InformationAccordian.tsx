import Accordion from '../Accordian/Accordion';
import { InfoIcon, EyeIcon, SettingIcon, StarIcon } from '../../icons/Icon';

function InformationAccordianSet() {
  return (
    <div className='flex flex-col  gap-16 self-stretch  p-16 lg:gap-32 lg:px-120 lg:py-64   '>
      <div className='text-shades-black font-ebgaramond text-mobile-headings-h5-medium font-medium normal'>
        Additional Information
      </div>
      <div className='flex flex-col  gap-16 self-stretch'>
        <Accordion
          label='Label 1'
          description='Description 1'
          data='Data 1
              dsfjdsk'
          showDescription={true}
          showData={true}
          icon={<InfoIcon />}
        />
        <Accordion
          label='Product Information'
          description='Description 1'
          data='Data 1
              dsfjdsk'
          showDescription={true}
          showData={true}
          icon={<EyeIcon />}
        />
        <Accordion
          label='Highlights'
          description='Description 1'
          data='Data 1
              dsfjdsk'
          showDescription={true}
          showData={true}
          icon={<SettingIcon />}
        />
        <Accordion
          label='Composition'
          description='Description 1'
          data='Data 1
              dsfjdsk'
          showDescription={true}
          showData={true}
          icon={<StarIcon />}
        />
      </div>
    </div>
  );
}

export default InformationAccordianSet;
