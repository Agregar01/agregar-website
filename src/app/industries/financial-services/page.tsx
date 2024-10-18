import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import financial_bg from "../../../assets/financial_bg.png";
import financial_vector from "../../../assets/financial_vector.png";
import IndustriesPointCards from '@/Components/IndustriesPointCards';
import Transaction_Vector from "../../../assets/transaction_vector.png";
import Footer from '@/Components/Footer';
import businessVector from "../../../assets/business_intVector.png";
import alternateVector from "../../../assets/alternat_data_vector.png";
import IndustriesCard from '@/Components/IndustriesCard';
import VeriificationsCards from '@/Components/VeriificationsCards';
import Address from "../../../assets/Address.png";
import ML from "../../../assets/Money laundering.png";
import Social_Media from "../../../assets/Social media.png";
import CreditCard from "../../../assets/Credit card.png";
import Employment from "../../../assets/Employment.png";
import GraduationCap from "../../../assets/Graduation cap.png";
import ID from "../../../assets/ID.png";
import Refer from "../../../assets/Refer.png";
import HandCoff from "../../../assets/Handcuffs.png";
import Vacine from "../../../assets/Vaccine.png";
import Justice from "../../../assets/Justice.png";
import Portfolio from "../../../assets/Portfolio.png"
import ContactSales from '@/Components/Sections/ContactSales';
import Smilingface from "../../../assets/smiling-female.png"
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={financial_bg} alt='' />
           
            <div className='px-2 lg:px-44 '>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-7'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Banking & Financial Services</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Your Trusted Partner in AI-Driven Financial Fraud and Risk Management</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>Your Trusted Partner in AI-Driven Financial Fraud and Risk Management
                                Empower your business with regulatory-compliant solutions that establish trust throughout every phase of your digital onboarding and verification processes.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-3'>
                        <div className=' flex justify-end'>
                            <Image src={financial_vector} alt='' height={300} />
                        </div>
                    </div>
                </div>
                <div className=' px-2 lg:px-20 lg:pt-24 pt-8'>
                    <div className=' space-y-4'>
                        <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Transform Your Customer Experience with AI/ML-Powered Technologies</h1>
                        <p className=' text-graytext1'>Leverage cutting-edge authentication technology and alternative data analysis for seamless and risk-free onboarding and verification processes.</p>
                    </div>
                    <div className=' pt-4 lg:pt-8'>
                        <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>End-to-End Digital Transformation and Risk Assessment Use Cases for Banks and Financial Services</h1>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16 lg:px-8 px-0'>
                        <div>
                            <IndustriesPointCards showdescription header='Stay Ahead of Financial Frauds' description='Protect your organization with secure, intelligent solutions. Our AI-driven technology ensures real-time data extraction and validation, enabling you to uncover true customer identities and prevent fraudulent activities.' />
                        </div>
                        <div>
                            <IndustriesPointCards showdescription header='Tailored Identity Verification Journeys' description='Each business is unique, and so should be your identity verification process. We offer flexible options to either buy or build your verification system, perfectly aligned with your specific business needs.' />
                        </div>
                        <div>
                            <IndustriesPointCards showdescription header='Unmatched Due Diligence Expertise' description='We bring unparalleled expertise to your fraud and risk management strategies. Join our community of satisfied clients and witness the difference.' />
                        </div>

                    </div>

                    <div className=' pt-7 lg:pt-32'>
                        <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Solutions for Enabling Digital Transformation in Banking and Financial Services</h1>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>
                        <div>
                            <div className=' border-b border-[#dddddd] space-y-4'>
                                <h1 className=' text-textcolor font-bold text-2xl'>KYC Solutions</h1>
                                <p className=' text-graytext1 pb-5'>AI-Powered KYC Solution to Transform Your Customer Identification Process
                                    KYC compliance is critical for businesses in the financial and fintech sectors. Traditional KYC processes are often time-consuming and manual. Our AI-powered KYC solution leverages over 100 APIs to determine and validate customer identities in real-time, ensuring compliance with regulatory guidelines.</p>
                            </div>
                            <div className=' pt-6 space-y-4'>
                                <IndustriesPointCards header='Video KYC' />
                                <IndustriesPointCards header='Digital KYC' />
                                <IndustriesPointCards header='Financial Records' />
                            </div>
                        </div>
                        <div>
                            <div className=' pl-0 lg:pl-10'>
                                <Image src={Transaction_Vector} alt='' height={300} />
                            </div>
                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>

                        <div>
                            <div className=' pl-0 lg:pl-10'>
                                <Image src={businessVector} alt='' height={320} />
                            </div>
                        </div>
                        <div>
                            <div className=' border-b border-[#dddddd] space-y-4'>
                                <h1 className=' text-textcolor font-bold text-2xl'>Business Intelligence</h1>
                                <p className=' text-graytext1 pb-5'> Our Corporate Intelligence Solution offers the most comprehensive and authentic data on corporate financials, litigations, regulatory information, audit reports, and web and media presence. We help our clients avoid working with partners who could pose significant business risks. In addition to providing a 360-degree view of companies, we offer risk scoring and expert insights to support informed business decisions</p>
                            </div>
                            <div className=' pt-6 space-y-4'>
                                <IndustriesPointCards header='Business Partner Due Diligence' />
                                <IndustriesPointCards header='Investment Risk Due Diligence' />
                                <IndustriesPointCards header='Post-Investment Risk Monitoring' />
                            </div>
                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>
                        <div>
                            <div className=' border-b border-[#dddddd] space-y-4'>
                                <h1 className=' text-textcolor font-bold text-2xl'>Alternate Data</h1>
                                <p className=' text-graytext1 pb-5'>Expand Credit Risk Assessment Beyond Traditional Scores
                                    Traditional credit scoring models typically depend on historical credit data, which might not be available or may be limited in scope. By integrating alternate data, such as utility bill payments, rental history, or social media behavior, lending companies can gain a more detailed view of creditworthiness and enhance financial inclusion.</p>
                            </div>
                            <div className=' pt-6 space-y-4'>
                                <IndustriesPointCards header='Utility & Shopping Bills' />
                                <IndustriesPointCards header='Mobile and Leisure Spend' />
                                <IndustriesPointCards header='Rentals and Other Income Sources' />
                            </div>
                        </div>
                        <div>
                            <div className=' pl-0 lg:pl-10'>
                                <Image src={alternateVector} alt='' height={300} />
                            </div>
                        </div>
                    </div>
                    <div className=' space-y-4 pt-8 lg:pt-28'>
                        <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Recruit Qualified Financial Professionals for Risk Management</h1>
                        <p className=' text-graytext1'>Ensuring the hiring of verified financial advisors, analysts, and compliance officers is crucial for the success of your financial institution.
                        </p>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16 lg:px-8 px-0'>
                        <div>
                            <IndustriesPointCards showdescription header='Professional Background Screening' description='Client Trust is Paramount; Hire Responsibly  
Agregar guarantees thorough verification of documents and backgrounds for white-collar professionals, including financial advisors, registered analysts, and compliance officers.

' />
                        </div>
                        <div>
                            <IndustriesPointCards showdescription header='Real-Time Verification for Financial Staff' description='Seamless real-time verification integrated into your onboarding processes provides highly accurate checks, ensuring that you hire the most qualified financial personnel.
' />
                        </div>
                        <div>
                            <IndustriesPointCards showdescription header='Comprehensive Background Checks' description='Mitigate Risk by Hiring Financial Staff with Clean Records  
Agregar performs in-depth background checks and verifies the work history of blue-collar roles, such as administrative support and clerical staff, to ensure a trustworthy workforce and safeguard your organization’s reputation.' />
                        </div>


                    </div>
                    <div className=' pt-6 lg:pt-20 pb-10'>
                        <h1 className=' text-textcolor font-bold text-xl lg:text-3xl'>Our Verifications</h1>
                    </div>
                    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 '>
                        <VeriificationsCards image={Address} VName='Address Verification: 
Digital and Physical' />
                        <VeriificationsCards image={ML} VName='AML/Sanction
' />
                        <VeriificationsCards image={Social_Media} VName='Adverse Media
' />
                        <VeriificationsCards image={CreditCard} VName='Credit checks ( Including International checks )' />
                        <VeriificationsCards image={Employment} VName='Employment Verification' />
                        <VeriificationsCards image={GraduationCap} VName='Education verification' />
                        <VeriificationsCards image={ID} VName='Identity checks' />
                        <VeriificationsCards image={Refer} VName='Reference checks' />
                        <VeriificationsCards image={HandCoff} VName='Criminal checks' />
                        <VeriificationsCards image={Vacine} VName='Drug Tests' />
                        <VeriificationsCards image={Justice} VName='Litigations' />
                        <VeriificationsCards image={Portfolio} VName='Business Registry Checks' />
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28  px-2 gap-3 lg:gap-6'>
                        <div>
                            <div className=' border-b border-[#dddddd]'>
                                <h1 className=' font-bold text-2xl text-secondary pb-4'>Get Started with Agregar’s
                                    Banking Solutions</h1>
                            </div>
                            <div className=' pt-5 space-y-4'>
                                <p className=' text-secondary text-base font-bold'>Secure a dependable and effective warehouse workforce.
                                    Our employee screening solutions validate qualifications
                                    and backgrounds, instilling confidence in the E-commerce &
                                    Retail supply chain.</p>

                            </div>
                            <div className=' pt-10'>
                                <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            </div>
                        </div>

                        <div>
                            <Image alt='' src={Smilingface} />
                        </div>

                    </div>
                    <div>
                        <ContactSales />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;