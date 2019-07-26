import React from 'react';
import { connect } from 'react-redux';

const Form = (props) => {
    return ( 
        <form>
            <input name='name' type='text' placeholder='Smurfy Name Here!' />
            <input name='Age' type='number' placeholder='Smurfy Age Here!' />
            <input name='Height' type='text' placeholder='Smurfy Height Here!' />
            <button type='submit'>Add Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      name: state.name,
      age: state.age,
      height: state.height
    }
  }

export default connect(mapStateToProps, {})(Form)