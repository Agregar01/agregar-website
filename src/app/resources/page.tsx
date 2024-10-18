"use client"
import React from 'react';
import resources from "../../assets/resources_bg.png";
import Header from '@/Components/Header';
import Image from 'next/image';
import BlogCards from '@/Components/BlogCards';
import bankFraud from "../../assets/Bank-Fraud-1140x570.jpg";
import AntiFraud from "../../assets/anti_fraud___.jpg";
import Justice_Gavel from "../../assets/JUSTICE-GAVEL-1.jpg";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import Footer from '@/Components/Footer';
import FqaCards from '@/Components/FqaCards';
import ContactSales from '@/Components/Sections/ContactSales';
import { useRouter } from 'next/navigation';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {

    const router = useRouter();

    const BlogData = [
        {
            blogImage: bankFraud,
            date: "September 17, 2024",
            blogTitle: "Staff involvement in Bank fraud rises 46%, losses hit GH¢63m in 2023 – BoG Report",
            route: "https://citinewsroom.com/2024/09/staff-related-fraud-in-banks-and-sdis-rises-by-46-bog-report/"
        },
        {
            blogImage: AntiFraud,
            date: "September 17, 2024",
            blogTitle: "A person with bad integrity will still steal if you pay them a million’ – John Awuah on bankers’ involvement in bank frauds",
            route: "https://citinewsroom.com/2024/09/staff-related-fraud-in-banks-and-sdis-rises-by-46-bog-report/"
        },
        {
            blogImage: Justice_Gavel,
            date: "September 19, 2024",
            blogTitle: "Identify theft: Court orders Bolt Holdings OU pay GHC1.9 million compensation",
            route: "https://gna.org.gh/2024/09/identity-theft-court-orders-bolt-holdings-ou-to-pay-ghc1-9-million-compensation/#google_vignette"
        },

    ]


    const FAQARRAY = [
        {
            title: "What is a background check?",
            description: "A background check is a process used by employers or organizations to verify a person's identity, criminal history, employment, education, and other records What information is included in a background check?"
        }, {
            title: "What is Video KYC?",
            description: "Video KYC is a digital verification process that allows businesses to verify a customer's identity through a live video call or recorded video. It helps in onboarding customers while complying with regulatory requirements."
        },
        {
            title: "How does Video KYC work?",
            description: " During a Video KYC session, customers provide identification documents while being visually validated through a live feed. This often includes comparing the document with the individual to ensure consistency.",
        },
        {
            title: "What role do biometrics play in Video KYC?",
            description: "Biometrics, such as facial recognition, enhance the verification process by ensuring the person presenting the document is indeed the document holder, reducing the chances of identity fraud.",
        },
        {
            title: "Is Video KYC secure?",
            description: "Yes, Video KYC solutions typically use encryption, secure data storage, and authentication measures to ensure that sensitive information is protected during and after the verification process.",
        },
        {
            title: "How does Video KYC improve the customer experience?",
            description: " It allows for remote onboarding, reducing the need for customers to visit physical locations, making the process faster and more convenient.Document Verification with Biometrics, Selfie, and Liveliness Detection",
        },
        {
            title: "How is a selfie used in document verification?",
            description: "Customers take a selfie that is compared to the photo on their identification document. This process helps to confirm the identity of the individual.",
        },
        {
            title: "What is liveliness detection?",
            description: "Liveliness detection is a technology used to ensure that the selfie or video being captured is from a real person present at the moment, rather than a static image or a video playback, thus enhancing security.",
        },
        {
            title: "Why is liveliness detection important?",
            description: "It prevents spoofing attacks, where individuals might attempt to use photos or videos to impersonate someone else during the verification process.",
        },
        {
            title: "What are the benefits of using biometrics in document verification?",
            description: "Biometrics increase the accuracy of identity verification, reduce fraud, and streamline the onboarding process for financial institutions and other sectors.",
        },
        {
            title: "What is 4D GIS?",
            description: "4D GIS (Geographic Information Systems) adds the dimension of time to traditional 3D GIS, enabling tracking and analysis of data over time. It is commonly used for digital verifications of locations, making it easier to confirm addresses and assets in real-time..",
        },
        {
            title: "How does 4D GIS enhance digital verification?",
            description: "4D GIS allows for precise, time-bound mapping of physical locations. This helps verify the presence and condition of an address or asset, track changes over time, and assess any discrepancies between documentation and the current status of a location.",
        },
        {
            title: "What is a ground verifier network?",
            description: "A ground verifier network consists of trained professionals located across various markets or regions. These individuals physically visit and inspect sites to confirm the validity of the information provided, offering an additional layer of assurance alongside digital verification.",
        },
        {
            title: "How does the combination of 4D GIS and ground verification work?",
            description: "Digital verification using 4D GIS maps out the address or asset in real time, while ground verifiers physically inspect the location. This dual approach ensures higher accuracy, as discrepancies detected digitally can be immediately checked on the ground.",
        },
        {
            title: "What kind of documents or assets can be verified using this system?",
            description: "This system can verify residential and commercial addresses, real estate assets, guarantor addresses, office locations, and more. It is especially useful for institutions requiring verified addresses for legal, financial, or regulatory purposes.",
        },
        {
            title: "What industries can benefit from 4D GIS and ground verification?",
            description: "Financial services (banks, insurance), telecommunications, real estate, logistics, and government sectors can benefit greatly, particularly for customer onboarding, risk assessment, or compliance purposes.",
        },
        {
            title: "How secure is the verification process?",
            description: "Both the digital and physical verification processes use secure channels for data transmission. 4D GIS ensures accurate geospatial data collection, while ground verifiers follow strict protocols to safeguard personal or sensitive information during inspections.",
        },
        {
            title: "Can verification be done remotely using 4D GIS alone?",
            description: "Yes, 4D GIS can provide an initial layer of verification remotely, but for high-risk or high-value verifications, physical ground inspections are often recommended to eliminate any doubts or discrepancies.",
        },
        {
            title: "How long does a full verification process take?",
            description: "Depending on the complexity of the verification and the location, the process can take from a few hours to a couple of days. Digital checks using 4D GIS are almost instantaneous, while physical ground verification can",
        },
        {
            title: "How does the verification process ensure data security?",
            description: "Both digital and physical verification processes implement data security measures, such as encryption for digital data, secure channels for information transmission, and secure storage of verification results. Ground verifiers are trained to handle sensitive information responsibly",
        },
        {
            title: "How often should verification occur?",
            description: "he frequency of verification depends on the type of asset and regulatory requirements. High-value or high-risk assets may require more frequent checks, while routine inspections could be scheduled annually or bi-annually.",
        },
        {
            title: "What role does technology play in the verification process?",
            description: "Technology plays a critical role in both digital and physical verification, enabling real-time data collection, analysis, and reporting. Tools such as mobile apps for ground verifiers, GPS tracking, and cloud-based databases enhance efficiency and accuracy.",
        },
        {
            title: "What are the advantages of using a ground verifier network?",
            description: "Local knowledge, faster verification times, and enhanced accuracy by confirming digital data through physical checks are key benefits of this approach.How are ground verifiers trained?:Ground verifiers typically undergo rigorous training that includes data collection methods, understanding local regulations, and ethical standards for conducting verifications.",
        },


    ]
    return (
        <div className=' outfit  bg-white'>
            <ScrollToTopButton /> 
            <MobileHeader />
            <Header />
            <div className='relative'>
                <Image src={resources} alt='' className='w-full h-auto' />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <h1 className='text-secondary text-2xl lg:text-5xl font-bold'>Resources</h1>
                </div>
            </div>

            <div className=' px-2  lg:px-48 py-7 lg:py-20'>
                <div>
                    <h1 className=' text-2xl lg:text-4xl text-secondary font-bold'>News & Articles</h1>
                </div>
                <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-10 pt-10'>
                    {
                        BlogData.map((list: any) => {
                            return (<BlogCards date={list.date} blogTitle={list.blogTitle} blogImage={list.blogImage} onClick={() => {
                                window.open(`${list.route}`, '_blank');
                            }} />);
                        })
                    }



                </div>
                <div className=' grid grid-cols-10'>
                    <div className=' col-span-10 lg:col-span-7'>
                        <div className=' pt-8  lg:pt-24 pb-7 lg:pb-10'>
                            <h1 className=' text-3xl lg:text-4xl text-secondary font-bold'>FAQ<span className=' text-2xl font-extrabold'>S</span></h1>
                        </div>
                        {
                            FAQARRAY.map((list) => {
                                return (
                                    <FqaCards title={list.title} description={list.description} />
                                );
                            })
                            //  
                        }
                    </div>
                    <div className=' col-span-10 lg:col-span-3'>

                    </div>
                </div>
                <div className=' mt-10 lg:mt-36'>
                    <ContactSales />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page;