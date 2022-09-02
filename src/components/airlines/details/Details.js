import React, {useState , useEffect} from "react";
import './Details.css'
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


const Details = () => {
    const params = useParams();
    let id = params.id
    const [isLoaded, setIsLoaded] = useState(false);


    const [data, setData] = useState([])

    // https://api.instantwebtools.net/v1/airlines/1
    useEffect(() => {
        fetch('https://api.instantwebtools.net/v1/airlines/'+id)
        .then(res => res.json())
        .then(res => {
            setData(res)
            setIsLoaded(true)
        })
    }, [])

    if(isLoaded){
        return (
            <Container>
                <div className="headerSection">
                    <h1 className="pageHearder">
                        <img className="logoName" src={data.logo} />
                        {data.name}
                    </h1>
                </div>
                <Table striped bordered hover responsive="md">
                    {/* <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Slogan</th>
                            <th>Head Quaters</th>
                            <th>Website</th>
                            <th>Established</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{data.country}</td>
                        </tr>
                        <tr>
                            <th>Slogan</th>
                            <td>{data.slogan}</td>
                        </tr>
                        <tr>    
                            <th>Head Quaters</th>
                            <td>{data.head_quaters}</td>
                        </tr>
                        <tr>   
                            <th>Website</th>
                            <td>{data.website}</td>
                        </tr>
                        <tr>   
                            <th>Established</th>
                            <td>{data.established}</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Slogan</th>
                            <th>Head Quaters</th>
                            <th>Website</th>
                            <th>Established</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.country}</td>
                            <td>{data.slogan}</td>
                            <td>{data.head_quaters}</td>
                            <td>{data.website}</td>
                            <td>{data.established}</td>
                        </tr>
                    </tbody>
                </Table> */}

            </Container>
        )

    } else {
        return <p className="text-center">Loading...</p>
    }
}

export default Details