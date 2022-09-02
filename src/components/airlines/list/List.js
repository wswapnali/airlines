import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
// import Details from '../details/Details'
import './List.css'
import '../../../App.css'
import {Link } from 'react-router-dom';


function List(props){
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [airlinesList, setAirlinesList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(10);

    let indexOfLastRecord = currentPage * recordsPerPage;
    let indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    let nPages = Math.ceil(items.length / recordsPerPage)

    // const navigate = useNavigate()

    // navigate('./create', { replace: true });
    

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
        return (
            <div>
                <h1 className="pageHearder">Airlines list</h1>
                <p className="text-center">Loading...</p>
            </div>
        )
    } else {
        return (
                // <Routes>
                <Container className="overFlowX">
                        {/* <Route exact path="/details" element={<Details/>} /> */}
                        <h1 className="pageHearder">Airlines list</h1>
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
                                        <td>
                                            {/* <Route exact path="/home" element={<Home />} > */}
                                            {/* {airline.name} */}
                                            <Link to={`/details/${airline.id}`}>{airline.name}</Link>
                                            {/* <Routes>
                                                <Route exact path={`/details/${airline.id}`} element={< Details />}>{airline.name}</Route>
                                            </Routes> */}
                                            {/* </Route> */}
                                        </td>
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
            // </Routes>
           

        )
    }
}

export default List