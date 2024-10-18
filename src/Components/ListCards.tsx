import React from 'react';

interface Props {
    title?: string;
    description?: string;
}

const ListCards: React.FC<Props> = ({ title, description }) => {
    return (
        <div className=' bg-white border-l-4 border-primary space-y-4 py-3 px-6'>
            <h1 className=' font-bold text-secondary text-lg outfit'>{title}</h1>
            <p className=' text-secondary outfit'>{description}</p>
        </div>
    )
}

export default ListCards;