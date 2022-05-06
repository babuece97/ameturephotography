import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('../../../public/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
            console.log( 'Im here', services);
            
    }, [])
    return (
        <div >
            <h1>All of my services</h1> 
            
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