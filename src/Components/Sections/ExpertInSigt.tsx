import { useRouter } from 'next/navigation';
import React from 'react'
import { useInView } from 'react-intersection-observer';


const ExpertInSigt: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    const router = useRouter();
    return (
        <div ref={ref} className=' py-16 lg:py-36 px-2 lg:px-52'>
            <div className={` ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                <h1 className=' font-bold text-[30px] text-center'>Experts insights at your finger tips</h1>
                <p className=' text-center'>Background verification, due diligence, candidate experience and more.</p>

                <div className=' grid place-items-center mt-6'>
                    <div onClick={() => {
                        router.push("/resources");
                    }} className=' flex items-center space-x-3 hover:underline cursor-pointer text-primary'>
                        <p className=' text-primary font-semibold'>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10  ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                <div className=' bg-[#D9D9D9] rounded-[13px] px-6 py-10'>
                    <div className=' space-y-4'>
                        <h1 className=' font-bold text-lg'>What is a background check?</h1>
                        <p>A background check is a process used by employers or organizations to verify a person's identity, criminal history, employment, education, and other records.
                        </p>
                    </div>

                </div>
                <div className=' bg-[#D9D9D9] rounded-[13px] px-6 py-10'>
                    <div className=' space-y-4'>
                        <h1 className=' font-bold text-lg'>What information is included in a background check?</h1>
                        <p>It typically includes criminal records, employment history, education verification, credit history, and sometimes drug test results.</p>
                    </div>


                </div>
                <div className=' bg-[#D9D9D9] rounded-[13px] px-6 py-10'>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold text-lg'>How long does a background check take?</h1>
                        <p>The process usually takes anywhere from 24 hours to a few weeks, depending on the depth of the search and the agencies involved.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExpertInSigt;