import React, { Component } from "react";
import { Container } from "../components/Grid";
import NavDashboard from "../components/NavDashboard";
import MainDashboard from "../components/MainDashboard";

class Dashboard extends Component {
    render() {
        return (
            <Container fluid>
                <NavDashboard />
                <MainDashboard />
            </Container>
        );
    };
};
export default Dashboard;