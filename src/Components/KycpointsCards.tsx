import React from 'react';
import kye_dot from "../assets/kye_dot.png";
import Image from 'next/image';

interface Props {
    header?: string;
    description?: string;
    showdescription?: boolean;
}

const KycpointsCards: React.FC<Props> = ({ header, description, showdescription }) => {
    return (
        <div className=' border-b border-primary'>
            <div className=' flex items-center space-x-4'>
                <Image height={14} src={kye_dot} alt='' />
                <div className=' pb-2'>
                    {showdescription ? <p className=' text-textcolor pt-3'>{description}</p> :
                        <p className=' font-bold text-secondary '>{header}</p>

                    }
                </div>
            </div>
        </div>
    )
}

export default KycpointsCards