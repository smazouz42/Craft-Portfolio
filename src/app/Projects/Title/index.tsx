import React from 'react';

interface TitleProps {
    width?: number;
    title: string;
}

const Title: React.FC<TitleProps> = ({ width, title }) => {
    return (
        <div className='flex justify-between'>
            <h1 className='text-3xl text-white flex items-center gap-2'>
                <span className="text-purple-400">#</span>{title}
                <div className='h-[2px] bg-purple-400' style={{ width: `${width}px` }}></div>
            </h1>
            <span className='text-white text-lg'> View all ~~&gt;</span>
        </div>
    )
}

export { Title };