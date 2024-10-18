import React from 'react';
import image from "../../assets/Mask group.png";
import Image from 'next/image';
import TestimoniasCards from '../TestimoniasCards';
import { useInView } from 'react-intersection-observer';


const Testtimonials: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.4, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });



    return (
        <div className='grid place-items-center h-[560px]  relative w-full px-2 lg:px-28 '>
            <Image
                // className=' lg:py-20 py-0'
                src={image} // Replace with your image path
                alt="Background image"
                layout="fill" // Fill the div
                objectFit="cover" // Cover the entire div
                quality={100} // Optional: set image quality
                priority // Optional: load image with priority
            />
            <div className='relative z-10'>
                <div ref={ref} className={`space-y-4 py-24  ${inView ? 'animate__animated animate__slideInDown' : ''}`}>
                    <h1 className=' font-bold text-xl text-white text-center'>Client Success Stories</h1>
                    <h1 className=' text-center font-bold text-3xl lg:text-5xl text-white'>Trust of Clients</h1>
                </div>
                <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-4 gap-8 ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                    <TestimoniasCards clientCompany='Unimas Microfinance' clientName='Vera Serwah Boateng' stories='Agregar Technologies has been a valuable
partner to us, providing background checks that
have significantly contributed to our success.
Their team is not only skilled and knowledgeable
but also attentive to detail and committed to
 delivering the highest quality of work. Their
innovative approach and problem-solving skills
were instrumental in getting verifications
completed within the turnaround time. I am
confident that Agregar will bring the same
level of commitment and excellence to your
organisation as they have to ours.' />
                    <TestimoniasCards clientName='Kofi Asare Afful' clientCompany='Newmont Africa' stories='One aspect that particularly stands out in our
partnership is the efficiency and timeliness with
which Agregar Company operates. 
They consistently
adhere to their commitment of delivering reports
within a reasonable timeframe, often posting them
on their secure website portal within a turnaround
time of just four weeks. This punctuality has afforded
us the ability to make informed, well-considered
hiring decisions while ensuring minimal disruption' />
                    <TestimoniasCards clientName='Andrews Bodom' clientCompany='Promasidor Ghana LTD' stories='The services we have received from you so far
is at par with what we expected. We can now be
confident a detailed background check of our
prospective employees will be conducted by
professionals like Agregar.' />
                    <TestimoniasCards clientName='Susana Ampofo' clientCompany='10th Capital Investments' stories='Agregar Ltd has been very instrumental in the
conducting of employee background checks
for our organization. In April, 2024, 10th Capital
engaged Agregar Ltd to conduct checks on
our employees to facilitate an audit. Agregar
Ltd assisted us with these checks with a sense
of urgency and we were able to complete the
audit as expected. We recommend Agregar to
any financial institution or organization that
understands the need for compliance and
accountability. We recommend Agregar Ltd
unreservedly.' />
                </div>
            </div>
        </div>
    )
}

export default Testtimonials;