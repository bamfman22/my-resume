
import React from 'react';
import { Card, Layout} from 'antd';
import { withRouter } from 'react-router-dom';
import banner from '../Images/beach.jpg';
import Sider from './Sider.js';
import sjsu from '../Images/sjsu.jpg';

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
                    title= 'Education'
                    style={{minWidth: 250, marginTop: 16}}
                    cover={<img alt="SJSU" src={sjsu} width={15}/>}>
                    <h1>Education</h1>
                    <p>San Jose State University</p>
                    <p>Bachelors of Science - Computer Science</p>
                </Card>
                    <Card

                    style={{minWidth: 250, marginTop: 16}}>
                        <h1>About Me</h1>
                        <p>Im an excited new graduate whos dream is to work with new and emerging technologies! As of right now my journey
                        has taken me into contracting position with Waymo(Formerly Google's self Driving Car)!</p>
                        <p>My skills include Programming with React.js, Python, and Java. I have experience using relational databases like
                        MySql and SQL Server as well Analytic tools like Excel and Tableau.</p>
                    </Card>
                </div>
            </div>
        </Content>
    </Layout>
);



export default withRouter(Home);