import React from "react";

const numberFormatter = (number) => {
    return (Number(Number(number).toFixed(0))).toLocaleString('en-US')
}

export default function MakeMsg(props) {
    if (props.error !== "") return <h1>Problem with API!</h1>
    if (props.objectName === "") return <h1>Loading...</h1>
    else {
        const fromMoon = numberFormatter(props.dist / 238900)
        function FromMars() {
            if (props.dist <= 63525000) {
                return <h4>It came closer to us than Mars!</h4>
            }
        }
        return (
            <React.Fragment>
                <h1>Here's your birth asteroid!</h1>
                <h2><a href={props.url}>Asteroid {props.objectName}</a></h2>
                <h4>was</h4>
                <h3>{numberFormatter(props.dist)} miles</h3>
                <h4>from Earth on the day you were born!</h4>
                {/* <h4>{props.date}</h4> */}
                <h4>That's {fromMoon} times the distance from the moon!</h4>
                <h4>Its average diameter is {numberFormatter(props.size)} feet and was traveling {numberFormatter(props.speed)} miles per hour.</h4>
                <FromMars />


            </React.Fragment>
        )
    }
}