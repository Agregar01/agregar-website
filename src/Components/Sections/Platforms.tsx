import React from 'react'
import ListCards from '../ListCards';
import image from "../../assets/Group 598.png";
import Image from 'next/image';
import { useInView } from "react-intersection-observer";

const Platforms: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div className='px-2 lg:px-28 bg-background pt-8 lg:pt-16'>
            <div className=' grid grid-cols-10 gap-7'>
                <div className=' col-span-10 lg:col-span-4'>
                    <div ref={ref}  className={`space-y-8 ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                        <ListCards title='Empverify' description='Automate workforce verification with our enterprise platform delivering compliant reports from local and international data sources.' />
                        <ListCards title='Validar' description='Mitigate risk associated with vendor, customer and business onboarding with our comprehensive risk management solution. Validar offers fraud detection, credit scoring, and AML screening in one comprehensive solution.' />
                        <ListCards title='Geofy' description='Revolutionize address verification leveraing 4DGIS technology.  Geofy uses image recognition, geo-tagging, and liveness detection directly from smartphones.' />
                    </div>
                </div>
                <div className=' col-span-10 lg:col-span-6'>
                    <Image
                        className=' rounded-[9px]'
                        src={image} alt='no image'
                        // layout="fill" // Fill the div
                        // objectFit="contain"
                        quality={100}
                    // priority 
                    />
                </div>

            </div>

        </div>
    )
}

export default Platforms;