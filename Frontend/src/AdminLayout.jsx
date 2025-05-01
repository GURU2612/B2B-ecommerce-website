import React from 'react';
import Toplink from './Component/Navbar/Toplink';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Content/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AdminNavbar from "@src/Admin/AdminNavbar/AdminNavbar.jsx";

const AdminLayout = () => {
    return (
        <>
            <AdminNavbar/>
            <Outlet />
            <Footer />
        </>
    );
};

export default AdminLayout;
