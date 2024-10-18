import React from 'react';
import image from "../../assets/Rectangle 4.png";
import Image from 'next/image';
import Header from '@/Components/Header';
import image2 from "../../assets/Vector (1).png";
import ballon_vector from "../../assets/Vector _ballon.png";
import BenefitCards from '@/Components/BenefitCards';
import Footer from '@/Components/Footer';
import geofyapp from "../../assets/geofy_app.png";
import AppStore from "../../assets/App store.png";
import PlayStore from "../../assets/Playstore.png";
import TestimonialCard from "../../assets/Mask group.png";
import TestimoniasCards from '@/Components/TestimoniasCards';
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import vef1 from "../../assets/vef1.png";
import vef2 from "../../assets/vef2.png";
import vef3 from "../../assets/vef3.png";
import GroundVerifiersCard from '@/Components/GroundVerifiersCard';
import BenefitCards2 from '@/Components/BenefitsCards2';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page: React.FC = () => {
    // {
    //     firstname:"",
    //     middlename:"",
    //     surname:"",
    //     dob:"",
    //     gender:""
    //     location:"",
    //     nationality:"",
    //     postaladdress:"",
    //     prevSchool:"",
    //     parentfname:"",
    //     parentlastname:'a'
    //     postaladdresss:"",
    //     nationality:"",
    //     phone:"",
    //     idType:"",
    //     idNumber:"",
    //     email:"",
    //     whatsappNumber:"",
    //     profession:"",
    //     relationship:""
    // }
    return (
        <div className='outfit bg-background'>
            <ScrollToTopButton />
            <Header />
            <MobileHeader />
            <Image src={image} alt='' />
            <div>
                <div className=' px-2 lg:px-40 mt-5 lg:mt-40 lg:mb-24 mb-7'>
                    <div className=' grid grid-cols-10 gap-6 lg:gap-20'>
                        <div className=' col-span-10 lg:col-span-6'>
                            <div className=' space-y-2 lg:space-y-4'>
                                <h1 className=' text-secondary font-bold text-2xl lg:text-4xl'>Groud Verifiers</h1>
                                <h1 className='text-secondary font-bold text-2xl lg:text-4xl'>Building Trust with Technology</h1>
                                <p className=' text-graytext1'>Join our expanding network of verifiers dedicated to fostering trust in the workplace. Agregar's ground verifiers extend beyond West Africa, playing a crucial role in conducting essential verifications such as physical address checks, regional and rural court verifications, guarantor, asset, and police verifications. Our ground verifiers are equipped with cutting-edge technology, including geo-mapping, triangulation, and proximity algorithms, to excel in their tasks efficiently.</p>
                            </div>
                        </div>
                        <div className=' col-span-10 lg:col-span-4'>
                            <Image height={300} alt='no image' src={image2} />
                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 lg:px-24 px-4'>
                        <div>
                            <Image width={400} height={400} src={ballon_vector} alt='no image' />

                        </div>
                        <div>
                            <div className=' border-b border-[#CDCBCF] space-y-4'>
                                <h1 className=' font-bold text-2xl lg:text-3xl text-textcolor'>Benefits</h1>
                                <p className=' text-graytext1 pb-3'>Our advanced Document Authentication system utilizes state-of-the-art technology to offer a range of robust fraud detection measures.</p>
                            </div>
                            <div className=' mt-4'>
                                <BenefitCards showDescription text='Income:' description='Earn up to 300 cedis daily' />
                                <BenefitCards showDescription text='Flexibility:' description='Work on your own terms, with the ability to choose your work hours.' />
                                <BenefitCards showDescription text='Network:' description='Grow your personal and professional networks through daily interactions' />
                                <BenefitCards showDescription text='Impact:' description='Help build trust in your community by verifying key information and contributing to the integrity of the workforce.' />
                            </div>

                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:px-48 px-4 lg: mt-8 lg:mt-28'>
                        <div className=' lg:pl-36 pl-36'>
                            <Image src={geofyapp} alt='no image' width={200} height={200} />
                            <div className=' lg:grid place-items-center lg:pr-24 pl-12'>
                                <div className=''>
                                    <Image height={30} alt='no image' src={PlayStore} />
                                </div>
                            </div>
                        </div>
                        <div className=' mt-7 lg:mt-7'>
                            <div className='border-b border-[#CDCBCF]'>
                                <h1 className=' font-bold text-2xl lg:text-3xl text-secondary mb-4'>What you need to get started</h1>
                            </div>
                            <div className=' mt-5 space-y-5'>
                                <BenefitCards2 text='An Android smartphone with OS 6.0 or higher' />
                                <BenefitCards2 text='You must be at least 18 years old' />
                                <BenefitCards2 text='A certificate of secondary school completion or higher' />
                                <BenefitCards2 text='A working email address and basic email literacy' />
                                <BenefitCards2 text='A dependable mode of transportation' />
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className=' grid  place-items-center relative h-[500px] z-10'>
                    <Image src={TestimonialCard} alt='no image'
                        layout="fill" // Fill the div
                        objectFit="cover" // Cover the entire div
                        quality={100} // Optional: set image quality
                        priority />
                    <div className=' relative z-10'>
                        <div className=' space-y-4 py-24'>
                            <h1 className=' text-center font-bold text-3xl lg:text-5xl text-white'>Ground Verifiers Testimonials</h1>
                        </div>
                        <div className=' grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-4 px-2 lg:px-64'>
                            <GroundVerifiersCard vefImage={vef1} vefName='Ed Nana Bondzie Baffoe' stories="Being a ground verifier for Agregar Technology has been an amazing opportunity for me. It allows me to interact with individuals from various backgrounds and communities. Agregar's Geofy platform streamlines the verification process, making my job effortless. I earned GH₵640 from verifications in just the first week. I’m passionate about Agregar Technology." />
                            <GroundVerifiersCard vefImage={vef2} vefName='Jeremiah' stories="I enjoy collaborating with this team because the environment fosters the opportunity to give one's utmost. The most rewarding aspect of the job has been engaging with candidates. My experience with Agregar has been enriching, and I look forward to continuing to work with them for as long as possible." />
                            <GroundVerifiersCard vefImage={vef3} vefName='Regina' stories="Working with Agregar Technologies has been incredibly rewarding and flexible. The Geofy platform's shift selection feature enables me to choose my working hours. Being a ground verifier has become my primary side hustle. I am grateful to Agregar for this opportunity" />


                        </div>
                    </div>
                </div>
                <div className=' px-2 lg:px-40'>
                    <ContactSales />
                </div> */}

                <div className='grid place-items-center relative min-h-[500px]'> {/* Ensure minimum height */}
                    <Image
                        src={TestimonialCard}
                        alt='no image'
                        layout='fill' // Fill the div
                        objectFit='cover' // Cover the entire div
                        quality={100} // Optional: set image quality
                        priority
                        className='absolute top-0 left-0 w-full h-full' // Ensure image fills the container properly
                    />
                    <div className='relative z-10 w-full'> {/* Ensure full width */}
                        <div className='space-y-4 py-24'>
                            <h1 className='text-center font-bold text-3xl lg:text-5xl text-white'>
                                Ground Verifiers Testimonials
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-4 px-2 lg:px-64 mb-[-100px]'>
                            <GroundVerifiersCard
                                vefImage={vef1}
                                vefName='Ed Nana Bondzie Baffoe'
                                stories="Being a ground verifier for Agregar Technology has been an amazing opportunity for me. It allows me to interact with individuals from various backgrounds and communities. Agregar's Geofy platform streamlines the verification process, making my job effortless. I earned GH₵640 from verifications in just the first week. I’m passionate about Agregar Technology."
                            />
                            <GroundVerifiersCard
                                vefImage={vef2}
                                vefName='Jeremiah'
                                stories="I enjoy collaborating with this team because the environment fosters the opportunity to give one's utmost. The most rewarding aspect of the job has been engaging with candidates. My experience with Agregar has been enriching, and I look forward to continuing to work with them for as long as possible."
                            />
                            <GroundVerifiersCard
                                vefImage={vef3}
                                vefName='Regina'
                                stories="Working with Agregar Technologies has been incredibly rewarding and flexible. The Geofy platform's shift selection feature enables me to choose my working hours. Being a ground verifier has become my primary side hustle. I am grateful to Agregar for this opportunity"
                            />
                        </div>
                    </div>
                </div>

                {/* Add margin for separation */}
                <div className='px-2 lg:px-40  mt-56 lg:mt-72'> {/* Add more top margin for better spacing */}
                    <ContactSales />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page;