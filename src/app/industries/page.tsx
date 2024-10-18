"use client"
import React from 'react';
import industries_bg from "../../assets/industries_bg.png";
import Header from '@/Components/Header';
import Image from 'next/image';
import industry_vector from "../../assets/industy_vector.png";
import IndustriesCard from '@/Components/IndustriesCard';
import Footer from '@/Components/Footer';
import piky_bank from "../../assets/Piggy bank.png";
import Heart_beat from "../../assets/Heart beat.png";
import graduation_cap from "../../assets/Graduation cap.png";
import conveyor from "../../assets/Conveyor belt.png";
import plane from "../../assets/Plane.png";
import ShoppingCart from "../../assets/Shopping cart.png";
import Gaming from "../../assets/Casino chips.png";
import Insurance from "../../assets/Medical insurance.png";
import Signal from "../../assets/Signal tower.png";
import Export from "../../assets/Boxes.png";
import Team from "../../assets/Team.png";
import frame from "../../assets/Frame 309.png";
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter();
    return (
        <div className=' outfit  bg-background'>
            <MobileHeader />
            <Header />
            <Image src={industries_bg} alt='' />
            <div className=' px-2 lg:px-44 grid grid-cols-10 lg:pt-24 pt-4'>
                <div className=' col-span-10 lg:col-span-5'>
                    <div className=' space-y-3'>
                        <h1 className=' text-secondary text-2xl lg:text-3xl font-bold'>Industries We Serve</h1>
                    </div>
                    <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                        <h1 className=' lg:text-lg  text-graytext1 '>At Agregar Technologies, we deliver cutting-edge verification and compliance solutions across a wide range of industries. </h1>
                        <h1 className=' lg:text-lg  text-graytext1'>Our AI-driven services are designed to streamline operations, enhance security, and mitigate risks, enabling businesses to thrive in a competitive landscape. Explore the tailored solutions we offer across various sectors.</h1>
                        <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit hover:bg-secondary'>Book a Demo</button>
                    </div>

                </div>
                <div className=' col-span-8 lg:col-span-5'>
                    <div className=' flex justify-end'>
                        <Image src={industry_vector} alt='' height={270} />
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10 px-2 lg:px-44 my-12'>
                <IndustriesCard onClick={() => {
                    router.push("/industries/financial-services")
                }} des4='Alternative Data Credit Scoring' des3='Risk Management Solutions' des2='Corporate Intelligence & Due Diligence' des1='KYC & AML Compliance' description='Stay compliant with regulatory standards while delivering seamless digital onboarding and verification for your customers. Our AI-powered KYC and AML solutions provide real-time data validation, uncovering fraudulent activities and safeguarding your institution.' image={piky_bank} title="Banking and Financial Services" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/healthcare");
                }} title='Healthcare and Pharma' des4='Credential Verification for Healthcare Workers' des3='Credential Verification for Healthcare Workers' des1='Medical Staff Background Checks' des2='KYC for Patients and Clinical Trials' image={Heart_beat} description='Our solutions enable healthcare organizations to verify the credentials of medical professionals, conduct background checks, and streamline patient onboarding. Protect your institution’s reputation by hiring qualified staff and ensuring compliance with regulatory standards.' />
                <IndustriesCard onClick={() => {
                    router.push("/industries/education")
                }} des4='Leadership Screening for Principals and Executives' image={graduation_cap} des3='Student and Parent Verification' des2='Academic Credential Verification' des1='Teacher & Staff Background Checks' description='Ensure safety and reliability by verifying identities and conducting background checks for educators, administrative staff, students, and parents. Our comprehensive solutions create a secure and trustworthy ecosystem for educational institutions.' title='Education' />
                <IndustriesCard onClick={() => {
                    router.push("/industries/manufacturing")
                }} des4='Supply Chain Risk Management' image={conveyor} des3='Regulatory Compliance for Suppliers' des2='Vendor & Distributor Due Diligence' des1='Blue-Collar Workforce Screening' description='Mitigate the risk of internal fraud, vendor instability, and operational disruptions. We provide comprehensive verification services for employees, suppliers, and distributors, ensuring compliance and operational efficiency in the manufacturing industry.' title='Manufacturing' />
                <IndustriesCard onClick={() => {
                    router.push("/industries/travel&hospitality")
                }}  des4='KYC for Travel Agents and Guests' des3='Franchise Verification' des2='Third-Party Due Diligence' des1='Employee Background Checks' description='Ensure that your staff and business partners in the travel and hospitality sector are trustworthy and qualified. Our verification solutions provide peace of mind by conducting thorough background checks and ensuring that third-party partnerships align with your business standards.' image={plane} title="Travel & Hospitality" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/ecommerce&retail")
                }} des4='Fraud Prevention for Online Transactions' des3='Warehouse & Supply Chain Employee Screening' des2='Customer Identity Verification' des1='Seller & Retailer Due Diligence' description='Combat fraud, safeguard your platform, and improve customer trust with our AI-driven verification services for sellers, retailers, and customers. Ensure smooth operations while mitigating the risks associated with fraud, counterfeit products, and employee misconduct.' image={ShoppingCart} title="E-Commerce & Retail" />
                <IndustriesCard  onClick={() => {
                    router.push("/industries/gaming")
                }} des4='KYC for Real Money Gaming' des3='Geo-Tagging & Liveness Detection' des2='Fraud Detection in Gaming Transactions' des1='Player Identity Verification' description='Our real-time KYC and fraud prevention solutions ensure that players on gaming platforms are legitimate, while our financial compliance services protect against money laundering and fraud in online transactions. Enhance your gaming platform’s security and compliance with our AI-powered solutions.' image={Gaming} title="Gaming" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/insurance")
                }} des4='Compliance with Regulatory Standards' des3='Credential Checks for Insurance Agents' des2='KYC for Insurance Claims' des1='Policyholder Identity Verification' description='Transform your insurance operations with our digital verification and screening solutions. From onboarding to claims processing, we help insurers ensure compliance, minimize fraud, and deliver seamless experiences to customers.' image={Insurance} title="Insurance" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/telecommunications")
                }} des4='Fraud Prevention in Telecommunications' des3='Employee Background Screening' des2='Third-Party Due Diligence' des1='Customer KYC for SIM Activation & Broadband' description='Our AI-powered verification solutions protect telecom companies by ensuring compliance with KYC regulations, reducing identity fraud, and improving third-party due diligence. Safeguard your network and build trust with subscribers and partners.' image={Signal} title="Telecommunications" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/fmcg&fmcd")
                }}  des4='Regulatory Compliance for Distributors' des3='Supply Chain Risk Management' des2='Blue-Collar & White-Collar Workforce Verification' des1='Supplier & Distributor Due Diligence' description='Streamline your workforce verification and supplier onboarding processes with our AI-driven solutions for the FMCG and FMCD industries. Our services reduce internal fraud, ensure regulatory compliance, and protect your supply chain from risk.' image={Export} title="FMCG & FMCD" />
                <IndustriesCard onClick={() => {
                    router.push("/industries/staffing&recruitment")
                }} des4='Compliance with Recruitment Regulations' des3='Contract Worker Screenin' des2='Third-Party Due Diligence' des1='White-Collar & Blue-Collar Screening' description='Ensure the integrity of your staffing and recruitment processes with our comprehensive employee verification solutions. From blue-collar workers to senior executives, we offer AI-driven screening that ensures the competence and reliability of your workforce.' image={Team} title="Staffing & Recruitment" />
            </div>
            <div className=' relative'>
                <Image src={frame} alt='' />
                <div className=' absolute inset-0 z-10'>
                    <div className=' grid place-items-center h-svh'>
                        <div className=' space-y-8 lg:w-[50%]'>
                            <h1 className=' text-white text-center'>Discover how Agregar Technologies can transform your industry. Contact us today to learn more about our tailored verification solutions.</h1>
                            <div className=' grid place-items-center'>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-3 rounded-[4px]  outfit'>Book a Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' px-2  lg:px-44   lg:pt-24 pt-8'>
                  <ContactSales />
            </div>
            <Footer />
        </div>
    )
}

export default page;