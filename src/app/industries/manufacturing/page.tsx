import React from 'react';
import manu_vector from "../../../assets/manu_vector.png"
import Header from '@/Components/Header';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import manufac from "../../../assets/manufac_vector.png"
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import manufacturing_tool from "../../../assets/manufactuing_tool.png";
import ContactSales from '@/Components/Sections/ContactSales';
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
import VeriificationsCards from '@/Components/VeriificationsCards';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={manu_vector} alt='' />
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Manufacturing</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-2xl lg:text-3xl font-bold  text-secondary'>Ensure Verification Prior to Production</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>We offer customized risk management options tailored for the pioneers and trailblazers within the manufacturing sector.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={manufac} alt='' height={330} />
                        </div>
                    </div>

                </div>
                <div className=' py-7 space-y-4 lg:py-16'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Addressing Screening Hurdles in the Manufacturing Sector</h1>
                    <p className=' text-graytext1'>The manufacturing industry faces significant challenges such as warehouse theft, fraudulent invoices, and inefficiencies in supply chains.</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-16'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Mitigating Internal Fraud Incidents' description='The frequency of internal fraud incidents is on the rise. Implementing thorough background checks can help identify individuals with a history of dishonesty, fraud, or financial misconduct, thus reducing potential risks.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Comprehensive Vendor Oversight' description="To safeguard against operational disruptions, it's essential to verify the financial stability of distributors and suppliers, ensuring a seamless business operation." />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Ensuring Regulatory Adherence' description="It's imperative to confirm that distributors and suppliers comply with all tax regulations, including goods and services tax (GST), and possess the necessary licenses to operate." />
                    </div>
                </div>
                <div className=' py-7 space-y-4 lg:py-16  w-full lg:w-[80%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Secure Your Business Against Theft Risks by Hiring the Right Workforce</h1>
                    <p className=' text-graytext1'>As you focus on manufacturing products to sustain the country's economy, we specialize in building trust. Here's why entrusting us is crucial</p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <div>
                            <IndustriesPointCards2 showdescription header='Ensuring Regulatory Adherence' description="It's imperative to confirm that distributors and suppliers comply with all tax regulations, including goods and services tax (GST), and possess the necessary licenses to operate." />
                        </div>
                        <div>
                            <IndustriesPointCards2 showdescription header='Ensuring Regulatory Adherence' description="It's imperative to confirm that distributors and suppliers comply with all tax regulations, including goods and services tax (GST), and possess the necessary licenses to operate." />
                        </div>
                    </div>
                    <div className=' flex lg:justify-end justify-start'>
                        <Image src={manufacturing_tool} alt='' height={320} />
                    </div>
                </div>
                <div className=' py-7 space-y-4 lg:py-16 lg:w-[80%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Enhancing the Onboarding Process for Distributors & Suppliers</h1>
                    <p className=' text-graytext1'>Guarantee adherence to regulations and thorough assessment of your distributors and suppliers.</p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Streamlined Supplier Onboarding & Due Diligence' description="Establish Partnerships with Trustworthy Suppliers
We validate the identity, ownership, background, and reputation of your current or potential vendors. Conduct your business with confidence as we scrutinize public records, specialized databases, watchlists, and sanction lists to ensure risk-free operations and mitigate reputational risks.
Effortlessly Onboard Suppliers with Comprehensive Onboarding and Due Diligence Solutions
Verify Supplier Compliance with Industry and Government Regulations
Eliminate Suppliers with Questionable Histories to Safeguard Your Business" />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Enhance Distributor Onboarding & Due Diligence' description="Collaborate with Accredited Distributors
Utilize our digital platform for distributor onboarding and risk mitigation to foster business growth while reducing operational risks and enhancing customer satisfaction. Cultivate a network of reliable distributor alliances through data-driven insights and risk management resources.
Mitigate legal, financial, and reputational risks while expanding your distributor network.
Monitor distributor performance with dependable, real-time data tracking.
Ensure organizational transparency and visibility throughout the engagement process." />
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
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28  px-2 gap-3 lg:gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-2xl text-secondary pb-4'>Get Started with Agregar’s
                                Manufacturing Solutions</h1>
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