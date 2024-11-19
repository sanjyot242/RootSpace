import { Button } from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
import {  ReturnIcon } from '../icons/Icon';
function CheckoutPage(){
    return(
        <>
            <div className='flex flex-col items-start gap-32 bg-bg-primary p-16 lg:px-120 lg:py-64 lg:gap-64'>
                <div className="flex flex-col gap-16 w-full">
                    {/* Logig to select only one  */}
                <span className="text-text-primary headingsh4semibold">Select an address</span>
                <Card
            state='Normal'
            trigger='Radio Button'
            showButton={true}
            showDescription={true}
            showAction={true}
            header='John Doe'
            description='Address 1'
          />
           <Card
            state='Normal'
            trigger='Radio Button'
            showButton={true}
            showDescription={true}
            showAction={true}
            header='John Doe'
            description='Address 2'
          />
           <Card
            state='Normal'
            trigger='Radio Button'
            showButton={true}
            showDescription={true}
            showAction={true}
            header='John Doe'
            description='Address 3'
          />
          <Button size="medium" theme="secondary" stateProp="normal" className="w-full">Add a new Address</Button>
                </div>
                <div className="flex flex-col items-start gap-16 w-full">
                <span className="text-text-primary headingsh4semibold">Preferred shipping</span>
                <Card
            state='Normal'
            trigger='Radio Button'
            showButton={true}
            showDescription={true}
            icon={< ReturnIcon/>}
            header='Express Shipping'
            description='2-3 business days'
          />
          <Card
            state='Normal'
            trigger='Radio Button'
            showButton={true}
            showDescription={true}
            icon={< ReturnIcon/>}
            header='Standard Shipping'
            description='5-6 business days'
          />
          {/* Take to left align */}
          <Button size="large"  stateProp="normal" theme="link" className="w-full underline ">Know more about shipping methods</Button>


                </div>
                <div className="flex flex-col items-start gap-16 w-full">
                <Button size="medium" theme="primary" stateProp="normal" className="w-full">Continue</Button>
                <Button size="medium" theme="destructive-secondary" stateProp="normal" className="w-full">Cancel Checkout</Button>
                </div>
                <div></div>
                
      </div>

        </>
            );
}

export default CheckoutPage;