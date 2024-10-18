import React from 'react';

interface Props {
    title: string;
}

const GeofyListTile: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1 className=' text-xl lg:text-3xl font-medium pb-3 text-[#6B5A00]'>{title}</h1>
            <div className=' border-b border-[#FFD600]'>

            </div>
        </div>
    )
}

export default GeofyListTile;