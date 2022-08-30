import React, { useState, useEffect } from "react";
import './Airlines.css'
import '../../App.css'


function Airlines(props){
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [airlinesList, setAirlinesList] = useState([])

    // https://api.instantwebtools.net/v1/airlines
    
    let list = []
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
            setAirlinesList(response)
            // console.log("response:",response)
            // list = response
        
        })
        }, [])
    // const [airlinesList, setAirlinesList] = useState([
    //     {
    //         "id": 1,
    //         "name": "Quatar Airways",
    //         "country": "Quatar",
    //         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
    //         "slogan": "Going Places Together",
    //         "head_quaters": "Qatar Airways Towers, Doha, Qatar",
    //         "website": "www.qatarairways.com",
    //         "established": "1994"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Singapore Airlines",
    //         "country": "Singapore",
    //         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
    //         "slogan": "A Great Way to Fly",
    //         "head_quaters": "Airline House, 25 Airline Road, Singapore 819829",
    //         "website": "www.singaporeair.com",
    //         "established": "1947"
    //     }
    // ]);
    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className="text-center">Airlines list</h1>
                <table>
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
                </table>
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