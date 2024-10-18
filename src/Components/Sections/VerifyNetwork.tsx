"use client"
import React from 'react';
import image from "../../assets/Vector (1).png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';


const VerifyNetwork = () => {
    const router = useRouter();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div ref={ref} className={`grid lg:grid-cols-2 grid-cols-1 px-2 lg:px-52  bg-background pt-5 pb-24 gap-8  lg:gap-36 outfit ${inView ? 'animate__animated animate__slideInDown' : ''}`}>
            <div>
                <Image height={350} alt='no image' src={image} />
            </div>
            <div className=' space-y-5 mt-11'>
                <h1 className=' font-bold lg:text-5xl text-2xl text-secondary'>Join Our Ground Verifiers Network</h1>
                <p className=' text-[#2A2929]'>Play a crucial role in verifying physical addresses, court records, guarantors, and assets in your region. Earn up to 300 cedis daily, work flexibly, and help build trust in your community.</p>
                <div onClick={() => {
                   router.push("/verifiers")
                }} className=' flex items-center space-x-4 cursor-pointer'>
                    <h1 className=' text-primary  hover:underline'>Learn More</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>

        </div>
    )
}

export default VerifyNetwork;