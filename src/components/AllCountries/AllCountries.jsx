        import React, {useState, useEffect} from "react";
        import { apiURL } from "../util/api.js";
        import SearchInput from "../Search/SearchInput.jsx";
        import FilterCountry from "../FilterCountry/FilterCountry.jsx";
        import { Link } from "react-router-dom";
        import 'bootstrap/dist/css/bootstrap.min.css';
        
        const AllCountries = () => {

            const [countries, setCountries] = useState([]);
            const [isLoading, setIsLoading] = useState(true);
            const [error, setError] = useState ('');

            const getAllCountries = async() => {
                try{
                    const res = await fetch(`${apiURL}/all`);

                    if (!res.ok) throw new Error('Something went wrong');

                    const data = await res.json();
                    console.log(data);
                    setCountries(data);
                    setIsLoading(false);
                } catch (error){
                    setIsLoading (false);
                    setError(error.message);
                }
            };

            const getCountryByName = async(countryName)=>{
                try {
                    const res = await fetch(`${apiURL}/name/${countryName}`);
                if (!res.ok) throw new Error('Not found any country!')

                const data = await res.json()
                setCountries(data)
                setIsLoading(false)
                } catch (error){
                    setIsLoading(false)
                    setError(error.message);
                }
            }

            const getCountryByRegion = async(regionName)=> {
                try {
                    const res = await fetch(`${apiURL}/region/${regionName}`);
                    if (!res.ok) throw new Error('Failed...');
                    const data = await res.json();

                    setCountries(data);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                    setError(false);
                }
            };

            useEffect(() => {
                getAllCountries();
            }, []);

        return (
            <div className="all_country_wrapper">
  <div className="country_top d-flex justify-content-between flex-wrap">
    <div className="search w-50 p-2">
      <SearchInput onSearch={getCountryByName}/>
    </div>
    <div className="filter w-50 p-2">
      <FilterCountry onSelect={getCountryByRegion}/>
    </div>
  </div>

  <div className="country_bottom d-flex flex-wrap justify-content-center">
    {isLoading && !error && <h4>Loading.........</h4>}
    {error && !isLoading && <h4>{error}</h4>}
    {countries?.map(country => (
      <Link to={`/country/${country.name.common}`} className="country_card text-dark text-decoration-none" key={country.cca3}>
        <div className="country_img">
          <img src={country.flags.png} alt={country.name.common} />
        </div>
        <div className="country_data">
          <h3>{country.name.common}</h3>
        </div>
      </Link>
    ))};
  </div>
</div>

        );
        };

        export default AllCountries;

