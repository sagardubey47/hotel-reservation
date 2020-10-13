import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'


export default class Services extends Component {

    state = {
        services:[
            {
               icon: <FaCocktail/>,
               title: "free cocktails",
               info:"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo."
            },
            {
              icon: <FaHiking/>,
              title: "free Hiking",
              info:"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. "
            },
            {
                icon: <FaShuttleVan/>,
                title: "free Shuttle" ,
                info: "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. "
              },
              {
                icon: <FaBeer/>,
                title: "strongest Beer",
                info:"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. "
              }
        ]
    }
    render() {
        return (
            <div className="services">
               <Title title="services"/>
            <div className="services-center">
             {
                 this.state.services.map((items, index) => {
                        return <article key={index} className="service" >
                            <span> {items.icon} </span>
                            <h6> {items.title} </h6>
                            <p> {items.info} </p>
                        </article>
                     })}
            </div>
            </div>
        )
    }
}
