import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            {/* <h3>Thus is service</h3> */}
            {
                services.slice(0,3).map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};


export default Services;