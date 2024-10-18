import React from 'react';
import image from "../../assets/api_vector.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const ApiIntegration: React.FC = () => {
    const router = useRouter();

    const { ref, inView } = useInView({
        threshold: 0.4, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div ref={ref} className={`px-2 lg:px-36 ${inView ? 'animate__animated animate__slideInDown' : ''}`}>
            <div className=' grid lg:grid-cols-2 gap-10 lg:gap-48'>
                <div className=' space-y-4'>
                    <h1 className=' text-textcolor font-bold text-3xl lg:text-5xl'>Seamless Api Integrations</h1>
                    <h1 className=' font-bold text-textcolor'>Effortlessly Integrate Our Verification Solutions</h1>
                    <p className='text-textcolor'>Our powerful API allows you to integrate Agregar’s verification tools directly into your existing systems with ease. From identity verification to fraud detection, our API ensures seamless functionality and scalability across various platforms, providing real-time results and enhancing operational efficiency. Start leveraging our API today to streamline your processes and stay compliant with global regulations.</p>
                    <div onClick={() => {
                        router.push("/our-solutions")
                    }} className=' flex items-center space-x-4 cursor-pointer hover:underline text-primary '>
                        <h1 className=' text-primary cursor-pointer '>Learn More</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                </div>
                <div>
                    <Image src={image} alt='no image' height={350} />
                </div>

            </div>
        </div>
    )
}

export default ApiIntegration;