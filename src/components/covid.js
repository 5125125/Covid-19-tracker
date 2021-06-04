import React, { useEffect, useState } from 'react';
//import Statewise from 'src/components/statewise';
import { NavLink } from 'react-router-dom';

const Covid = () => {
    
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
      
    }
    

    useEffect(() => {
         getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name1"><span> OUR </span> COUNTRY</p>
                            <p className="card__total card__small">INDIA</p>
                         {/*  <NavLink href="/statewise" className="button" >View_Statewise_data </NavLink> */}
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/statewise"><button class="button"><span>View Statewise data </span></button></NavLink>
                         </div>
                    </div>
                    </li>
                    
                     <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span>  RECOVERED</p>
                                <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                    </li>
                    
                     <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> CONFIRMED</p>
                                <p className="card__total card__small">{ data.confirmed}</p>
                        </div>
                    </div>
                    </li>
                     <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> DEATHS </p>
                                <p className="card__total card__small">{ data.deaths}</p>
                        </div>
                    </div>
                    </li>
                     <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                    </li>
                     <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> LAST </span> UPDATED</p>
                                <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Covid;