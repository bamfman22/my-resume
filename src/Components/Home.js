
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
                    padding: 75
                }}
            >
                <div className = 'intro'
                     >
                <Card
                    title= 'About Me'
                    style={{minWidth: 250, marginTop: 16}}>
                    <h1>Education</h1>
                    <p>San Jose Sate University</p>
                    <p>B.S Computer Science</p>
                </Card>
                    <Card
                    title = 'Whats good'
                    style={{minWidth: 250, marginTop: 16}}>
                        <h1>Projects</h1>
                        <h2>Hobbies</h2>


                    </Card>
                </div>
            </div>
        </Content>
    </Layout>
);



export default withRouter(Home);