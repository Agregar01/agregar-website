import React, { useRef, useState } from 'react'
import vector from "../assets/Vector.png"
import Image from 'next/image';
import frame from "../assets/mask_bg.png";
import play_logo from "../assets/play_logo.png";
import playframe from "../assets/playframe.png";
import { useRouter } from 'next/navigation';


const Banner: React.FC = () => {
    const router = useRouter();

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleOpenVideo = () => {
        setIsVideoOpen(true); // Show the video player
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play(); // Automatically play the video if the ref exists
            }
        }, 100); // Small delay to ensure the video is loaded
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video when closing
            videoRef.current.currentTime = 0; // Reset the video to the start
        }
    };

    return (
        <>
            {isVideoOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative w-full max-w-2xl">
                        <video
                            ref={videoRef}
                            controls
                            className="w-full h-auto"
                        >
                            <source src="./videos/Agregar Intro Video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 rounded-full"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}

            <div className=' grid place-items-center h-[630px] bg-[#FFB88F] relative w-full'>
                <Image
                    className=' lg:py-20 py-0'
                    src={vector} // Replace with your image path
                    alt="Background image"
                    layout="fill" // Fill the div
                    objectFit="contain" // Cover the entire div
                    quality={100} // Optional: set image quality
                    priority // Optional: load image with priority
                />
                <div className=' grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-52 relative z-10 gap-6 lg:gap-20'>
                    <div className=' space-y-5 animate__animated animate__backInLeft'>
                        <div className=' space-y-3'>
                            <h1 className=' font-bold text-3xl  text-secondary outfit lg:text-[43px]'>Innovating Trust with AI-</h1>
                            <h1 className=' font-bold text-3xl text-secondary outfit lg:text-[43px]'>Powered Verification</h1>
                            <h1 className=' font-bold text-3xl text-secondary outfit lg:text-[43px]'>Solutions</h1>
                        </div>
                        <div className=' space-y-6'>
                            <div><p className=' text-secondary outfit'> Streamline Operations, mitigate risks, and sensure compliance with our AI-driven verification solutions</p></div>
                            <div className=' flex items-center space-x-5'>
                                <button onClick={() => {
                                    window.location.href = "mailto:sales@agregartech.com";
                                }} className=' border-2 border-secondary text-secondary font-semibold px-4 rounded-[6px] py-2 outfit hover:border-white hover:text-white'>Book a Demo</button>
                                <button onClick={() => {
                                    router.push("/solutions/know-your-customer");
                                }} className=' bg-primary text-white font-semibold px-8 py-2 rounded-[6px] border-2 border-primary outfit hover:bg-secondary'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleOpenVideo} className=' cursor-pointer'>
                        <Image
                            height={300}
                            src={playframe} // Replace with your image path
                            alt="Background image"
                            // layout="fill" // Fill the div
                            objectFit="contain" // Cover the entire div
                            quality={100} // Optional: set image quality
                        // priority // Optional: load image with priority
                        />
                        <div>

                            {/* <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 cursor-pointer group">
                                <Image alt='' src={play_logo} height={150} />
                                <div className="absolute inset-0 rounded-full border-4 border-secondary animate-blink"></div>
                            </div> */}
                        </div>

                    </div>

                    {/* <div onClick={handleOpenVideo} className='relative cursor-pointer'>

                        <Image
                            height={300}
                            src={frame} // Replace with your image path
                            alt="Background image"
                            objectFit="contain" // Cover the entire div
                            quality={100} // Optional: set image quality
                        />


                        <div className="absolute  transform -translate-x-1/2 -translate-y-1/2  h-20 w-20 rounded-full  cursor-pointer group">
                            <div>
                                <Image alt='' src={play_logo} height={150} />
                                <div className="absolute inset-0 rounded-full border-8 border-secondary animate-blink"></div>
                            </div>
                        </div>

                    </div> */}


                </div>
            </div>
        </>
    )
}

export default Banner;