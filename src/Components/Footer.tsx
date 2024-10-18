"use client"
import React from 'react';
import Logo from "../assets/Agregar_Logo_Orange 1.png";
import Image from 'next/image';
import socila1 from "../assets/mdi_instagram.png";
import socila2 from "../assets/mdi_youtube.png";
import socila3 from "../assets/ri_twitter-fill.png"
import socila4 from "../assets/ic_round-facebook.png"
import FoooterList from './FoooterList';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();
    return (
        <div className=' bg-[#261204] px-2 lg:px-28 py-14 lg:py-24'>
            <div className=' grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-20'>
                <div className=' space-y-5 col-span-3'>
                    <Image height={230} width={230} src={Logo} alt='' />
                    <p className=' text-white text-sm'>Agregar provides platforms and solutions designed to mitigate risks associated with customer, employee & vendor onboarding</p>
                    <div className=' flex items-center space-x-3'>
                        <Image alt='no image' src={socila1} width={30} height={30} />
                        <Image alt='no image' src={socila2} width={30} height={30} />
                        <Image alt='no image' src={socila3} width={30} height={30} />
                        <Image alt='no image' src={socila4} width={30} height={30} />
                    </div>
                </div>
                <div className=' col-span-10 lg:col-span-7'>
                    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0'>
                        <div>
                            <h1 className=' text-xl font-bold text-white'>Solutions</h1>
                            <div className=' mt-5'>
                                <FoooterList onClick={() => {
                                    router.push("/solutions/know-your-employee");
                                }}  listName='KYE' />
                                <FoooterList listName='KYC'  onClick={() => {
                                    router.push("/solutions/know-your-customer");
                                }} />
                                <FoooterList listName='Vendor Onboarding' onClick={() => {
                                    router.push("/solutions/vendor-onboarding");
                                }} />
                                <FoooterList listName='KYB'  onClick={() => {
                                    router.push("/solutions/know-your-business");
                                }} />
                                <FoooterList listName='KYI' onClick={() => {
                                    router.push("/solutions/know-your-investor");
                                }} />
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-xl font-bold text-white'>Industries</h1>
                            <div className='mt-5'>
                                <FoooterList listName='Banking and Finance' onClick={() => {
                                    router.push("/industries/financial-services");
                                }} />
                                <FoooterList listName='Healthcare & pharma'  onClick={() => {
                                    router.push("/industries/healthcare");
                                }} />
                                <FoooterList listName='Education' onClick={() => {
                                    router.push("/industries/education");
                                }} />
                                <FoooterList listName='Manufacturing' onClick={() => {
                                    router.push("/industries/manufacturing");
                                }} /> 
                                <FoooterList listName='Travel & Hospitality' onClick={() => {
                                    router.push("/industries/travel&hospitality");
                                }} />
                                <FoooterList listName='E-commerce & Retail' onClick={() => {
                                    router.push("/industries/travel&hospitality");
                                }} />
                                <FoooterList listName='Gaming' onClick={() => {
                                    router.push("/industries/gaming");
                                }} />
                                <FoooterList listName='Insurance' onClick={() => {
                                    router.push("/industries/insurance");
                                }} />
                                <FoooterList listName='Telecommunication' onClick={() => {
                                    router.push("/industries/telecommunications");
                                }} />
                                <FoooterList listName='FMCD & FMCD' onClick={() => {
                                    router.push("/industries//industries/fmcg&fmcd");
                                }} />
                                <FoooterList listName='Staffing & Recruitment' onClick={() => {
                                    router.push("/industries/staffing&recruitment");
                                }} />
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-xl font-bold text-white'>Platforms</h1>
                            <div className='mt-5'>
                                <FoooterList listName='Empverify' onClick={() => {
                                      window.open('https://www.empverify.com/', '_blank');
                                }} />
                                <FoooterList listName='Validar' onClick={() => {
                                    router.push("/platforms/validar");
                                }} />
                                <FoooterList listName='Geofy' onClick={() => {
                                  router.push("/platforms/geofy");
                                }} />
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-xl font-bold text-white'>Address & Contact</h1>
                            <div className=' space-y-6 mt-5'>
                                <h1 className=' font-bold text-sm text-white'>Trinity Baptist Church, UPSA Road, Accra,
                                    Ghana</h1>
                                <div>
                                    <h1 className=' text-sm text-white'>Call Us:</h1>
                                    <h1 className=' text-sm text-white'>+233 (0) 20 984 4520</h1>
                                    <h1 className='  text-sm text-white'>+233 (0) 20 984 4520</h1>
                                </div>
                                <h1 className='  text-sm text-white'>
                                    info@agregartech.com
                                </h1>
                                <h1 className='  text-sm text-white'>We are open from Monday to Friday
                                    9.00 AM - 5.00 PM</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer