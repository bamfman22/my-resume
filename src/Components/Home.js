
import React from 'react';
import { Card, Layout} from 'antd';
import { withRouter } from 'react-router-dom';
import banner from '../Images/beach.jpg';
import Sider from './Sider.js';

import './Home.css';

const {Content} = Layout;

const Home = props => (
    <Layout className="layout">
        <Sider menuKey={'1'}/>
        <Content>
            <div
                className="banner"
                style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    padding: 150
                }}
            >
                <div className = 'intro'
                     >
                <Card
                    title= 'About Me'
                    style={{width: 1500}}>
                    <h1>Education</h1>
                    <p>San Jose Sate University</p>
                    <p>B.S Computer Science</p>
                </Card>
                </div>
            </div>
        </Content>
    </Layout>
);



export default withRouter(Home);