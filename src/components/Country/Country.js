import React from 'react'
import { Link } from "react-router-dom"

function Country({ country }) {
    const { name, flag } = country;
    return (
        <>
            <div class="card" style={{ width: '18rem', margin: '20px' }}>
                <img src={flag} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">{name}</p>
                    <Link to={`/learn-more/${name}`}>
                        <button className="btn btn-primary">Learn More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Country
