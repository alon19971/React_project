import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/api";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryInfo = () => {
    const [country, setCountry] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    
    const { countryName } = useParams();

    const getCountryByName = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${apiURL}/name/${countryName}`);
            if (!res.ok) throw new Error('Could not found!');
            const data = await res.json();
            setCountry(data[0]); 
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }, [countryName]);

    useEffect(() => {
        getCountryByName();
    }, [getCountryByName]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!country) return <div>No country found</div>; 

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <h5 className="card-header">{country.name.common}</h5>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={country.flags.png} alt={`${country.name.common} flag`} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Native Name: {country.name.common}</h5>
                                    <p className="card-text">Population: {country.population.toLocaleString()}</p>
                                    <p className="card-text">Region: {country.region}</p>
                                    <p className="card-text">Capital: {country.capital}</p>
                                    <p className="card-text">Sub Region: {country.subregion}</p>
                                    <Link to='/countries' className="btn btn-primary">Back to Countries</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;
