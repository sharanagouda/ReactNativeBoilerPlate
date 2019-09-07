import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";

import Home from './../screens/Home';
import BasicComponents from '../screens/BasicComponents'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="user" initial={this.props.loggedIn}>
                    <Scene key="home" component={Home} title="Home" />
                    <Scene key="basiccomponents" component={BasicComponents} title="BasicComponent" />
                </Scene>
            </Router>
        );
    }
}

{/* <Scene key="user" hideNavBar={true} initial={loggedIn}>
                        <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
                        <Scene tabs key="createEvent" hideNavBar={true} hideTabBar={true} swipeEnabled={false} tabBarPosition="bottom">
                        <Scene key="firstScreen" hideNavBar={true} component={EventFirstScreen} />
                        <Scene key="secondScreen" hideNavBar={true} component={EventSecondScreen} />
                    </Scene> */}

