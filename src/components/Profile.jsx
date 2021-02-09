import React from 'react'
import { connect } from 'react-redux'
import { addToProfile } from '../actions'

function Profile(props) {
    return (
        <div>
            <h1>My Drinks</h1>
            {props.savedDrinks}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        savedDrinks: state.savedDrinks
    }
}

function mapDispatchToProps(dispatch)  {
    return {
        addToProfile: (drinks) => {
            dispatch(addToProfile( drinks ))
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Profile )