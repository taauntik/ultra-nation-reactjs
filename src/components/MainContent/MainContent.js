import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import "./MainContent.css";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import CountryDetail from '../CountryDetail/CountryDetail';

function MainContent() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <Router>
            <Switch>
               <Route path="/learn-more/:id">
                    <CountryDetail />
                </Route>
                
                <Route exact path="/">
                    <div className="country-container">
                        {
                            countries.map(country => <Country country={country} />)
                        }
                    </div>
                </Route>
 
                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </Router>
    )
}

export default MainContent
