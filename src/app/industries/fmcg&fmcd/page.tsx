"use client";
import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import insurance_bg from "../../../assets/insurance_bg.png";
import gamming_vector from "../../../assets/gaming_vector.png";
import Footer from '@/Components/Footer';
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import Smilingface from "../../../assets/smiling-female.png";
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
import Portfolio from "../../../assets/Portfolio.png";
import ContactSales from '@/Components/Sections/ContactSales';
import VeriificationsCards from '@/Components/VeriificationsCards';
import staffing_scanner from "../../../assets/staffing_scanner.png";
import fmcdbg from "../../../assets/fmcd_bg.png";
import bus_vector from "../../../assets/bus_vector.png";
import supplier_v1 from "../../../assets/supplier_vect1.png";
import supplier_v2 from "../../../assets/supplier_vect2.png";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={fmcdbg} alt='' />
           
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>FMCG & FMCD</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Guarantee Quality and Safety in FMCG/FMCD Operations</h1>
                            <button onClick={() => {
                      window.location.href = "mailto:sales@agregartech.com";
                }} className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to sales</button>
                            <div>
                                <p className=' text-graytext1'>We offer customized risk management solutions for FMCG and FMCD industry stakeholders. Benefit from swift and comprehensive employee screening and vendor/distributor due diligence services today for assured quality.</p>

                            </div>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={bus_vector} alt='' height={320} />
                        </div>
                    </div>

                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Screening Challenges in the FMCG and FMCD Industries</h1>
                    <p className=' text-graytext1'>Warehouse thefts, counterfeit invoices, and inefficient supply chains pose significant hurdles in FMCG/FMCD businesses.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-10'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Addressing Internal Fraud Incidents' description='Thorough background checks can help identify individuals with a history of dishonesty, fraud, or financial misconduct, mitigating risks effectively.' />

                    </div>
                    <div>
                        <IndustriesPointCards2 header='Managing Operational Business Risks' showdescription description="Ensuring the financial stability of distributors and resellers is crucial to averting operational challenges that could disrupt the business's supply chain." />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Ensuring Financial and Legal Compliance' showdescription description="Verifying that distributors adhere to all tax regulations, including goods and services tax (GST), and possess the necessary licenses, is essential for maintaining financial and legal compliance." />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Ensuring Secure Workforce Hiring to Mitigate Theft Risks' showdescription description="Ensure the integrity of your blue-collar and white-collar workforce through comprehensive identity verification, court record checks, and police verification." />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Blue-Collar Employee Verifications' showdescription description="Securing Business Operations
We assist in preventing fraud, theft, and resource misuse among factory and warehouse workers by verifying their identities and conducting background checks for criminal records or substance abuse. This ensures compliance with FMCG industry regulations and builds trust among suppliers, customers, and partners while protecting your business from potential risks.
Streamline worker verification with our advanced AI-ML capabilities, eliminating manual processes and delays.
Seamlessly integrate our verification APIs to automate identity and background checks using our AI-powered solutions.
Save time and resources while making informed business decisions." />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='White Collar Employee Verifications' showdescription description="Recruit Reliable Talent for Accelerated Expansion
We specialize in verifying the competence and credibility of your white-collar workforce, ensuring their capability to handle managerial, professional, or administrative duties. This
safeguards against corruption, fraud, and ethical breaches among employees entrusted with financial, legal, or strategic responsibilities. Cultivating a culture of trust and accountability begins with adhering to industry norms and best practices.
Efficiently screen your white-collar employees with a seamless onboarding and verification process.
Enable candidates to upload documents seamlessly in a paperless and contactless manner.
Ensure compliance with GDPR regulations and global encryption standards with our employee verification solutions." />
                    </div>




                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Revolutionizing the Onboarding Experience for Distributors & Suppliers</h1>
                    <p className=' text-graytext1'>Ensure adherence to compliance standards and due diligence by meticulously assessing your distributors and suppliers.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:mt-12 mt-5 lg:gap-20 gap-5'>
                    <div>
                        <IndustriesPointCards2 header='Vendor/Supplier Onboarding & Due Diligence' showdescription description="Prevent Risky Suppliers from Hindering Progress
Boost the growth of your FMCG/FMCD enterprise with confidence by meticulously onboarding and vetting your vendors and suppliers. Our seamless platform simplifies the intricate onboarding process while ensuring the reliability and qualifications of your suppliers. We verify essential details such as identity, address, GST, bank account, credit score, business registration, trade license, and legal and financial records to guarantee trustworthy partnerships."/>
                        <div>
                            <p className=' text-graytext1 pt-2'>Simplify your vendor and supplier onboarding and due diligence procedures with our AI/ML-powered technology.
                                Benefit from configurable onboarding workflows, comprehensive due diligence reports, and seamless ERP integrations.
                                Mitigate risks associated with vendors with questionable histories and financials, securing the integrity of your business.</p>
                        </div>
                    </div>
                    <div>
                        <Image src={supplier_v1} alt='' height={350} />
                    </div>
                    <div>
                        <Image src={supplier_v2} alt='' height={350} />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Distributor Verification' showdescription description="Collaborate with Certified Distributors
Your distributors serve as a crucial link to your market. But how can you ensure their reliability? We assist you in validating the legal, financial, operational, and reputational facets of your distributors. Our services encompass confirming their registration, licenses, permits, and tax compliance. Additionally, we evaluate their financial track record, infrastructure, and logistical capabilities. Through these measures, we help you sidestep potential hazards, mitigate risks, and capitalize on opportunities within your distribution strategy.
Minimize legal, financial, and reputational risks while broadening your distributor network.
Monitor your distributor network and access dependable, real-time performance data.
Enhance transparency and visibility of engagement across your organization."/>

                    </div>




                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Staffing and Recruitment</h1>
                    <p className=' text-graytext1'>Warehouse thefts, counterfeit invoices, and inefficient supply chains pose significant hurdles in FMCG/FMCD businesses.
                    </p>
                </div>
                <div className=' grid grid-cols-10 mt-7'>
                    <div className=' lg:col-span-7 col-span-10'>
                        <IndustriesPointCards2 header='Employee Screening' showdescription description="Your Workforce Defines Your Success, Screen Diligently
Guarantee the excellence and trustworthiness of your professional staff with meticulous screening solutions designed for engineers, architects, sales professionals, and customer service representatives.
Authenticate the employment background, encompassing job roles, responsibilities, and tenure, to evaluate candidates' experience and suitability.
Validate educational credentials, degrees, certifications, and professional affiliations to confirm expertise and credibility.
Perform comprehensive reference checks with former employers or supervisors to gather insights, empowering informed hiring choices.
"
                        />
                    </div>
                    <div className=' lg:col-span-3 col-span-10'>

                    </div>
                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Ensuring Secure Workforce Hiring to Mitigate Theft Risks</h1>
                    <p className=' text-graytext1'>Ensure the integrity of your blue-collar and white-collar workforce through comprehensive identity verification, court record checks, and police verification.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:mt-12 mt-5 lg:gap-20 gap-5'>
                    <IndustriesPointCards2 header='Blue-Collar Employee Verifications' showdescription description="Securing Business Operations
We assist in preventing fraud, theft, and resource misuse among factory and warehouse workers by verifying their identities and conducting background checks for criminal records or substance abuse. This ensures compliance with FMCG industry regulations and builds trust among suppliers, customers, and partners while protecting your business from potential risks.
Streamline worker verification with our advanced AI-ML capabilities, eliminating manual processes and delays.
Seamlessly integrate our verification APIs to automate identity and background checks using our AI-powered solutions.
Save time and resources while making informed business decisions.
"
                    />
                    <IndustriesPointCards2 header='White Collar Employee Verifications' showdescription description="Recruit Reliable Talent for Accelerated Expansion
We specialize in verifying the competence and credibility of your white-collar workforce, ensuring their capability to handle managerial, professional, or administrative duties. This safeguards against corruption, fraud, and ethical breaches among employees entrusted with financial, legal, or strategic responsibilities. Cultivating a culture of trust and accountability begins with adhering to industry norms and best practices.
Efficiently screen your white-collar employees with a seamless onboarding and verification process.
Enable candidates to upload documents seamlessly in a paperless and contactless manner.
Ensure compliance with GDPR regulations and global encryption standards with our employee verification solutions.
"
                    />
                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Revolutionizing the Onboarding Experience for Distributors & Suppliers</h1>
                    <p className=' text-graytext1'>Ensure adherence to compliance standards and due diligence by meticulously assessing your distributors and suppliers.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:mt-12 mt-5 lg:gap-20 gap-5'>
                    <IndustriesPointCards2 header='Vendor/Supplier Onboarding & Due Diligence' showdescription description="Prevent Risky Suppliers from Hindering Progress
Boost the growth of your FMCG/FMCD enterprise with confidence by meticulously onboarding and vetting your vendors and suppliers. Our seamless platform simplifies the intricate onboarding process while ensuring the reliability and qualifications of your suppliers. We verify essential details such as identity, address, GST, bank account, credit score, business registration, trade license, and legal and financial records to guarantee trustworthy partnerships.
Simplify your vendor and supplier onboarding and due diligence procedures with our AI/ML-powered technology.
Benefit from configurable onboarding workflows, comprehensive due diligence reports, and seamless ERP integrations.
Mitigate risks associated with vendors with questionable histories and financials, securing the integrity of your business.
"
                    />
                    <IndustriesPointCards2 header='Distributor Verification' showdescription description="Collaborate with Certified Distributors
Your distributors serve as a crucial link to your market. But how can you ensure their reliability? We assist you in validating the legal, financial, operational, and reputational facets of your distributors. Our services encompass confirming their registration, licenses, permits, and tax compliance. Additionally, we evaluate their financial track record, infrastructure, and logistical capabilities. Through these measures, we help you sidestep potential hazards, mitigate risks, and capitalize on opportunities within your distribution strategy.
Minimize legal, financial, and reputational risks while broadening your distributor network.
Monitor your distributor network and access dependable, real-time performance data.
Enhance transparency and visibility of engagement across your organization.
"
                    />
                </div>
                <div>
                    <h1 className=' font-bold text-3xl px-0 lg:px-20 py-6 lg:py-16'>Our Verifications</h1>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12  px-0 lg:px-20'>

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
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28 px-0 lg:px-20  gap-3 lg:gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-2xl text-secondary pb-4'>Get Started with Agregar’s 
                            FMCG & FMCD Solutions</h1>
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
            <Footer />
        </div>
    )
}

export default page;