import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

function signup() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>SignUp page</h1>
                        <Input />
                        <FormBtn>Sign Up</FormBtn>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default signup;
