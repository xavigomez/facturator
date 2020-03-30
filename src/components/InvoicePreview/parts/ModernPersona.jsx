import React from 'react';
import {Col, Row} from "react-bootstrap";
import styled from "@emotion/styled";
import Line from "./Line";

const Wrapper = styled(Col)`
    display: ${props => props.type === '1' ? 'none' : 'block'};
    height: 75px;
    position: relative;
`;

const Triangle = styled.span`
    height: 110px;
    width: 600px;
    background: ${props => props.theme};
    display: block;
    transform: rotateZ(160deg)translateY(30px);
    position: absolute;
`;

const ModernPersona = ({theme, type}) => {
    return (
        <Wrapper xs={12} type={type}>
            <Triangle theme={theme}/>
            <Row className={'align-items-end'} style={{height: '100%'}}>
                <Col xs={6}/>
                <Col xs={6} style={{marginBottom: '5px'}}>
                    <Line size={'lg'} color={'#fff'} style={{marginBottom: '10px'}}/>
                    <Line size={'md'} color={'#fff'} style={{marginBottom: '5px'}}/>
                    <Line size={'md'} color={'#fff'} style={{marginBottom: '5px'}}/>
                    <Line size={'md'} color={'#fff'} style={{marginBottom: '5px'}}/>
                </Col>
            </Row>
        </Wrapper>
    );
};

export default ModernPersona;
