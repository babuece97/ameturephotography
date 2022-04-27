import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h2>All of my services</h2> 
            
            <div className="services">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};


export default Services;