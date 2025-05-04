import React from 'react';
import bookImage from '../../assets/books.jpg';


const Banner = () => {
    return (
        <div className='bg-gray-100 flex justify-around items-center mt-10 p-20 rounded-3xl mb-20'>
            <div>
                <h1 className='playfair-display text-5xl font-bold w-[526px] mb-10 leading-relaxed'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] work-sans text-white'>View The List</button>
            </div>
            <div>
                <img src={bookImage} alt="" className='w-[324px] h-[340px]' />
            </div>
        </div>
    );
};

export default Banner;