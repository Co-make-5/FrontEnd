import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchIssues} from '../../actions/actions';
// Components
import IssueList from './IssueList'

const User = (props) => {


    useEffect(() => {
        props.fetchIssues();
    }, [])

    return (
        <>
            <h1>User Page</h1>
            <IssueList issues={props.issues}/>
        </>
    )
}

const mapPropsToState = state => {
    return {
        issues: state.issues
    }
}

export default connect(mapPropsToState, {fetchIssues})(User)