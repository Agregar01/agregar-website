import React from 'react';
import hospitality_bg from "../../../assets/hospitality_bg.png";
import Header from '@/Components/Header';
import Image from 'next/image';
import Travel_Vector from "../../../assets/travel_vector.png"
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import hos_human from "../../../assets/hos_human.png";
import Footer from '@/Components/Footer';
import hos_pic_board from "../../../assets/hos_pic_board.png";
import reader_vector from "../../../assets/reader_vector.png";
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
            <Image src={hospitality_bg} alt='' />
           
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Travel & Hospitality</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-2xl lg:text-3xl font-bold  text-secondary'>Enhancing Guest Experiences and Securing Your Operations with Trusted Verification Solutions</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>Ensure Trustworthy Travel Experiences for Your Customers' Safety and Comfort
                                Obtain prompt and comprehensive employee verification and third-party due diligence solutions today to foster confidence in travel.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={Travel_Vector} alt='' height={340} />
                        </div>
                    </div>

                </div>
                <div className=' py-7 space-y-4 lg:py-16  w-full lg:w-[85%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Screening Challenges in the Travel and Hospitality Industry</h1>
                    <p className=' text-graytext1'>As you focus on manufacturing products to sustain the country's economy, we specialize in building trust. Here's why entrusting us is crucial</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Mitigation of Negligent Hiring Risks' description='Customer Safety and Security Concerns
Given the direct interaction between workers in the travel and hospitality industry and customers, background checks play a pivotal role in identifying individuals with a history of violence, criminal activities, or other potential risks, thereby reducing the likelihood of incidents.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Enhanced Customer Experience' description="Consistency in Customer Experience Assurance
Conducting due diligence entails assessing the operational aspects of the franchise, including the management team, staff qualifications, training programs, and overall efficiency, to ensure they can consistently deliver on customer experience (CX) expectations." />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Evaluation of Success Metrics' description="Data Security and Compliance Assurance
The travel and hospitality sector handles Personally Identifiable Information (PII) of customers. Any breach or lapse in security may lead to legal liabilities." />
                    </div>
                </div>
                <div className=' py-7 space-y-4 lg:py-16  w-full lg:w-[85%]'>
                    <h1 className=' text-secondary font-bold text-2xl lg:text-3xl'>Ensure a Secure Travel Experience for Your Customers</h1>
                    <p className=' text-graytext1'>In the Travel and Hospitality industry, Customer Experience is paramount, and hiring without proper screening can pose risks to your Business.</p>
                </div>
                <div className=' grid lg:grid-cols-10  gap-5 lg:gap-16'>
                    <div className=' lg:col-span-5 col-span-10'>
                        <div>
                            <IndustriesPointCards2 showdescription header='Blue Collar Employee Verifications' description='Preserve the Essence of Travel Experience :
Guard against tarnishing your reputation and diminishing customer satisfaction due to poor hires. Our sophisticated employee verification platform assists in filtering out candidates with counterfeit IDs, criminal backgrounds, substance abuse issues, or substandard work ethics. We ensure that your front desk and housekeeping personnel not only comply with all legal and regulatory mandates but also possess the requisite skills.' />
                            <div className=' space-y-8'>
                                <p className=' text-graytext1'>Screen your employees with the industry's fastest Turnaround Time (TAT).
                                    Verify Employees nationwide with multilingual support options.
                                    Attain the highest level of accuracy through AI/ML and proprietary database-driven checks.
                                    Verification of Contractual Workforce</p>
                                <p className=' text-graytext1'>Screening is Essential for Contract Workers as Well
                                    You wouldn't want to assign your valuable assets to unverified contract workers. Our platform assists you in verifying their identity, background, qualifications, work history, and more. This ensures protection against fraud, theft, violence, or other business risks.
                                    Thoroughly screen your contract workers and manage them centrally.
                                    Monitor the onboarding progress of all your contractors.
                                    Ensure compliance with industry and government regulations."
                                    Your Brand's Reputation Hinges Largely on Your Franchisees and Partners
                                    Consistently Delivering an Outstanding Customer Experience Requires Dependable Partnerships, Making Collaboration with Efficient, Legitimate Third-Party Businesses Crucial</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-8 lg:col-span-5'>
                        <Image src={hos_human} alt='' height={350} />
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-20'>
                    <div>
                        <Image src={hos_pic_board} alt='' height={350} />
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Franchise Verification' />
                        <div className=' space-y-2 pt-4'>
                            <h1 className='  text-graytext1 font-bold'>Ensuring the Legitimacy of Hotel Franchise Listings
                            </h1>
                            <p className='text-graytext1'>We ensure that hotel franchises are authorized and trustworthy partners that align with your quality standards and expectations. This fosters increased customer trust in your brand, particularly in a competitive market. Moreover, it helps mitigate potential legal, financial, and reputational risks associated with fraudulent or outdated hotel franchise listings.
                                Conduct thorough assessments of your partners, covering operational risk and financial performance.
                                Identify illicit accounts and fraudulent identities using our AI-powered products, which verify bank accounts, addresses, and GSTIN details.
                                Safeguard Identity data against leaks and misuse through our built-in data security measures.</p>
                        </div>
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:py-20 py-7 gap-16'>
                    <div>
                        <IndustriesPointCards2 header='KYC Verification for Travel Agents' />
                        <div className=' space-y-2 pt-4'>
                            <h1 className='  text-graytext1 font-bold'>Ensure the Authenticity of Your Travel Agents
                            </h1>
                            <p className='text-graytext1'>As a travel business owner, you deserve peace of mind. That's why we assist you in ensuring that your travel agents adhere to the IRDA guidelines on anti-money laundering. Our KYC features help mitigate risks associated with identity theft, fraud, and terrorist financing. Additionally, we verify that your agents possess IRCTC authorization to book tickets. This proactive approach helps minimize reputational risk and provides clarity on customer transactions.

Mitigate the risks associated with fraudulent properties and hotels using our cutting-edge digital and video KYC products.
Identify discrepancies in agents' credentials through image recognition and liveness detection technologies.

Our verification and onboarding products comply with data security standards and adhere to the General Data Protection Regulation (GDPR) Data Protect Act ( DPA ) requirements.
</p>
                        </div>
                    </div>
                    <div>
                        <Image src={reader_vector} alt='' height={350} />
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
                                Travel & Hospitality</h1>
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