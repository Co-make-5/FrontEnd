import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
// Actions
import { fetchIssues } from "../../actions/actions";
// ANTD
import { Row, Input, Switch, List } from "antd";
// Components
import Issue from "../Explore/Issue";

const { Search } = Input;

const Explore = props => {
    useEffect(() => {
        props.fetchIssues();
    }, []);

    const [tickets, setTickets] = useState(props.issues)

    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState();

    useEffect(() => {
        const searchResults = props.issues.filter(issue => issue.description.toLowerCase().includes(searchTerm));
        setTickets(searchResults);
    }, [props.issues])

    const handleSearch = (value, event) => {
        const searchResults = props.issues.filter(issue => issue.description.toLowerCase().includes(value.toLowerCase()) || issue.location.toLowerCase().includes(value.toLowerCase()));
        setTickets(searchResults);
        setSearchTerm(value.toLowerCase());
    }

    // switch onChange placeholder
    const onChange = checked => {
        console.log(`switch to ${checked}`);
        const results = props.issues.filter(issue => issue.solved == checked)
        setTickets(results)
    };

    return (
        <>
        <Row justify="space-around" align="middle">
            <div>Solved: <Switch defaultChecked={false} onChange={onChange} /></div>
            {/* Solved: <Switch defaultChecked={false} onChange={onChange} /> */}
            <Search
            placeholder="Search..."
            onSearch={handleSearch}
            style={{ width: 300 }}
            enterButton
            />
        </Row>
        <List
            grid={{ gutter: 0, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }}
            // This is where the data is put into the list
            dataSource={tickets}
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 16,
            style: { textAlign: "center" },
            hideOnSinglePage: true
            }}
            renderItem={item => (
            <List.Item style={{ margin: "10px" }}>
                <Issue issue={item} key={item.id} />
            </List.Item>
            )}
        />
        </>
    );
};

const mapStateToProps = state => {
    return {
        issues: state.issues
    };
};

export default connect(mapStateToProps, { fetchIssues })(Explore);
