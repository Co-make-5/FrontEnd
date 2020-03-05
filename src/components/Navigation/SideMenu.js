import React, { useState } from 'react';
// Redux
import {connect} from 'react-redux'
// Actions
import {addIssue, fetchIssues} from '../../actions/actions'
// Ant Design
import { Layout, Menu } from 'antd';
import { HomeOutlined, CompassOutlined, BarChartOutlined, UserOutlined, FileAddOutlined } from '@ant-design/icons';
// React Router
import { Link } from 'react-router-dom';
// Components
import SubmitIssueForm from '../Forms/NewIssue';

const { Sider } = Layout;

const SideMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [visible, setVisible] = useState(false);

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    let id = props.userID != "" ? props.userID : window.localStorage.getItem('userID')

    const addTicket = values => {
        console.log(values);
        let issue = {
            user_id: id, //required
            issue_name: values.issue_name, //required
            zip: values.zip, //required
            description: values.description, //required
            location: values.location //optional
        }

        props.addIssue(issue, id)
        setVisible(!visible)
        props.fetchIssues()
    }

    return (
        <>
            <Sider 
                collapsible 
                collapsed={collapsed} 
                onCollapse={onCollapse} 
                theme="light"
            >
                <Menu defaultSelectedKeys={["1"]} mode="inline">

                    <Menu.Item key="1">
                        <Link to='/home'>
                            <HomeOutlined />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to='/explore'>
                            <CompassOutlined />
                            <span>Explore</span>
                        </Link>
                    </Menu.Item>

                    
                    <Menu.Item key="3">
                        <Link to='/analytics'>
                            <BarChartOutlined />
                            <span>Analytics</span>
                        </Link>
                    </Menu.Item>
                    

                    <Menu.Item key="4">
                        <Link to='/user'>
                            <UserOutlined />
                            <span>Profile</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" onClick={e => setVisible(!visible)}>
                        <FileAddOutlined />
                        <span>Add Issue</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <SubmitIssueForm visible={visible} onCancel={e => setVisible(!visible)} onCreate={addTicket}/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {addIssue, fetchIssues})(SideMenu);
