import { useEffect } from 'react';
import { connect } from 'react-redux';
import { findWine } from '../actions';
import { winePairs } from '../pairs/winePairs';
import Wine from './Wine';

function Wines(props) {
    useEffect(() => { props.findWine(winePairs) }, [winePairs]);
        return (
            <>
            <h1>Wines</h1>
            {props.wine.map(b => {
                return (
                    <>
                    <Wine wine={b} key={b.wineName}/>
                    </>
                )
            })}
            </>
        )
};

const mapStateToProps = (state) => {
    return {
        wine: state.wine
    }
};

function mapDispatchToProps( dispatch ) {
    return {
        findWine: (wines) => {
            dispatch(findWine(wines))
        }
    }
};



export default connect( mapStateToProps, mapDispatchToProps ) (Wines);