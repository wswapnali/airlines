import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
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

    

    useEffect(() => {
        // fetch('https://api.instantwebtools.net/v1/airlines/1')
        fetch('https://api.instantwebtools.net/v1/airlines')
        .then(response => response.json())
        // .then(
        //     (result) => {
        //         setIsLoaded(true);
        //         setError(error)
        //     }
        //     )
        .then(response => {
            setIsLoaded(true);
            setItems(response)
            setCurrentPage(1)
            indexOfLastRecord = currentPage * recordsPerPage;
            indexOfFirstRecord = indexOfLastRecord - recordsPerPage;        
            nPages = Math.ceil(items.length / recordsPerPage)
            setAirlinesList(response.slice(0,10))
        
        })
        }, [])

        const nextPage = () => {
            if(currentPage != nPages) {
                console.log("indexOfFirstRecord : ",indexOfFirstRecord )
                console.log("indexOfLastRecord : ",indexOfLastRecord )
                setCurrentPage(currentPage + 1)
                indexOfLastRecord = (currentPage  + 1) * recordsPerPage;
                indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
                setAirlinesList(items.slice(indexOfFirstRecord,indexOfLastRecord))
            }
        }

        const prevPage = () => {
            if(currentPage != 1) {
                setCurrentPage(currentPage - 1)
                indexOfLastRecord = currentPage * recordsPerPage;
                indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
                setAirlinesList(items.slice(indexOfFirstRecord,indexOfLastRecord))
            }
        }
    
        const firstPage = () => {
            if(currentPage != nPages) {
                setCurrentPage(1)
                indexOfLastRecord = 1 * recordsPerPage;
                indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
                setAirlinesList(items.slice(indexOfFirstRecord,indexOfLastRecord))
            }
        }
        const lastPage = () => {
            if(currentPage != 1) {
                setCurrentPage(nPages)
                
                indexOfLastRecord = currentPage * recordsPerPage;
                indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
                setAirlinesList(items.slice(indexOfFirstRecord,indexOfLastRecord))
                
            }
        }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="backGroundImage">
                   
                    {/* <img src={process.env.PUBLIC_URL + '/images/airplane-wallpaper.png'} />; */}
                </div>
                <Container className="overFlowX">
                    <h1 className="text-center">Airlines list</h1>
                    <Table striped bordered hover responsive="md">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Slogan</th>
                                <th>Head Quaters</th>
                                <th>Established</th>
                            </tr>
                        </thead>
                        <tbody>
                            {airlinesList.map((airline,i) => (
                                <tr key={i}>
                                    <td>{airline.name}</td>
                                    <td>{airline.country}</td>
                                    <td>{airline.slogan}</td>
                                    <td>{airline.head_quaters}</td>
                                    <td>{airline.established}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div  className="paginationBlock">
                        <Pagination
                            // nPages = { nPages }
                            // currentPage = { currentPage } 
                            // setCurrentPage = { setCurrentPage }
                            >
                            <Pagination.First  onClick={firstPage}/>
                            <Pagination.Prev onClick={prevPage}/>
                            <Pagination.Item>{currentPage}</Pagination.Item>
                            <Pagination.Next onClick={nextPage}/>
                            <Pagination.Last onClick={lastPage} />

                            
                        </Pagination>
                    </div>
                        
                </Container>
            </div>

        )
    }
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