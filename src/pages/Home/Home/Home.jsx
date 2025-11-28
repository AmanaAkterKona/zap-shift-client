import React from 'react';
import Banner from '../Banner/Banner';
import Banner1 from '../Banner1/Banner1';
import Banner2 from '../Banner2/Banner2';
import Brands from '../Brands/Brands';
import SafeZone from '../SafeZone/SafeZone';
import Marchent from '../Marchent/Marchent';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';


const reviewsPromise = fetch('/reviews.json').then(res => res.json()); 

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Banner1></Banner1>
            <Banner2></Banner2>
            <Brands></Brands>
            <SafeZone></SafeZone>
            <Marchent></Marchent>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <FAQ></FAQ>


           
        </div>
    );
};

export default Home;