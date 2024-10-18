import React, { useState } from 'react'
import WorkContext from './WorkContext'

function WorkState(props) {
    const [works, setWorks] = useState([])
    const getWorks = async()=>{
        const url = `${process.env.REACT_APP_BACKEND_KEY}/works/all_works`;
        console.log(process.env.REACT_APP_BACKEND_KEY);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setWorks(data);
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }
  return (
    <WorkContext.Provider value={{getWorks, works, setWorks}}>
      {props.children}
    </WorkContext.Provider>
  )
}

export default WorkState
