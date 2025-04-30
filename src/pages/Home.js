import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React,{useEffect} from 'react'

//components
// import login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Jkdev from '../components/Header/Jkdev';
import NewsSection from '../components/Header/NewsSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return(
    <>
    {/* <login/> */}
    <Navbar/>
    <Banner/>
    <Header/>
    <Jkdev/>
    <NewsSection/>
    <Footer/>
    </>
  )
}


