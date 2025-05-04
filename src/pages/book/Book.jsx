import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {image, bookName, category, tags, author, rating, yearOfPublishing, bookId}=book;

    // const data=use(bookPromise)
    return (
   <Link to={`/bookDetails/${bookId}`}>
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm p-8">
  <figure className='border-1 px-20 py-10 rounded-xl bg-gray-100 border-hidden'>
    <img
      src={image}
      alt="Shoes" className=' h-[166px]'/>
  </figure>
  <div className="">

    <div className='mt-6 gap-10 flex'>
       {
        tags.map(tag=><button className='btn text-[#23BE0A] work-sans bg-[#e8f0e6]'>{tag}</button>)
       }
    </div>
    <h2 className="card-title mt-7 mb-5 playfair-display font-bold text-2xl">
     {bookName}
     <div className="badge badge-secondary ">{yearOfPublishing}</div>
    </h2>
    <h5 className='mb-5 work-sans font-medium'>By : {author}</h5>
    <div className="flex border-dashed border-t-1 border-gray-300 pt-3">
      <div className="text-lg font-medium work-sans ">{category}</div>
      <div className="justify-end flex relative left-50 text-lg gap-1 font-medium">{rating}<CiStar className='w-6 h-6 relative top-0.5'></CiStar></div>
    </div>
  </div>
</div>
        </div>
   </Link>
    );
};

export default Book;