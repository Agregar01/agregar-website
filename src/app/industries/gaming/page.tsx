import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import gamming from "../../../assets/gaming_bg.png";
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
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton />
            <Header />
            <MobileHeader />
            <Image src={gamming} alt='' />
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Gaming</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Secure, Compliant, and Fraud-Free Gaming Experiences with Advanced Verification</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <div>
                                <p className=' text-graytext1  font-bold'>Your Comprehensive Solution for Validating Online Gaming Participants
                                    Effortlessly handle the verification of large volumes of users on your gaming application or website</p>
                                <div className=' pt-1'>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Improved Online Gaming Player Verification
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Offering the simplest, most adaptable, and enjoyable KYC experience
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Effortlessly manage high volumes of verification traffic on your gaming app or website

                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Accelerate player registrations by simplifying the onboarding process
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Ensure compliance with all online gaming regulations.
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Revamping Your Gaming Onboarding Process

                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Guard Against Fraudsters in Real-Money Gaming Apps

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={gamming_vector} alt='' height={320} />
                        </div>
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Digitally Verify All Users' description="Conduct verifications for all players registering on your gaming platform to thwart fake profiles. Utilize OCR-based verification of PAN, Aadhaar, and other Proof of Identity (POI) documents to authenticate identity, checking for face and name matches and flagging any discrepancies. Implement an identity verification solution to ensure players' authenticity, confirming that the registered player is indeed the one engaging in gameplay to prevent identity fraud." />
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
                        <IndustriesPointCards2 showdescription header='Effortless Player Enrollment' description="Quickened Player Enrollment
Enhance the speed of your user enrollment process using AuthBridge's identity verification technology. Ensure fraud prevention at every stage, from sign-up and fund deposits to gameplay and payout retrieval, all while maintaining an optimal customer experience.
Utilize Geo-tagging APIs to pinpoint Player locations
Incorporate Liveliness Checks tailored to business requirements" />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Ensure Transparency in Every Financial Transaction
' description="Combat money laundering fraud by validating each financial transaction conducted on your online gaming platform. Verify whether funds are being transferred to an active or
suspended account, authenticate bank account details and owner information to safeguard your players' funds.
" />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Verification of Bank Accounts

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Digital Address Verification

                                </p>
                            </div>

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
                                Gaming Solutions</h1>
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