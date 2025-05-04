import React, { Suspense, useEffect, useState } from 'react';
// import { data } from 'react-router';
import Book from '../book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks]=useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>
    //         // console.log(data)
    //         setAllBooks(data)
            
    //     )
    // })

    // const bookPromise= fetch('./booksData.json').then(res=>res.json());
    return (
        <div className='mb-20'>
            <h1 className='playfair-display text-center text-3xl font-bold mb-5 '>Books</h1>
            <Suspense fallback={<span>loading....</span>}>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 '>
            {
                data.map(book=><Book book={book} key={book.bookId}></Book>)
            }
            </div>

            </Suspense>
            
        </div>
    );
};

export default Books;