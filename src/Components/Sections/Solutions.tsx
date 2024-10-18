"use client"
import React from 'react';
import frame1 from "../../assets/Frame 621.png";
import frame2 from "../../assets/Frame 622.png";
import frame3 from "../../assets/Frame 624.png";
import frame4 from "../../assets/Frame 625.png";
import frame5 from "../../assets/Frame 627.png";
import SolutionsCards from '../SolutionsCards';
import { useRouter } from 'next/navigation';
import { useInView } from "react-intersection-observer";



const Solutions: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });


    const router = useRouter();
    const SolutionsList = [
        {
            image: frame1,
            solutionTitle: "KYE (Know Your Employee)",
            route:"/solutions/know-your-employee"

        },
        {
            image: frame2,
            solutionTitle: "KYB (Know Your Business) Verification",
             route:"/solutions/know-your-business"
        },
        {
            image: frame3,
            solutionTitle: "KYC (Know Your Customer) Onboarding",
            route:"/solutions/know-your-customer"
        },
        {
            image: frame4,
            solutionTitle: "KYI (Know Your Investors)",
            route:"/solutions/know-your-investor"
        },
        {
            image: frame5,
            solutionTitle: "Vendor and Business Onboarding",
            route:"/solutions/vendor-onboarding"
        }
    ]
    return (

        <div
            ref={ref}
            className={`bg-[#F1F6FB] py-10 lg:py-28 ${inView ? 'animate__animated animate__slideInDown' : ''}`}
        >
            <div className='grid lg:grid-cols-3 grid-cols-1 px-2 lg:px-52 gap-4'>
                <div className='p-4  bg-white  rounded-[9px] border-2 border-[#CCCCCC]'>
                    <div className=' lg:pt-10 py-8'>
                        <div>
                            <h1 className=' font-bold text-3xl text-secondary text-center outfit'>Explore Our Solutions</h1>
                            <p className=' text-secondary outfit text-center'>Comprehensive Verification, Tailored to your</p>
                        </div>
                    </div>
                </div>
                {
                    SolutionsList.map((list: any) => {
                        return (
                            <SolutionsCards  onClick={() => {
                                router.push(`${list.route}`)
                            }} image={list.image} solutionTitle={list.solutionTitle} />
                        );
                    })
                }

            </div>
            <div className=' grid place-items-center mt-6'>
                <button onClick={() => {
                    router.push("/our-solutions");
                }} className=' bg-primary outfit text-white font-semibold px-8  rounded-[6px]  hover:bg-secondary py-2'>Learn More</button>
            </div>
        </div>
    )
}

export default Solutions;