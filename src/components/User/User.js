import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchIssues} from '../../actions/actions';
// Components
import UserIssues from './UserIssues';

const User = (props) => {


    useEffect(() => {
        props.fetchIssues();
    }, [])

    return (
        <>
            <h5 style={{textAlign: 'center'}}>Your Issue's</h5>
            <UserIssues/>
        </>
    )
}

const mapPropsToState = state => {
    return {
        issues: state.issues
    }
}

export default connect(mapPropsToState, {fetchIssues})(User)