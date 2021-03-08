import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Card } from "react-bootstrap";

function CountryDetail() {
    const { id } = useParams();
    console.log(id);
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${id}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]));
    }, [])
    const { name, flag, population, capital, region } = country;
    return (
        <>
            <div className="container m-5">
                <Card style={{width: "60%"}} className="container">
                    <Card.Img style={{width: "100%"}} variant="top" src={flag} />
                    <Card.Body>
                        <Card.Text>
                            <h3>{name}</h3>
                            <p>Population: {population}</p>
                            <p>Capital: {capital}</p>
                            <p>Region: {region}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default CountryDetail
