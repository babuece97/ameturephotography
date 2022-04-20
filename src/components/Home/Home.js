import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import  { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <Banner></Banner>
            <h2>My Exclusive services</h2> 
            
            <div className="services">
            {
                services.slice(0,3).map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};




export default Home;