import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import List from './list/List'
import './Airlines.css'
import '../../App.css'
import { getDefaultNormalizer } from "@testing-library/react";


function Airlines(props){
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [airlinesList, setAirlinesList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(10);

    let indexOfLastRecord = currentPage * recordsPerPage;
    let indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    let nPages = Math.ceil(items.length / recordsPerPage)

    

    return (
        <div>
            <div className="backGroundImage">
                
                {/* <img src={process.env.PUBLIC_URL + '/images/airplane-wallpaper.png'} />; */}
            </div>
            <List />
        </div>

    )
}

export default Airlines



// {airlinesList.map((airline) => (
//     <Airlines 
//       propes = {airlinesList}
//     /> 
//   ))}



// "id": 1,
// "name": "Quatar Airways",
// "country": "Quatar",
// "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
// "slogan": "Going Places Together",
// "head_quaters": "Qatar Airways Towers, Doha, Qatar",
// "website": "www.qatarairways.com",
// "established": "1994"