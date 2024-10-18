import React from 'react';

interface Props {
    text?: string;
    description?: string;
    showDescription?: boolean;
}

const BenefitCards: React.FC<Props> = ({ text, description, showDescription }) => {
    return (
        <div className='border-b border-[#CDCBCF] mb-2'>
            <h1 className=' font-bold text-base text-textcolor'>{text}</h1>
            {showDescription ?
                <p className=' text-textcolor text-base pb-3'>{description}</p>
                : null}
        </div>
    )
}

export default BenefitCards;