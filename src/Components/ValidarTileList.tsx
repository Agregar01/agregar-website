import React from 'react';

interface Props {
    title: string;
}

const ValidarTileList: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1 className=' text-xl lg:text-3xl font-medium pb-4 text-[#3C4D19]'>{title}</h1>
            <div className=' border-b border-[#2B3190]'>

            </div>
        </div>
    )
}

export default ValidarTileList;