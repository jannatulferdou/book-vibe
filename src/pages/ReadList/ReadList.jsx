import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../book/Book';
import { Helmet } from 'react-helmet-async';

const ReadList = () => {

    const data=useLoaderData();

    const [readList, setReadList]=useState([]);
    const [sort, setSort]=useState('');


    useEffect(()=>{
        const storedBookData=getStoredBook();
        const convertedStoredBooks=storedBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId));

        setReadList(myReadList)

    },[])

    const handleSort=(type)=>{
        setSort(type);

        if(type==='pages'){
            const sortedByPages=[...readList].sort((a, b)=>a.totalPages-b.totalPages);
            setReadList(sortedByPages)
        }
        if(type==='ratings'){
            const sortedByRatings=[...readList].sort((a, b)=>a.ratings-b.ratings);
            setReadList(sortedByRatings)
        }

    }
    return (
        <div>
          <Helmet>
            <title>Read List</title>
          </Helmet>
            <details className="dropdown">
  <summary className="btn m-1">Sort By: {sort? sort: ''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('ratings')}>ratings</a></li>
  </ul>
</details>
              <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read:{readList.length}</h2>
      {
        readList.map(list=><Book key={list.bookId} book={list}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;