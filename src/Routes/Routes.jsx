import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/bookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            path:'/',
            loader:()=>fetch('booksData.json'),
            Component:Home

        },
        {
            path:'/about',
            Component:About,
        },
        {
          path:'readList',
          loader:()=>fetch('booksData.json'),
          Component:ReadList,

        },
        {
            path:'/bookDetails/:id',
            loader:()=>fetch('booksData.json'),
            Component:BookDetails
        }

      ]
    },
  ]);