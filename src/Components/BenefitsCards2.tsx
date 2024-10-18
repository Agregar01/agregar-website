import React from 'react';

interface Props {
    text?: string;
}

const BenefitCards2: React.FC<Props> = ({ text }) => {
    return (
        <div className='border-b border-[#CDCBCF] mb-2 pb-3'>
            <h1 className=' font-bold text-base text-textcolor'>{text}</h1>

        </div>
    )
}

export default BenefitCards2;