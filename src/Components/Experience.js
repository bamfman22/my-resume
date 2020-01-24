import React from 'react';
import Sider from './Sider';
import {Layout} from 'antd';
import { withRouter } from 'react-router-dom';
import './Experience.css';
import banner from "../Images/beach.jpg";


const {Content} = Layout;


const Experience = props =>(

    <Layout className = "layout">
        <Sider menuKey={'2'} />
        <Content>
            <div style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    padding: 150
                }}>
                <h1>Hello World!!!</h1>
            </div>
        </Content>
    </Layout>
);

export default withRouter(Experience);