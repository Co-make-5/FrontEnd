import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, CompassOutlined, BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
        <>
            <Sider 
                collapsible 
                collapsed={collapsed} 
                onCollapse={onCollapse} 
                theme="light"
                style={{
                    height: "90vh",
                    position: "fixed",
                    left: 0,
                    borderRight: "1px solid #f5f5f5"
                }}
            >
                <Menu defaultSelectedKeys={["1"]} mode="inline">

                    <Menu.Item key="1">
                        <HomeOutlined />
                        <span>Home</span>
                        <Link to='/home'>Home</Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <CompassOutlined />
                        <span>Explore</span>
                        <Link to='/explore'>Explore</Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <BarChartOutlined />
                        <span>Analytics</span>
                        <Link to='/analytics'>Analytics</Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <UserOutlined />
                        <span>Profile</span>
                        <Link to='/user'>Profile</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
};

export default SideMenu;
