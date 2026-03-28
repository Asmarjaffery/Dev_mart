import React from 'react'
import TopBar from '../header/top-bar'
import Navbar from '../header/navbar'
import Footer from '../footer/footer'


export const PageLayout = ({children}) => {
    return (
        <>
            <TopBar></TopBar>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>

        </>
    )
}

export default PageLayout