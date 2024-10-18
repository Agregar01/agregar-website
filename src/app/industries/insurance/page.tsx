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
import insurance_vector from "../../../assets/insurance_vector.png";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={insurance_bg} alt='' />
           
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Insurance</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Safeguard Your Policies and Claims with AI-Powered Insurance Verification Solutions</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <div>
                                <p className=' text-graytext1'>Comprehensive Digital Transformation Solutions for Insurance Stakeholders
                                    Revolutionize your onboarding, underwriting, policy issuance, and claims processes using our AI/ML-powered technology solutions.</p>

                            </div>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={insurance_vector} alt='' height={320} />
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
                        <IndustriesPointCards2 header='Develop seamless contactless onboarding experiences to expedite claim settlements.' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>ID Verifications Supporting 20+ ID Types
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Real-Time Face Matching Verifications
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Capability to conduct Video-KYC for remote onboarding.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Verification Precision' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Unified Vendor Experience
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Offering the finest mobile and desktop experiences, accessible via smartphones or tablets, ensuring ease of use and swift completion within minutes rather than hours.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Success Rate Validation' description="Combat money laundering fraud by validating each financial transaction conducted on your online gaming platform. Verify whether funds are being transferred to an active or
suspended account, authenticate bank account details and owner information to safeguard your players' funds.
" />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Guaranteed Regulatory Compliance
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Enterprise Advantage stands out as the most comprehensive and integrated platform in the screening industry."

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Digital Solutions Fostering Confidence throughout Your Customer Experience

                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Digitize Insurance Enrollment' description="Complete Enrollment Solutions for Various Insurance Categories
Accelerate your customer enrollment procedures with instant screening of customers across all your insurance products, including general insurance, vehicle insurance, health insurance, home insurance, and more. Our comprehensive solutions facilitate rapid and secure business expansion.
" />
                        <div className=' pt-3'>
                            <p className=' text-graytext1'>Support for 50+ Proof of Identity (POI) documents for real-time identity verification.
                                Tailored enrollment solutions for each insurance product, featuring over 100 instant verification checks.
                                Multiple KYC solutions for expedited enrollment, including Video KYC, Digital KYC, e-KYC, Video Personal Discussion, and more.</p>
                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Legacy Data Conversion' description="Cut Down on Legacy Data Management Expenses with Comprehensive Digitization
Speed up the digital transformation of insurance operations to make them more efficient and flexible, while enhancing the customer experience. Our range of OCR services (supporting 50+ document types) and 150+ instant verification APIs can automate your legacy processes, reducing costs, minimizing human errors, and streamlining regulatory compliance.
" />
                        <div className=' pt-3'>
                            <p className=' text-graytext1'>Digitization and management of customer documents, both before and after policy disbursement.
Document masking and scraping services supporting over 50 document types.
Significant personnel savings and simplified compliance procedures.</p>
                        </div>
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
                            Insurance Solutions</h1>
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