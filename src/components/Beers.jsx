import { useEffect } from 'react'
import { connect } from 'react-redux';
import { populateBeers } from '../actions';
import { pairs } from '../pairs/beerPairs';
import Beer from './Beer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Beers(props) {
    useEffect(() => { props.populateBeers(pairs) },[])
        return (
            <>
            <h1>Beers</h1>
            {props.beers.map(b => {
                return (
                <>
                    <Beer beer={b} key={b.name}/>
                </>
                    )
            })}
            </>
        )
};

const mapStateToProps = (state, ownProps) => {
    return {
        beers: state.beers
    }
};

function mapDispatchToProps(dispatch) {
    return {
    //     handleClick: (e) => {
    //         e.preventDefualt();
    //         dispatch(populateBeers(store));
        
    // }
        populateBeers: ( beers ) => {
            dispatch(populateBeers( beers ));
            // dispatch({type: POPULATE_BEERS, payload: beers})
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Beers );

