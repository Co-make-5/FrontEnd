import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import SideMenu from './SideMenu';

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
    return (
        <Layout>
            <Header
                style={{ 
                    backgroundColor: "white", 
                    borderBottom: "1px solid #f5f5f5", 
                    textAlign: "left",
                    position: "fixed",
                    width: "100%"
                }}
            >
                <Row align="middle" justify="space-between">
                    <Col>
                        <h1>Co-make</h1>
                    </Col>
                    <Col>
                        <Button type="primary" ghost style={{width: "105px"}}>
                            <Row align="middle" justify="space-between">
                                Log Out
                                <LogoutOutlined />
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </Header>
            <Layout style={{ marginTop: "64px" }}>
                <SideMenu />
                <Layout style={{ marginLeft: 80, minHeight: "90vh" }}>
                    <Content
                        style={{
                            margin: "24px 16px 0",
                            overflow: "initial",
                            padding: 24,
                            backgroundColor: "white"
                        }}
                    >
                        This is where Page will go
                    </Content>
                    <Footer style={{textAlign: "center"}}>&copy; Co-make 5 2020</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Dashboard;