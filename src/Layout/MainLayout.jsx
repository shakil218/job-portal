import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;