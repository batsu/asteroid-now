import axios from "axios";
import React, { useEffect, useState } from "react";
import MakeMsg from "./MakeMsg"
import Calendar from "./Calendar"
import dayjs from 'dayjs';

var toArray = require('dayjs/plugin/toArray')
dayjs.extend(toArray)




export default function Dev8() {
    const [objectName, setObjectName] = useState("")
    const [dist, setDist] = useState("")
    const [error, setError] = useState("")
    const [date, setDate] = useState("")
    const [dateArray, setDateArray] = useState(dayjs('2022-04-07').toArray())

    function handleCalChange(value) {
        setDateArray(value)
    }




    useEffect(() => {
        function getAPIdata() {
            setObjectName("")
            let useDate = `${dateArray[0]}-${(dateArray[1]+1).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}-${dateArray[2].toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}`;
            axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${useDate}&end_date=${useDate}&api_key=${process.env.REACT_APP_NEW_NASA}`)
                .then(response => {
                    setObjectName(response.data.near_earth_objects[`${useDate}`][0].name);
                    setDist(response.data.near_earth_objects[`${useDate}`][0].close_approach_data[0].miss_distance.miles);
                    setDate(response.data.near_earth_objects[`${useDate}`][0].close_approach_data[0].close_approach_date_full);
                })
                .catch(e => {
                    setError(e);
                    console.log(`Error: ${e}`);
                });
    
        }
        getAPIdata()
    }, [dateArray])



    return (
        <div className="Div8">
            <h1>What is your birth asteroid?</h1>
            <Calendar handleCalChange={handleCalChange} />
            <MakeMsg objectName={objectName} dist={dist} error={error} date={date} />
        </div>
    )
}