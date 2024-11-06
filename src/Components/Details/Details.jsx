import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import DetailsHome from '../DetailsHome/DetailsHome';

const Details = () => {
    

    return (
        // <div>
        //     <h1>{item.title}</h1>
        //     <p>Price: {item.price}k</p>
        //     <p>{item.description}</p>
        //     <p>Category: {item.category}</p>
        //     <p>Availability: {item.availability ? "In Stock" : "Out of Stock"}</p>
        //     <p>Rating: {item.rating}</p>
        // </div>

       <>
        <DetailsBanner></DetailsBanner>
        <DetailsHome></DetailsHome>
       </>

    );
};

export default Details;