import React from 'react'
import Smurf from './Smurf'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions'

const Smurfs = (props) => {

    const getSmurfs = (e) => {
        e.preventDefault();
        props.fetchSmurfs();
    }

    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf smurf={smurf} />
            ))}
            <button onClick={getSmurfs}>Fetch Smurfs!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)