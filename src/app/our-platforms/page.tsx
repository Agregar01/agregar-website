"use client";
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import platform_image from "../../assets/plattform_image.png";
import Image from 'next/image';
import emverifyImage from "../../assets/Group 598.png";
import validar_image from "../../assets/validar_image.png";
import geogy_image from "../../assets/geofy_image.png";
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import { useRouter } from 'next/navigation';
import ScrollToTopButton from '@/Components/ScrollToTopButton';



const page = () => {
    const router = useRouter();
    return (
        <div className=' outfit  bg-background'>
              <ScrollToTopButton /> 
            <MobileHeader />
            <Header />
            <div className=''>
                <Image src={platform_image} alt='' />
                <div className=' px-2 lg:px-64 py-10 lg:py-32'>
                    <div className=' space-y-3 lg:space-y-5 w-full lg:w-[70%]'>
                        <h1 className=' text-primary font-bold text-lg'>Platforms</h1>
                        <h1 className=' font-bold  text-secondary text-xl lg:text-4xl'>Choose the best Authentication and Onboarding Project for your Business</h1>
                        <p className=' text-secondary'>Be a step ahead of the competition with Agregar advanced tech-stack </p>
                        <button onClick={() => {
                            window.location.href = "mailto:sales@agregartech.com";
                        }} className=' bg-primary text-white font-semibold px-8 py-2 rounded-[6px]  outfit hover:bg-secondary'>Talk to Sales</button>
                    </div>
                    <div className=' mt-12 lg:mt-32'>
                        <h1 className=' font-bold text-center text-2xl lg:text-4xl text-secondary pb-8'>Trusted by 40+ Companies</h1>
                        <div className=' grid grid-cols-10  gap-5 lg:gap-20'>
                            <div className=' space-y-4 col-span-10 lg:col-span-4'>
                                <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Emp-verify<sup>™</sup></h1>
                                <p className=' text-textcolor'>Emp-Verify, our enterprise platform, is designed to automate and promptly generate background reports for potential new hires and current employees. This is accomplished through API integrations with various local and international data sources, universities, sanctions lists, criminal records databases and credit referencing bureaus. Emp-Verify produces compliant verification reports sourced from data partners, empowering HR managers/recruiters to make well-informed hiring decisions while protecting their organization from external threats and the adverse consequences and expenses associated with a poor hire. Statistics indicate that approximately 80% of CVs contain falsified information, often aimed at concealing details that could adversely affect a candidate's employment prospects.</p>
                                <div onClick={() => {
                                    window.open('https://www.empverify.com/', '_blank');
                                }} className=' flex items-center space-x-4 cursor-pointer hover:underline text-primary'>
                                    <h1 className=' text-primary'>Learn More</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </div>
                            </div>
                            <div className='col-span-10 lg:col-span-6'>
                                <Image
                                    className=' rounded-[9px]'
                                    src={emverifyImage} alt='no image'
                                    height={700}
                                    // width={800}
                                    // layout="fill" // Fill the div
                                    objectFit="cover"
                                    quality={100}
                                // priority 
                                />
                            </div>

                        </div>
                        <div className=' grid grid-cols-10 mt-10 gap-5 lg:gap-24'>
                            <div className=' col-span-10 lg:col-span-6'>
                                <Image
                                    className=' rounded-[9px]'
                                    src={validar_image} alt='no image'
                                    height={700}
                                    width={800}
                                    // layout="fill" // Fill the div
                                    objectFit="cover"
                                    quality={100}
                                />
                            </div>
                            <div className=' col-span-10 lg:col-span-4'>
                                <div className=' space-y-4'>
                                    <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Validar<sup>™</sup></h1>
                                    <p className=' text-textcolor'>Validar is our all-encompassing risk management solution created to minimize risks connected with customer, vendor, and business onboarding. Engineered to comply with all regulatory standards, Validar includes built-in features such as fraud detection monitoring, credit scoring, consumer insicghts and analytics, as well as AML, Fraud, and Terrorist screening components. By doing so, Validar guarantees protection for both consumers and institutions, all while ensuring regulatory compliance.</p>
                                    <div onClick={() => {
                                        router.push("/platforms/geofy");
                                    }} className=' flex items-center space-x-4 cursor-pointer hover:underline text-primary'>
                                        <h1 className=' text-primary'>Learn More</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' grid grid-cols-10 mt-10 gap-24'>
                            <div className=' col-span-10 lg:col-span-4'>
                                <div className=' space-y-4'>
                                    <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Geofy<sup>™</sup></h1>
                                    <p className=' text-textcolor'>Validar is our all-encompassing risk management solution created to minimize risks connected with customer, vendor, and business onboarding. Engineered to comply with all regulatory standards, Validar includes built-in features such as fraud detection monitoring, credit scoring, consumer insicghts and analytics, as well as AML, Fraud, and Terrorist screening components. By doing so, Validar guarantees protection for both consumers and institutions, all while ensuring regulatory compliance.</p>
                                    <div onClick={() => {
                                        router.push("/platforms/validar");
                                    }} className=' flex items-center space-x-4 cursor-pointer hover:underline text-primary'>
                                        <h1 className=' text-primary'>Learn More</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className=' col-span-10 lg:col-span-6'>
                                <Image
                                    className=' rounded-[9px]'
                                    src={geogy_image} alt='no image'
                                    height={700}
                                    width={800}
                                    // layout="fill" // Fill the div
                                    objectFit="cover"
                                    quality={100}
                                // priority 
                                />
                            </div>

                        </div>
                        <div className=' mt-7 lg:mt-36'>
                            <ContactSales />
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page;