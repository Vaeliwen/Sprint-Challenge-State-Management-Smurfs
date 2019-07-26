import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Smurf from './Smurf'

const Smurfs = () => {
    const [smurfs, setSmurfs] = useState([])

    useEffect(
        () => { 
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {setSmurfs(res.data)})
            .catch(err => console.log('Whoops, we smurfed up!'))
    }, [])

    return (
        <div>
            {smurfs.map(smurf => {return <Smurf smurf={smurf} />})}
        </div>
    )
}

export default Smurfs;