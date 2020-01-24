import React from 'react';

import {Menu, Icon, Button, Layout} from 'antd';
import './Sider.css';
import {Link, NavLink} from 'react-router-dom';
import Pdf from '../Documents/Derek_Ortega_Resume.pdf';


class Sider extends React.Component{
    state = {
        collapsed: false,

    };
    props = {
        menuKey: '1',
    };

    toggleCollapsed = () => {

        this.setState({
            collapsed: !this.state.collapsed,
        });

    };

 //   menuSelect = e => {
 //       this.setState(  {
 //           menuKey: e.key,
 //       });

 //   };


    render(){

        const SubMenu = Menu.SubMenu;

        return(

            <Layout.Sider trigger={null}
                          collapsible
                          collapsed={this.state.collapsed}>
            <div style={{ width: 200 }}>

                <Menu

                    onClick={this.menuSelect}
                    selectedKeys={[this.props.menuKey]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu.Item key="1" >
                        <Icon type="home" />
                        <span>Home</span>
                        <Link to= "."/>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        <Icon type="laptop" />
                        <span>Experience</span>
                        <Link to= './Experience'></Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="code" />
                        <span>Projects</span>
                        <Link to={'./Projects'}/>
                    </Menu.Item>
                    <Menu.Item key = '4'>
                        <Icon type = 'github'/>
                        <span>Github</span>
                        <a href = "https://github.com/bamfman22"></a>
                    </Menu.Item>
                    <Menu.Item key = '5'>
                        <Icon type = 'linkedin'/>
                        <span>LinkedIn</span>
                        <a href = "https://www.linkedin.com/in/derek-ortega-6a4549124/"></a>
                    </Menu.Item>
                    <Menu.Item key = '6'>
                        <Icon type = 'file-pdf'/>
                        <span>Resume PDF</span>
                        <a href = {Pdf} target = "_blank">Download Pdf</a>
                    </Menu.Item>
                </Menu>

            </div>
            </Layout.Sider>

        )



}}

export default Sider;