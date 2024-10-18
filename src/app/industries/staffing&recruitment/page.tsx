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
import staffing_bg from "../../../assets/staffing_bg.png";
import staffing_vector from "../../../assets/staffing_vector.png";
import staffing_scanner from "../../../assets/staffing_scanner.png";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={staffing_bg} alt='' />

            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Staffing & Recruitment</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Reliable Talent Solutions for the Recruitment Sector</h1>
                            <button onClick={() => {
                                window.location.href = "mailto:sales@agregartech.com";
                            }} className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to sales</button>
                            <div>
                                <p className=' text-graytext1'>We provide customized risk management solutions specifically designed for the staffing and recruitment industry.</p>

                            </div>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={staffing_vector} alt='' height={320} />
                        </div>
                    </div>

                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Screening Challenges in the Staffing and Recruitment Sector</h1>
                    <p className=' text-graytext1'>Employing unverified candidates and collaborating with risky partners poses potential threats to businesses.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 header='Verification Precision' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Challenges in Scaling Employee Verification

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Recruitment firms engage with numerous companies to hire employees at scale, necessitating a verification partner capable of accommodating their business growth.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Timeliness of Response' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Extended Vendor Onboarding Periods

                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Efficient vendor onboarding is critical for streamlining procurement procedures and sustaining operational efficiency, thereby mitigating substantial operational costs.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Avoidance of Negligent Hiring Risks' />
                        <div className=' pt-3'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Regulatory and Compliance Risks
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Mishandling of personal data can result in compliance risks, while inadequate vendor screenings pose challenges for vendor management and compliance during audits.

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



                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Hire Verified Candidates for Your Clients Swiftly and Efficiently</h1>
                    <p className=' text-graytext1'>We cover the entire spectrum of Employee Background Verifications for all types of employees.
                    </p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:mt-12 mt-5 lg:gap-12 gap-5'>
                    <div>
                        <IndustriesPointCards2 header='White-Collar Screening' showdescription description='Recruit Top-Quality Talent for Top-Quality Results
Rest assured that your team of white-collar professionals is not only highly skilled but also trustworthy. Our thorough assessments include detailed examinations of identity and criminal records, investigations into potential dual employment scenarios, and evaluations of work history to flag any concerns. Partner with us today to safeguard your reputation and mitigate legal risks.
Verify your white-collar employees in minutes
' />
                        <div>
                            <p className=' text-graytext1 pt-2'>Leverage AI-powered verifications for enhanced accuracy
                                Accelerate the background verification process with industry-leading turnaround times.</p>
                        </div>
                    </div>
                    <div>
                        <Image src={staffing_scanner} alt='' height={350} />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Blue Collar Screening' showdescription description="Protect Your Clients from Theft Dangers
Rely on us to recruit competent and reliable workers for manual labor roles like construction, manufacturing, or transportation. Through comprehensive background checks, we verify their identity, address, criminal records, and any licenses or certifications they possess. Count on us to provide a workforce that aligns with your stringent criteria.
"
                        />
                        <div>
                            <p className=' text-graytext1 pt-2'>Efficient and straightforward screening solutions tailored for blue-collar workers.
                                Access real-time updates on the verification progress.
                                Multilingual verification services offered in over ten languages.</p>
                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Contract Worker Screening' showdescription description="Ensure Your Hires Don't Slow You Down
Discover a reliable source for locating skilled and adaptable workers for your temporary, seasonal, or project-based positions. Our thorough screening protocol includes identity verification, address confirmation, criminal background checks, ratings, and reviews, ensuring peace of mind and dependable hires. Opt for our trusted hiring solution to steer clear of fraudulent or unreliable workers.
"
                        />
                        <div>
                            <p className=' text-graytext1 pt-2'>Efficient and straightforward screening solutions tailored for blue-collar workers.
                                Access real-time updates on the verification progress.
                                Multilingual verification services offered in over ten languages.</p>
                        </div>
                    </div>

                </div>
                <div className=' space-y-4 pt-4 lg:pt-16'>
                    <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Third-Party Due Diligence</h1>
                    <p className=' text-graytext1'>Fostering Strong and Trustworthy Partnerships with Your Vendors
                        Comprehensive Third-Party Risk Management Solutions
                    </p>
                </div>
                <div className=' grid grid-cols-10 mt-7'>
                    <div className=' lg:col-span-7 col-span-10'>
                        <IndustriesPointCards2 header='Vendor Due Diligence' showdescription description="Ensure Collaboration with Risk-Free Vendors
When evaluating the credibility of potential and current vendors such as payroll providers, contractors, skill assessment vendors, or RPOs, entrust us with the task. Our meticulous approach involves in-depth assessments utilizing our proprietary databases and verification APIs. We guarantee that your vendors contribute positively to your business while minimizing associated risks.
Adhere to industry and government regulations in your interactions with vendors.
Centralize vendor onboarding and screening processes for a unified view of all vendors.
Track the real-time progress of vendor onboarding.
"
                        />
                    </div>
                    <div className=' lg:col-span-3 col-span-10'>

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