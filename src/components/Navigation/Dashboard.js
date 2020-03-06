import React from "react";
// Redux
import { connect } from "react-redux";
// Actions
import { userSignOut } from "../../actions/actions";
// Ant Design
import { Layout, Row, Button, PageHeader } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
// Components
import SideMenu from "./SideMenu";

const { Content, Footer } = Layout;

const Dashboard = props => {
  let Page = props.page;

  const bye = () => {
    props.userSignOut();
    props.data("/");
  };

  return (
    <Layout>
      <SideMenu bye={bye}/>
      <Layout style={{backgroundColor: '#333'}}>
        {/* Page wrapper with nice background */}
        <PageHeader
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "left"
          }}
          title="Co-Make"
          subTitle="Better your community here!"
          extra={[
            <Button
              onClick={bye}
              type="primary"
              ghost
              style={{ width: "105px" }}
              key="logout"
            >
              <Row align="middle" justify="space-between">
                Log Out
                <LogoutOutlined />
              </Row>
            </Button>
          ]}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            padding: 24,
            backgroundColor: "white",
            minHeight: "80vh",
            borderRadius: '8px'
          }}
        >
          {Page}
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: '#333', color: 'white' }}>&copy; Co-Make 2020</Footer>
      </Layout>
    </Layout>
  );
};

export default connect(null, { userSignOut })(Dashboard);
