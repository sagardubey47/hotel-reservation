import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Rooms from './Rooms';
import Title from './Title';

export default class FeaturedRoom extends Component {

    static contextType = RoomContext;

    render() {
        let {loading, featuredRooms: rooms} = this.context;
        

         rooms = rooms.map(roomItem => {
            return <Rooms key={roomItem.id} room={roomItem}/>
        });
        
        return (
            <section className="featured-rooms">
              <Title title="featured Rooms" />
              <div className="featured-rooms-center">
                 {loading? <Loading/>: rooms}
              </div>

            </section>
        )
    }
}
