import React from 'react';
import styled from '@emotion/styled/macro';
import {Col, Row} from "react-bootstrap";
import Header from "./parts/Header";
import Logo from "./parts/Logo";
import Persona from "./parts/Persona";
import Lines from "./parts/Lines";
import Payment from "./parts/Payment";
import Summary from "./parts/Summary";
import ModernPersona from "./parts/ModernPersona";

const Wrapper = styled.div`
  height: 400px;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  
  &:after {
    content: '';
  }
`;

const Separator = styled.hr`
    margin: 0;
    border-color: gainsboro;
`;

const InvoicePreview = ({theme, hasLogo, style}) => {

    const handleClick = () => {
        window.location.href = 'http://google.es';
    };

    return (
        <Wrapper
            onClick={handleClick}>
            <Row style={{marginBottom: '20px'}}>
                <Logo hasLogo={hasLogo}/>
                <Header theme={theme}/>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Persona style={style}/>
                {/* eslint-disable-next-line react/style-prop-object */}
                <Persona style={'1'}/>
            </Row>
            <Row style={{marginBottom: '0px'}}>
                <Lines theme={theme}/>
            </Row>
            <Row style={{marginBottom: '10px'}}>
                <Col xs={12}>
                    <Separator/>
                </Col>
            </Row>
            <Row style={{marginBottom: '40px'}}>
                <Payment/>
                <Summary/>
            </Row>
            <Row>
                <ModernPersona
                    theme={theme}
                    type={style}/>
            </Row>
        </Wrapper>
    );
};

export default InvoicePreview;

