import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: 0, height: ''})

    const updateHandler = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value })
    }

    return ( 
        <form onSubmit={e => {
            e.preventDefault()
            props.addSmurf(newSmurf)
        }}>
            <input name='name' type='text' placeholder='Smurfy Name Here!' onChange={updateHandler} />
            <input name='age' type='number' placeholder='Smurfy Age Here!' onChange={updateHandler}  />
            <input name='height' type='text' placeholder='Smurfy Height Here!' onChange={updateHandler} />
            <button type='submit'>Add Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf
    }
  }

export default connect(mapStateToProps, { addSmurf })(Form)