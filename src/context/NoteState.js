import React, { useState } from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
    const [users, setUsers] =useState([])
    const getUser = async()=>{
        const url = "http://localhost:8080/team/get_all_member";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setUsers(data)
            // console.log(data)
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }
  return (
    <NoteContext.Provider value={{users,setUsers, getUser}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
