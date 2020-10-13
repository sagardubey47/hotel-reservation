import React, { Component } from 'react';
import items from "./data"


const RoomContext = React.createContext();


export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms: [],
        featuredRooms: [],
        loading: false,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxsize: 0,
        breakfast: false,
        pets: false
    };

    // getData

    componentDidMount() {
      let rooms = this.formateData(items);
      let featuredRooms = rooms.filter( room => room.featured);

      let maxPrice = Math.max(...rooms.map(room => room.price));
      let maxSize = Math.max(...rooms.map(room => room.size));
      

      this.setState({
          rooms,
          sortedRooms: rooms,
          featuredRooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
      }) 
    }

    formateData(items) {
       let tempRoom = items.map(item => {

        let id = item.sys.id;
        let images = item.fields.images.map(image => 
          image.fields.file.url
        );
        let room = {...item.fields, images, id};
        return room;
       });
       return tempRoom;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const Rooms = tempRooms.find(Rooms => Rooms.slug === slug);
        return Rooms;
    }

    
    render() {
        return (
            <RoomContext.Provider 
            value={{
                ...this.state, 
                getRoom: this.getRoom
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
        {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {
    RoomContext,
    RoomProvider,
    RoomConsumer
};