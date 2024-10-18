"use client"
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import solutions_bg from "../../assets/solution_bg.png";
import Image from 'next/image';
import solutions_vector from "../../assets/our-solutions_vector.png";
import frame1 from "../../assets/Frame 621.png";
import frame2 from "../../assets/Frame 622.png";
import frame3 from "../../assets/Frame 624.png";
import frame4 from "../../assets/Frame 625.png";
import frame5 from "../../assets/Frame 627.png";
import SolutionsCards from '@/Components/SolutionsCards';
import interaction from "../../assets/ineraction_bg.png";
import ContactSales from '@/Components/Sections/ContactSales';
import SolutionsCards2 from '@/Components/SolutionsCards2';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import { useRouter } from 'next/navigation';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {

    const router = useRouter();

    const SolutionsList = [
        {
            image: frame1,
            solutionTitle: "KYE (Know Your Employee)",
            description: "Utilize advanced AI-driven identity verification (IDV) to offer a smooth onboarding experience, reduce fraud, and streamline compliance with anti-money laundering (AML) regulations.",
            route:"/solutions/know-your-employee"

        },
        {
            image: frame3,
            solutionTitle: "KYC (Know Your Customer) Onboarding",
            description: 'Accelerate your customer onboarding process by tenfold with our AI-powered KYC solutions. Eliminate documentation hassles with seamless digital journeys and ensure compliance while delivering a superior onboarding experience.',
            route:"/solutions/know-your-customer"

        },
        {
            image: frame2,
            solutionTitle: "KYB (Know Your Business) Verification",
            description: "Streamline your vendor and business onboarding with Agregar's AI-driven insights. We help you verify identities, assess financial stability, and ensure compliance with legal and regulatory requirements.",
            route:"/solutions/vendor-onboarding"
        },

        {
            image: frame4,
            solutionTitle: "KYI (Know Your Investors)",
            description: "Utilize advanced AI-driven identity verification (IDV) to offer a smooth onboarding experience, reduce fraud, and streamline compliance with anti-money laundering (AML) regulations.",
            route:"/solutions/know-your-investor"
        },
        {
            image: frame5,
            solutionTitle: "AML",
            description: "Verify businesses globally with access to data from over 225 databases. Our KYB solution ensures thorough checks for business registration, ownership structures, and financial health, protecting your business from potential risks.",
            route:"/solutions/anti-money-laundering"

        },

        {
            image: frame5,
            solutionTitle: "Vendor and Business Onboarding",
            description: "Streamline your vendor and business onboarding with Agregar's AI-driven insights. We help you verify identities, assess financial stability, and ensure compliance with legal and regulatory requirements.",
            route:"/solutions/vendor-onboarding"
        }
    ]
    return (
        <div>
             <ScrollToTopButton />
            <MobileHeader />
            <Header />
            <div>
                <Image src={solutions_bg} alt='' />
                
                <div className=' bg-background outfit'>
                    <div className=' grid lg:grid-cols-10 px-2 lg:px-28 py-10 lg:py-32'>
                        <div className=' col-span-10 lg:col-span-6'>
                            <div className=' space-y-3 lg:space-y-5 '>
                                <h1 className=' text-primary font-bold text-lg'>Authentication Solutions for All</h1>
                                <h1 className=' font-bold  text-secondary text-xl lg:text-4xl'>Whether you are looking for employee background verification or business due diligence or looking to gain financial intelligence – we have got you covered!</h1>
                                <button className=' bg-primary text-white font-semibold px-8 py-2 rounded-[6px]  outfit'>Talk to Sales</button>
                            </div>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <div className=' flex justify-end'>
                                <Image src={solutions_vector} alt='' height={400} width={400} />
                            </div>

                        </div>
                    </div>
                    <div className=' grid grid-cols-10 px-2  lg:px-44'>
                        <div className=' col-span-10 lg:col-span-4'>
                            <h1 className=' font-bold text-[28px] lg:text-[40px] text-textcolor'>We help more than 40+ clients to grow their business</h1>
                        </div>
                        <div className=' col-span-10 lg:col-span-6'>
                            <p className=' text-graytext1'>we provide comprehensive regulatory and verification solutions designed to streamline business operations and reduce risks across various industries. Our suite of tools utilizes cutting-edge AI and data-driven technologies to ensure compliance, security, and efficiency.</p>
                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2  grid-cols-1 px-2  lg:px-44  gap-4 lg:gap-16 py-16'>
                        {
                            SolutionsList.map((list: any) => {
                                return (
                                    <SolutionsCards2 onClick={() => {
                                        router.push(`${list.route}`)
                                    }} description={list.description} image={list.image} solutionTitle={list.solutionTitle} />
                                );
                            })
                        }
                    </div>
                    <div className=' relative'>
                        <Image src={interaction} alt='' />
                        <div className=' absolute inset-0 z-10'>
                            <div className=' grid place-items-center h-svh'>
                                <div className=' space-y-8 lg:w-[50%] pt-20'>
                                    <h1 className=' text-white text-center'>Each of these solutions is designed to help your business thrive in today’s complex regulatory environment. With Agregar, you can trust that your onboarding and verification processes are secure, compliant, and efficient.</h1>
                                    <div className=' grid place-items-center'>
                                        <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-3 rounded-[4px]  outfit'>Book a Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <Image src={interaction} alt='' />
                        <div>
                            <h1 className=' text-center'>Each of these solutions is designed to help your business thrive in today’s complex regulatory environment. With Agregar, you can trust that your onboarding and verification processes are secure, compliant, and efficient.</h1>
                            <div className=' grid place-items-center'>
                                <button className=' bg-primary text-white font-semibold px-6 py-2 rounded-[6px]  outfit'>Book a Demo</button>
                            </div>
                        </div>
                    </div> */}
                    <div className=' py-12 lg:py-44 lg:px-28 px-2'>
                        <ContactSales />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page;