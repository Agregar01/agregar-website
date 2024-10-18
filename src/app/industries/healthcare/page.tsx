import React from 'react';
import HealthCarebg from "../../../assets/healthcardbg.png";
import Image from 'next/image';
import Header from '@/Components/Header';
import HealthCarreVector from "../../../assets/healthcarre_vector.png";
import IndustriesPointCards from '@/Components/IndustriesPointCards';
import Footer from '@/Components/Footer';
import Thefrtvector from "../../../assets/theft_vector.png";
import kye_dot from "../../../assets/kye_dot.png";
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
import VeriificationsCards from '@/Components/VeriificationsCards';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={HealthCarebg} alt='' />
            <div className='px-2 lg:px-44 '>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-7'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Healthcare & Pharma</h1>
                        </div>
                        <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Instant Authentication and Onboarding for Your Healthcare Stakeholders</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>Eliminate the tedious process of manual verification and transition to digital verification and onboarding for your healthcare and pharmaceutical businesses.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-3'>
                        <div className=' flex justify-end'>
                            <Image src={HealthCarreVector} alt='' height={300} />
                        </div>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16 lg:px-8 px-0'>
                    <div>
                        <IndustriesPointCards showdescription header='Recruit Qualified Healthcare 
Professionals for Patient Safety' description='Ensuring the hiring of verified doctors, medical staff, and medical representatives is essential for the success of your healthcare business.
White Collar Screening' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Patient Experience Matters, Hire 
with Care' description='Agregar ensures the verification of documents and backgrounds for white-collar professionals such as medical representatives, doctors (including their registration and licenses), and registered healthcare workers.' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Ensure Risk-Free Patient Care by Hiring 
Medical Staff with Clean Records' description='Agregar ensures the verification of documents and backgrounds for white-collar professionals such as medical representatives, doctors (including their registration and licenses), and registered healthcare workers.' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Ensure Risk-Free Patient Care by Hiring 
Medical Staff with Clean Records' description="Agregar conducts thorough background checks and verifies the previous work experience of blue-collar workers such as medical machine operators, medical staff, and room attendants, ensuring risk-free patient care and protecting your institution's reputation.
Our extensive database reviews past work records for theft and other criminal activities, providing the highest check accuracy. Identity and address verifications are performed instantly." />
                    </div>

                </div>
                <div className=' py-6 lg:py-20'>
                    <h1 className=' text-textcolor font-bold text:xl lg:text-3xl'>Conduct Comprehensive Due Diligence Before Onboarding New Franchises
                        Ensure you're fully protected with thorough legal, financial, and management diligence.</h1>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 pt-10'>
                        <div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Education Verification
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Employment Verification
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Address Verification
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Identity Verification

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Police Verification

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Court Record Check
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Passport Verification
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Medical Document Verification
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Nurse Registration Verification

                                </p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className=' px-0 lg:px-20'>
                    <div className=' space-y-5'>
                        <h1 className=' font-bold text-xl lg:text-3xl text-textcolor'>KYC Verification for Healthcare</h1>
                        <p className=' text-graytext1'>Authenticate the identities of patients, clinical trial participants, and healthcare professionals.</p>
                    </div>
                    <div className=' grid grid-cols-10 py-10'>
                        <div className=' col-span-10 lg:col-span-7'>
                            <div className=' space-y-5 '>
                                <h1 className=' font-bold text-xl lg:text-3xl text-textcolor'>Prevent Medical Identity Theft and Fraud</h1>
                                <div className=' w-full lg:w-[60%] border-b border-[#dddddd]'>
                                    <p className=' text-graytext1 pb-5'>By implementing patient KYC, the risk of medical identity theft and fraud is significantly reduced. This process ensures that no one can misuse another person’s identity to access healthcare services, prescription drugs, or insurance benefits, thereby prioritizing patient safety and protection.</p>
                                </div>
                            </div>
                            <div className=' space-y-4 pt-5'>
                                <div className=' flex items-center space-x-4 border-b border-[#dddddd] w-full lg:w-[60%]'>
                                    <Image height={17} alt='' src={kye_dot} />
                                    <p className=' font-bold text-secondary lg:text-base pb-3'>Embed Patient KYC in Your Onboarding Workflows</p>
                                </div>
                                <div className=' flex items-center space-x-4 border-b border-[#dddddd] w-full lg:w-[60%]'>
                                    <Image height={17} alt='' src={kye_dot} />
                                    <p className=' font-bold text-secondary lg:text-base pb-3'>Real Time Identification and Address Verifications</p>
                                </div>
                                <div className=' flex items-center space-x-4 border-b border-[#dddddd] w-full lg:w-[60%]'>
                                    <Image height={17} alt='' src={kye_dot} />
                                    <p className=' font-bold text-secondary lg:text-base pb-3'>99.9% check accuracy</p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-8 lg:col-span-3'>
                            <Image src={Thefrtvector} alt='' />

                        </div>

                    </div>

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
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28  px-0 lg:px-20 gap-3 lg:gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-2xl text-secondary pb-4'>Get Started with Agregar’s
                                Healthcare & Pharma Solutions</h1>
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
                <div className=' px-0 lg:px-20'>
                    <ContactSales />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page