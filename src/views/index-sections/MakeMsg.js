import React from "react";

export default function MakeMsg(props) {
    if (props.error !== "") return <h1>Problem with API!</h1>
    if (props.objectName === "") return <h1>Loading...</h1>
    else {
        const fromMoon = (props.dist / 238900).toFixed(1).toLocaleString('en-US', {
            minimumIntegerDigits: 1,
            useGrouping: false
          })
        function FromMars() {
            if (props.dist <= 63525000) {
                return <h4>It came closer to us than Mars!</h4>
            }
        }
        return (
            <React.Fragment>
                <h1>Here's your birth asteroid!</h1>
                <h2>Asteroid {props.objectName}</h2>
                <h4>was</h4>
                <h3>{Number(props.dist).toFixed(0)} miles</h3>
                <h4>from Earth on the day you were born!</h4>
                {/* <h4>{props.date}</h4> */}
                <h4>That's {fromMoon} times the distance from the moon!</h4>
                <FromMars />


            </React.Fragment>
        )
    }
}