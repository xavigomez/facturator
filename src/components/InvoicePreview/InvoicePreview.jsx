import React from 'react';
import styled from '@emotion/styled/macro';
import {Col, Row} from "react-bootstrap";
import Header from "./parts/Header";
import Logo from "./parts/Logo";
import Persona from "./parts/Persona";
import Lines from "./parts/Lines";
import Payment from "./parts/Payment";
import Summary from "./parts/Summary";

const Wrapper = styled.div`
  height: 400px;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 8px;
`;

const Separator = styled.hr`
    margin: 0;
    border-color: gainsboro;
`;

const InvoicePreview = ({theme}) => {
    return (
        <Wrapper>
            <Row style={{marginBottom: '20px'}}>
                <Logo/>
                <Header theme={theme}/>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Persona/>
                <Persona/>
            </Row>
            <Row style={{marginBottom: '10px'}}>
                <Lines theme={theme}/>
            </Row>
            <Row style={{marginBottom: '10px'}}>
                <Col xs={12}>
                    <Separator/>
                </Col>
            </Row>
            <Row>
                <Payment/>
                <Summary/>
            </Row>
        </Wrapper>
    );
};

export default InvoicePreview;

