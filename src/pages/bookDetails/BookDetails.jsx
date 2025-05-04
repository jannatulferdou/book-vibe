import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';


const BookDetails = () => {

    const {id}=useParams();

    const bookId=parseInt(id)

    const data=useLoaderData();
    console.log(data);

    const singleBook=data.find(book=>book.bookId===bookId)

    const {bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing,rating}=singleBook || {};


    const handleMarkAsRead=(id)=>{

        // store with id
        // where to store
        // array or collection
        // if book already exist show a alert
        // if book not in the collection then push in the collection or array

        addToStoredDB(id)

    }
    
    return (
        <div className='flex mt-20 mb-20 gap-25'>
            <div className='border-1 p-15 bg-gray-100 rounded-2xl border-hidden'><img src={image} alt="" className=' h-[740px] w-[450px]'/></div>
            <div>
            <div className='border-b-1 border-gray-300 w-[550px] py-7'>
            <h2 className="card-title mt-7 mb-5 playfair-display font-bold text-5xl ">
     {bookName}
     
    </h2>
    <h5 className='work-sans font-medium text-xl'>By : {author}</h5>
            </div>
            <h5 className='mb-4 mt-4 work-sans'>{category}</h5>

            <div className='w-[550px] border-y-1 border-gray-300 py-7'>
                <p className='work-sans'><span className='font-bold'>Review:</span>{review}</p>
                <div className='flex gap-10 mt-7 work-sans'>
                    <h5 className='font-bold relative top-1'>Tag</h5>
                    {
        tags.map(tag=><button key={tag} className='btn text-[#23BE0A] work-sans bg-[#e8f0e6] font-semibold'>#{tag}</button>)
       }
                </div>
            </div>

            <div className='work-sans mt-6'>
                <p className='flex gap-8 mb-4'>Number of Pages: <span className='font-bold'>{totalPages}</span></p>
                <p className='flex gap-23 mb-4'>Publisher: <span className='font-bold'>{publisher}</span></p>
                <p className='flex gap-7 mb-4'>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='flex gap-30'>Rating: <span className='font-bold'>{rating}</span></p>

                <div className='flex gap-8 mt-8'>
                    <button onClick={()=>handleMarkAsRead(id)} className='btn btn-lg'>Mark As Read</button>
                    <button className="btn btn-lg bg-[#50B1C9] text-white">Wishlist</button>
                </div>

            </div>
            </div>
        </div>
    );
};

export default BookDetails;