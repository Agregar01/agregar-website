"use client";
import GeofyHeader from '@/Components/GeofyHeader';
import React from 'react';
import Rsik1 from "../../../assets/risk 1.png";
import Image from 'next/image';
import ValidarHeader from '@/Components/ValidarHeader';
import ValidarTileList from '@/Components/ValidarTileList';
import about_validar from "../../../assets/about_validar.png";
import validar_hand_scanner from "../../../assets/validar_hand_scanner.png";
import validar_vector_book from "../../../assets/validar_vector_book.png";
import V_group1 from "../../../assets/V_group1.png";
import V_group2 from "../../../assets/V_group2.png";
import V_group3 from "../../../assets/V_group3.png";
import V_group4 from "../../../assets/V_group4.png";
import V_group5 from "../../../assets/V_group5.png";
import V_group6 from "../../../assets/V_group6.png";
import GeofyFAQCards from '@/Components/GeofyFAQCards';
import v_client1 from "../../../assets/v_client1.png";
import v_client2 from "../../../assets/v_client2.png";
import v_client3 from "../../../assets/v_client3.png";
import v_client4 from "../../../assets/v_client4.png";
import v_client5 from "../../../assets/v_client5.png";
import v_client6 from "../../../assets/v_client6.png";

const page = () => {
    return (
        <div className=' outfit'>
            <ValidarHeader />
            <div>
                <div className=' grid place-items-center my-10 lg:my-28'>
                    <div className=' lg:w-[50%] w-full'>
                        <div className=' space-y-3 lg:space-y-7'>
                            <h1 className=' text-3xl lg:text-[58px] font-bold text-center text-[#3C4D19]'>Compliance Risk </h1>
                            <h1 className=' text-3xl lg:text-[58px] font-bold text-center text-[#3C4D19]'>Management Platform</h1>
                        </div>

                        <div className=' space-y-3 lg:space-y-10'>

                            <p className=' font-bold  text-lg lg:text-xl text-center pt-4 lg:pt-9 text-[#3C4D19]'>Geofy is our industry-first, digital address verification product</p>

                            <div className=' grid place-items-center'>
                                <button className=' bg-[#79AB51] text-black px-14 py-5 rounded-[6px]'>Request a Demo</button>
                            </div>

                        </div>
                    </div>
                    <Image alt="" src={Rsik1} height={700} />
                </div>

            </div>
            <div className=' px-2 lg:px-44'>
                <ValidarTileList title='About Validar' />
                <div className=' grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-12 gap-5'>
                    <div className=' space-y-6'>
                        <h1 className=' text-base lg:text-2xl font-light'>Validar is our comprehensive risk management solution designed to mitigate risk associated with customer and vendor onboarding. Validar is designed to meet all regulatory compliance standards. With an inbuilt fraud detection monitoring and AML screening component, validar ensures both clients and institutions are protected.</h1>
                        <h1 className='  text-base lg:text-2xl font-light'>Within the last 8 years the permissible threshold for financial institutions involving suspicious transactions has been reduced by 10x.
                        </h1>
                        <h1 className=' text-base lg:text-2xl font-light'>Consequently financial institution have increased compliance requirements for new and existing clients.</h1>
                    </div>
                    <div>
                        <Image src={about_validar} alt='' />
                    </div>

                </div>

                <div className='mt-6 lg:mt-12'>
                    <ValidarTileList title='Validar Perks' />
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7 mt-6 lg:mt-12'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#3C4D19]  font-semibold text-2xl lg:text-4xl mt-auto'>Instantaneous scam detection using AI</h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={validar_hand_scanner} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>With our AI-powered KYC solutions and services, which are based on picture and liveness recognition technologies, machine learning capabilities, and deep search algorithms, you can transform your KYC and customer identification verification while also improving customer experience.</h1>
                </div>

                <div className='mt-6 lg:mt-12'>
                    <ValidarTileList title='Validar Perks' />
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7 mt-6 lg:mt-12'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#3C4D19]  font-semibold text-2xl lg:text-4xl mt-auto'>Reduce running expenses by up to 70% and TAT by more than 80%.
                            </h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={validar_vector_book} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Our Digital and Video KYC solutions enable instant verification with the power of AI, ML, and deep search algorithms ensuring the fastest onboarding process for your customers, helping you in reducing account activation turnaround time by up to 80% while also reducing operational costs, helping your organisation scale up at speed. By automating KYC, you can go to market much more quickly and save up to 70% on business expenses.</h1>
                </div>
                <div className='mt-6 lg:mt-12'>
                    <ValidarTileList title='Validar Perks' />
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7 mt-6 lg:mt-12'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#3C4D19]  font-semibold text-2xl lg:text-4xl mt-auto'>Utilize verified records to remain compliant.
                            </h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={validar_vector_book} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Track the development of numerous cases at once and receive thorough analyses and verified reports with each newly started case. You can remain on top of the regulation compliance framework because our KYC solutions are data security competent and follow the international standards for data protection.</h1>
                </div>
                <div className='mt-6 lg:mt-20'>
                    <ValidarTileList title='Key Checks in our KYC Solutions' />
                    <div className=' grid lg:grid-cols-2 grid-cols-1 pt-3 lg:pt-20'>
                        <Image alt='' src={V_group1} />
                        <Image alt='' src={V_group2} />
                        <Image alt='' src={V_group3} />
                        <Image alt='' src={V_group4} />
                        <Image alt='' src={V_group5} />
                        <Image alt='' src={V_group6} />
                    </div>

                </div>

                <div className='mt-6 lg:mt-20'>
                    <ValidarTileList title='FAQS' />
                    <div className=' lg:mt-9 mt-3 space-y-7'>
                        <GeofyFAQCards title='How will Agregar verify that the data for the selfie, photo ID, and home photo in the digital location authentication is accurate?' />
                        <GeofyFAQCards title='How will Agregar safeguard the data provided by the applicant (such as associate pictures and photo IDs)?' />
                        <GeofyFAQCards title='How precise is GPS for monitoring global coordinates?' />
                        <GeofyFAQCards title='What is the turnaround time for the actual location check?' />
                        <GeofyFAQCards title='How can we verify the veracity of the actual location verification that the vendor has claimed to have verified?' />
                        <GeofyFAQCards title="Which candidate's permanent or present location should we check?" />
                    </div>
                </div>

                <div className=' mt-5 lg:mt-24'>
                    <h1 className=' text-xl lg:text-3xl  font-bold pb-4 text-[#3C4D19]'>Solutions Tailored to Your Needs</h1>
                    <div className=' border-b border-[#2B3190]'>

                    </div>
                    <div className=' w-full lg:w-[50%] py-6'>
                        <h1 className=' text-base lg:text-2xl font-light'>Created by a team of Ghanaian technology innovators and verification experts, our platform helps you hire at scale, improve compliance, and streamline operations.</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-3 gap-6'>
                    <Image src={v_client1} alt='' />
                    <Image src={v_client2} alt='' />
                    <Image src={v_client3} alt='' />
                    <Image src={v_client4} alt='' />
                    <Image src={v_client5} alt='' />
                    <Image src={v_client6} alt='' />
                </div>

                <div>
                    <div className=' flex items-center justify-center lg:justify-end mt-10 mb-4'>
                        <div className=' flex items-center space-x-8'>
                            <h1 className=' text-xl text-[#2B9035] font-bold cursor-pointer hover:underline'>Solutions</h1>
                            <h1 className=' text-xl text-[#2B9035] font-bold cursor-pointer hover:underline'>Login</h1>
                            <h1 className=' text-xl text-[#2B9035] font-bold cursor-pointer hover:underline'>About Our Company</h1>
                        </div>
                    </div>
                    <div className=' border-b border-[#555AA6]'>

                    </div>
                    <div className=' py-6'>
                        <div className=' flex items-center space-x-2'>
                            <h1 className=' text-2xl text-[#cccccc]'>&#169;</h1>
                            <h1 className=' text-xl text-[#cccccc]'>Geofy 2024</h1>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;