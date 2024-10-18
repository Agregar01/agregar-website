"use client";
import React from 'react';
import knv_bg from "../../../assets/knv_bg.png";
import Header from '@/Components/Header';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import kyv_vector from "../../../assets/kyv_vector.png";
import investor_vector from "../../../assets/investor_vector.png";
import IndustriesPointCards from '@/Components/IndustriesPointCards';
import kny_graph from "../../../assets/kyn_graph.png";
import kye_dot from "../../../assets/kye_dot.png";
import kybvector_scan from "../../../assets/kybvector_scan.png";
import validar_image from "../../../assets/validar_image.png";
import smiling_doctor from "../../../assets/smiling-female-doctor-standing-with-medical-staff--7X93MWV.png";
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
             <ScrollToTopButton /> 
            <MobileHeader />
            <Header />
            <Image src={knv_bg} alt='' />
            <div className=' px-2 lg:px-44'>
                <div className=' grid grid-cols-10 lg:pt-24 pt-4'>
                    <div className=' col-span-10 lg:col-span-5'>
                        <div className=' space-y-3'>
                            <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Know Your Investor</h1>
                            <button onClick={() => {
                                window.location.href = "mailto:sales@agregartech.com";
                            }} className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to Sales</button>
                        </div>
                        <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Speed up investor verification with Know Your Investor</h1>
                            <p className=' text-graytext1'>Utilize advanced AI-driven identity verification (IDV) to offer a smooth onboarding experience, reduce fraud, and streamline compliance with anti-money laundering (AML) regulations.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-5'>
                        <div className=' flex justify-end'>
                            <Image src={kyv_vector} alt='' height={320} />
                        </div>
                    </div>
                </div>
                <div className=' lg:py-20 py-9'>
                    <h1 className=' font-bold lg:text-3xl text-secondary  text-xl'>The Challenge of Investor Verification and International Regulations</h1>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-10'>
                    <div>
                        <Image height={300} src={investor_vector} alt='' />
                    </div>
                    <div className=' space-y-3'>
                        <p className=' text-graytext1'>Efficiently verifying investors while adhering to international regulations presents significant challenges. Each jurisdiction has distinct requirements for investor accreditation, making the process intricate and time-consuming. Organizations must carefully examine financial statements and other documents to ensure compliance, which can be both costly and labor-intensive. Navigating regulatory frameworks designed to protect investors and prevent money laundering and terrorist financing adds another layer of complexity.</p>
                        <p className=' text-graytext1'>As the number of investors increases, manual verification becomes increasingly impractical. While there are various automated and third-party solutions available, they often come with integration issues and inconsistent accuracy, leading to potential additional costs from rework or finding new providers.
                        </p>
                        <p className=' text-graytext1'>An effective Know Your Investor (KYI) solution must adhere to both domestic and international regulations, accurately verify information to avoid legal issues, and scale efficiently to handle large volumes of investor verifications.</p>
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Global Insights for Comprehensive Investor Verification' description='Achieve robust real-time compliance with Shufti’s KYI/AML solutions:
Our AI-driven technology enables instant validation of investor identities and corporate documents, ensuring your organization meets all domestic and international KYC/AML regulations, as well as private placement regulations like Rule 506(b) and 506(c).' />
                    </div>
                    <div>
                        <Image height={200} src={kny_graph} alt='' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Streamline Investor Onboarding and Reduce Costs' description='Cut investor onboarding expenses by up to 60% with the help of our expert money laundering reporting officers (MLROs). Shufti’s skilled compliance and MLRO teams verify investor identities and corporate documents in real-time. Alternatively, you can manage investor verification yourself for complete control over their information.' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Always Know Your Investors' description='Leverage our extensive range of investor verification services to confirm eligibility and qualification. We provide a broad spectrum of verifications using various documents, supported by global coverage in over 240 countries and 150 languages.' />
                    </div>

                </div>
                <div className=' lg:pt-12 pt-7 pb-6'>
                    <h1 className=' font-bold lg:text-3xl text-secondary text-xl'>How Agregar’s  KYI Process Works</h1>
                </div>
                <div className=' grid grid-cols-10 gap-0 lg:gap-10'>
                    <div className=' col-span-10 lg:col-span-7'>
                        <div className=' space-y-5'>
                            <div>
                                <div className=' flex items-center  space-x-4'>
                                    <Image src={kye_dot} alt='' height={17} />
                                    <h1 className=' font-bold text-lg lg:text-xl text-secondary'>Establish MLRO Protocol:</h1>
                                </div>
                                <div className=' pl-8'>

                                    <p className=' text-base lg:text-xl text-secondary font-medium'>Determine whether Shufti or your own team will oversee the gathering and evaluation of information.</p>
                                </div>

                            </div>
                            <div>
                                <div className=' flex items-center  space-x-4'>
                                    <Image src={kye_dot} alt='' height={17} />
                                    <h1 className=' font-bold text-lg lg:text-xl text-secondary'>Investor Verification and Identity Validation:
                                    </h1>
                                </div>
                                <div className=' pl-8'>

                                    <p className=' text-base lg:text-xl text-secondary font-medium'>Ensure smooth verification by having investors upload their government IDs and other business-related documents. Shufti simplifies the validation of these documents and performs screening against more than 1,700 watchlists, using our services or your MLRO experts.</p>
                                </div>

                            </div>
                            <div>
                                <div className=' flex items-center  space-x-4'>
                                    <Image src={kye_dot} alt='' height={17} />
                                    <h1 className=' font-bold text-lg lg:text-xl text-secondary'>Data Acquisition:
                                    </h1>
                                </div>
                                <div className=' pl-8'>

                                    <p className=' text-base lg:text-xl text-secondary font-medium'>Retrieve data from pertinent global sources, such as articles of association, proof of address, credit reports, ownership records, ID documents, director and shareholder lists, bank statements, incorporation certificates, sources of funds/wealth, and professional certificates.</p>
                                </div>

                            </div>
                            <div>
                                <div className=' flex items-center  space-x-4'>
                                    <Image src={kye_dot} alt='' height={17} />
                                    <h1 className=' font-bold text-lg lg:text-xl text-secondary'>Secure Results:
                                    </h1>
                                </div>
                                <div className=' pl-8'>

                                    <p className=' text-base lg:text-xl text-secondary font-medium'>Store the validation results securely for efficient lifecycle management and comprehensive reporting.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' col-span-8 lg:col-span-3 pt-10 lg:pt-0'>
                        <Image src={kybvector_scan} alt='' />
                    </div>
                </div>
                <div className=' grid grid-cols-10 mt-10 gap-5 lg:gap-24 px-0 lg:px-16 lg:pt-24 pt-7'>

                    <div className=' col-span-10 lg:col-span-4'>
                        <div className=' space-y-4 '>
                            <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Validar</h1>
                            <p className=' text-textcolor'>Validar is our all-encompassing risk management solution created to minimize risks connected with customer, vendor, and business onboarding. Engineered to comply with all regulatory standards, Validar includes built-in features such as fraud detection monitoring, credit scoring, consumer insicghts and analytics, as well as AML, Fraud, and Terrorist screening components. By doing so, Validar guarantees protection for both consumers and institutions, all while ensuring regulatory compliance.</p>
                            <div className=' flex items-center space-x-4 cursor-pointer hover:underline hover:text-primary'>
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
                            src={validar_image} alt='no image'
                            height={700}
                            width={800}
                            // layout="fill" // Fill the div
                            objectFit="cover"
                            quality={100}
                        />
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-6 lg:py-28 lg:px-16 px-2 gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-xl text-secondary pb-4'>How to Get Started with Agregar's
                                Document Verification Solution</h1>
                        </div>
                        <div className=' pt-5 space-y-4'>
                            <p className=' text-textcolor'>Don’t let document fraud put your business at risk. With Agregar Technologies' Document Verification solution, you can ensure the integrity of your operations by verifying documents quickly and securely.</p>
                        </div>
                        <div className=' pt-10'>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                        </div>
                    </div>

                    <div>
                        <Image alt='' src={smiling_doctor} />
                    </div>

                </div>
                <div>
                    <ContactSales />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page