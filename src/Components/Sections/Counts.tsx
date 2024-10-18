import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import image1 from "../../assets/nimbus_rocket.png";
import image2 from "../../assets/mingcute_announcement-line.png";
import image3 from "../../assets/basil_book-outline.png"
import { useInView } from 'react-intersection-observer';

const Counts = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    const [count, setCount] = useState(0);
    const target = 1000; // The number you want to count to
    const duration = 5000; // The duration of the animation in milliseconds (2 seconds)

    useEffect(() => {
        let start = 0;
        const incrementTime = Math.abs(Math.floor(duration / target)); // Time between increments

        const timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === target) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [target, duration,inView]);

    const [count2, setCount2] = useState(0);
    const target2 = 40; // The number you want to count to
    const duration2 = 5000; // The duration of the animation in milliseconds (2 seconds)

    useEffect(() => {
        let start = 0;
        const incrementTime = Math.abs(Math.floor(duration / target2)); // Time between increments

        const timer = setInterval(() => {
            start += 1;
            setCount2(start);

            if (start === target2) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [target2, duration2,inView]);


    const [count3, setCount3] = useState(0);
    const target3 = 15; // The number you want to count to
    const duration3 = 5000;


    useEffect(() => {
        let start = 0;
        const incrementTime = Math.abs(Math.floor(duration / target3)); // Time between increments

        const timer = setInterval(() => {
            start += 1;
            setCount3(start);

            if (start === target3) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [target3, duration3,inView]);

    return (
        <div className=' grid place-items-center bg-[#F8B780] mt-10 lg:mt-16 py-8 lg:py-20'>
            <div ref={ref} className=' grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-10'>
                <div className=' flex items-center space-x-4 border-r lg:border-[#6385c7]  h-20 lg:h-36 pr-10'>
                    <div>
                        <Image height={70} alt='' src={image1} />
                    </div>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold text-white text-5xl'>

                            {inView ? ` ${count}+` : ''}
                        </h1>
                        <p className=' text-white'>Verifications so far</p>
                    </div>

                </div>
                <div className=' flex items-center space-x-4 border-r lg:border-[#6385c7]'>
                    <div>
                        <Image height={70} alt='' src={image2} />
                    </div>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold text-white text-5xl'> {inView ? ` ${count2}+` : ''}</h1>
                        <p className=' text-white'>Clients</p>
                    </div>

                </div>
                <div className=' flex items-center space-x-4'>
                    <div>
                        <Image height={70} alt='' src={image3} />
                    </div>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold text-white  text-5xl'> {inView ? ` ${count3}` : ''}+</h1>
                        <p className=' text-white'>Countries so far</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Counts;