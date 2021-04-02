import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from "./Loading"
import {withRoomConsumer} from "../context"

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

         if(loading) {
           return <Loading/> 
         }
         return (
            <>
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </>
        );
}

export default withRoomConsumer(RoomContainer);





// second method of accesing context in functional component

// return (
//     <RoomConsumer>
//         {
//             (value) => {
//                 const {loading, sortedRoom, rooms} = value;
//                 if(loading) {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         hello from Room Container
//                         <RoomFilter rooms={sortedRoom} />
//                         <RoomList rooms={rooms} />
//                     </div>
//                 )
//             }
//         } 
//     </RoomConsumer>
// )