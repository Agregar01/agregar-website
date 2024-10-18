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
import insurance_vector from "../../../assets/industy_vector.png";
import telecom_bg from "../../../assets/telecom_bg.png";
import telecome_vector from "../../../assets/telecom_vector.png";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={telecom_bg} alt='' />
           
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Telecommunications</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Powering Secure Communications with Advanced Verification and Compliance Solutions</h1>
                            <button onClick={() => {
                      window.location.href = "mailto:sales@agregartech.com";
                }} className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to sales</button>
                            <div>
                                <p className=' text-graytext1'>The telecommunications industry interfaces closely with customers, making robust authentication critical to mitigate significant business, compliance, and reputational risks.</p>

                            </div>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={telecome_vector} alt='' height={320} />
                        </div>
                    </div>

                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Digital Solutions Fostering Confidence throughout Your Customer Experience</h1>
                    <p className=' text-graytext1'>Fraudulent Sellers, problematic customers, and inadequately screened workers pose significant concerns for E-commerce and Retail Enterprises.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 header='Accuracy in Verification and KYC' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Ensuring the precision of customer-provided data and the legitimacy of submitted documents is vital for an efficient KYC procedure.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Response Time and Customer Experience' description='Lengthy and complex KYC processes can result in poor customer experiences, characterized by high Turnaround Time (TAT), leading to dissatisfaction and potential customer attrition.
' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Delays in Hiring and Onboarding
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Compromised Third-Party Due Diligence
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Insufficient due diligence may result in partnerships with fraudulent or non-compliant third parties, exposing telecom companies to legal and regulatory liabilities.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Combat identity fraud effectively with precise AI-powered KYC services' description="Streamline compliance procedures seamlessly while maintaining a positive customer experience with instant verifications.

" />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Exercise caution when onboarding telecom services to safeguard security.
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Boost security measures and deter fraud with robust customer KYC protocols. Protect new subscribers during SIM activation and broadband subscriptions, mitigating risks such as phone number misuse, identity theft, SIM card cloning, subscription fraud, and more

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Ensure swift and secure onboarding for new subscribers through seamless KYC processes.
                                    Implement advanced fraud prevention techniques to defend against fraudulent activities.
                                    Strengthen risk management by continuously monitoring and analyzing customer data in real-time, establishing a secure and trustworthy customer base.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Optimize Your Third-Party Due Diligence for Effective Telecom Operations' description="Enhance the efficiency of your telecom operations by collaborating with reputable distributors, resellers, and infrastructure companies.
" />

                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Due Diligence for Third Parties' description="Conduct thorough due diligence on your authorized partners and resellers to ensure credibility and compliance. This includes assessing distributors, authorized resellers, broadband service providers, infrastructure and construction firms, contractors, vendors, suppliers, and equipment manufacturers.
Implement robust third-party risk assessment and management practices through comprehensive due diligence processes.
Reduce risks by verifying credentials, financial stability, and regulatory compliance.
Proactively identify potential business risks and maintain a reliable network of partners.
" />

                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Employee Screening' description="Your Workforce Defines Your Success, Screen Diligently
Guarantee the excellence and trustworthiness of your professional staff with meticulous screening solutions designed for engineers, architects, sales professionals, and customer service representatives.
Authenticate the employment background, encompassing job roles, responsibilities, and tenure, to evaluate candidates' experience and suitability.
Validate educational credentials, degrees, certifications, and professional affiliations to confirm expertise and credibility.
Perform comprehensive reference checks with former employers or supervisors to gather insights, empowering informed hiring choices.
" />

                    </div>

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
                            Telecommunications Solutions</h1>
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