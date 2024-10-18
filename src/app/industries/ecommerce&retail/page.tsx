import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import ecommerce_bg from "../../../assets/ecommerce_bg.png";
import Footer from '@/Components/Footer';
import ecommerce_vector from "../../../assets/ecommerce_vector.png";
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import commerce_confirmed from "../../../assets/commerce_confirmed.png";
import IndustriesPointCards from '@/Components/IndustriesPointCards';
import graph_vector from "../../../assets/graph_vector.png";
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
import Smilingface from "../../../assets/smiling-female.png"
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={ecommerce_bg} alt='' />
            
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>E-Commerce & Retail</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Enhancing and Safeguarding E-commerce & Retail Environments.</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>Optimize operations while ensuring trust and security in the ever-evolving E-commerce & Retail landscape. Our AI-driven authentication solutions facilitate smooth verification and onboarding of warehouse staff, sellers, retailers, and customers, promoting a secure purchasing journey.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={ecommerce_vector} alt='' />
                        </div>
                    </div>

                </div>
                <div className=' py-7 space-y-4 lg:py-20  w-full lg:w-[100%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Challenges in Screening within the E-commerce and Retail Sector</h1>
                    <p className=' text-graytext1'>Fraudulent Sellers, problematic customers, and inadequately screened workers pose significant concerns for E-commerce and Retail Enterprises.</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 header='Preventing Financial Frauds' />
                        <div className=' lg:px-4 px-0'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Addressing Counterfeit Products & Seller Identity Frauds
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Fraudulent practices by counterfeit sellers can detrimentally impact consumers, legitimate sellers, and overall trust within the e-commerce ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Enhancing Verification Accuracy' />
                        <div className=' lg:px-4 px-0'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Combatting Repeat Returns and Wardrobing
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Customers may engage in return fraud by returning used, damaged, or unauthorized items for a refund or store credit, deceiving the retailer.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Assessing Risks and Preventing Misconduct' />
                        <div className=' lg:px-4 px-0'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Managing the Surge in Employee Theft and Misuse

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Employees may engage in theft from the store’s inventory, either by concealing items during their shifts or through misuse of their access privileges, sometimes in collusion with external parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' py-7 space-y-4 lg:pt-10  w-full lg:w-[100%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Revolutionizing Your Seller/Retailer Onboarding Process</h1>
                    <p className=' text-graytext1'>Guarantee compliance and due diligence within the e-commerce & retail sector by conducting thorough evaluations of sellers and retailers.</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 header='Preventing Financial Frauds' />
                        <div className=' lg:px-4 px-0'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Protect Your Reputation from Unscrupulous Sellers

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Secure your platform with rigorous seller verifications. Our due diligence services meticulously evaluate seller credibility, authenticity, and compliance, fostering reliable partnerships and minimizing fraud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' py-7 space-y-4 lg:pt-12 pt-7  w-full lg:w-[100%] lg:px-20 px-0'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Revolutionizing Your Seller/Retailer Onboarding Process</h1>
                    <div className=' lg:w-[50%] w-full'>
                        <p className=' text-graytext1'>Guarantee compliance and due diligence within the e-commerce & retail sector by conducting thorough evaluations of sellers and retailers.</p>
                    </div>
                </div>

                <div className=' grid lg:grid-cols-2  grid-cols-1 lg:px-20 px-0'>
                    <div>
                        <Image height={250} src={commerce_confirmed} alt='' />
                    </div>
                    <div>
                        <IndustriesPointCards showdescription header='Blue-Collar Verifications' description="Validate qualifications and backgrounds to ensure reliability in warehouse staffing.
                         Mitigate operational risks and bolster supply chain security.
                         Instill trust in the E-commerce & Retail industry's supply chain." />
                        <div className=' py-2 border-b border-[#dddddd]'>
                            <h1 className=' text-secondary text-base font-bold'>Securing Warehouses Against Theft</h1>
                        </div>
                        <div className=' pt-2'>
                            <h1 className=' text-textcolor'>Secure a dependable and effective warehouse workforce.
                                Our employee screening solutions validate qualifications
                                and backgrounds, instilling confidence in the E-commerce &
                                Retail supply chain.</h1>
                        </div>
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2  grid-cols-1 lg:px-20 px-0 lg:py-14 py-5 gap-10'>
                    <div>
                        <IndustriesPointCards showdescription header='Blue-Collar Verifications' description="Validate qualifications and backgrounds to ensure reliability in warehouse staffing.
                         Mitigate operational risks and bolster supply chain security.
                         Instill trust in the E-commerce & Retail industry's supply chain." />
                        <div className=' py-2 border-b border-[#dddddd]'>
                            <h1 className=' text-secondary text-base font-bold'>Securing Warehouses Against Theft</h1>
                        </div>
                        <div className=' pt-2'>
                            <h1 className=' text-textcolor'>Secure a dependable and effective warehouse workforce.
                                Our employee screening solutions validate qualifications
                                and backgrounds, instilling confidence in the E-commerce &
                                Retail supply chain.</h1>
                        </div>
                    </div>
                    <div>
                        <Image height={280} src={graph_vector} alt='' />
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-3xl px-0 lg:px-20 py-6 lg:py-8'>Our Verifications</h1>
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
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28   gap-3 lg:gap-6 px-0 lg:px-20'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-2xl text-secondary pb-4'>Get Started with Agregar’s 
                            E-Commerce & Retail Solutions</h1>
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

                <div className='px-0 lg:px-20'>
                    <ContactSales />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;