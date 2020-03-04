import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideMenu = props => {

  const [collapsed, setCollapsed] = useState(true);

  let currIndex = 1;
  const setIndex = (index, e) => currIndex = index;


  const onCollapse = collapsed => setCollapsed(collapsed)

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[`${currIndex}`]} mode="inline">
            <Menu.Item key="1" onClick={(e) => setIndex(1, e)}>
              <Icon type="desktop" onClick={(e) => setIndex(1, e)}/>
              <Link to='/home'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => currIndex = 2}>
              <Icon type="compass" onClick={() => currIndex = 2}/>
              <Link to='/explore'>Explore</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => currIndex = 3}>
              <Icon type="snippets" onClick={() => currIndex = 3}/>
              <Link to='/analytics'>Analytics</Link>
            </Menu.Item>
            <Menu.Item key="4">
                  <Icon type="user"/>
                  <Link to='/analytics'>My Account</Link>
            </Menu.Item>
            <Menu.Item key="6">
                  <Icon type="logout" />
                  <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }

export default SideMenu