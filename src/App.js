import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CrytoDetails, News } from './components';
const App = () => {
    return (
        <div className = 'app'>
           <div className = 'navbar'>
                <Navbar />    
           </div>
           <div className = 'main'>
                <Layout>
                    <div className = 'route'>
                        <Switch>
                            <Route exact path = '/'>
                                <Homepage />
                            </Route>
                            <Route exact path = '/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path = '/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path = '/crypto/:coinId'>
                                <CrytoDetails />
                            </Route>
                            <Route exact path = '/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
           
                <div className = 'footer' >
                        <Typography.Title level = {5} style = {{color: 'white', textAlign : 'center'}}>
                            Cryto-World <br />
                            All rights reserved
                        </Typography.Title>
                        <Space>
                            <Link to = '/'>Home</Link>
                            <Link to = '/exchanges'>Exchanges</Link>
                            <Link to = '/news'>News</Link>
                        </Space>
                </div>
           </div>
        </div>
    )
}

export default App