import React from 'react'

const Smurf = (props) => {
    return (
        <div>
            <h2>{props.smurf.name} Smurf</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;