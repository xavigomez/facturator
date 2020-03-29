import React from 'react';
import Line from "./Line";
import {Col} from "react-bootstrap";

const MyComponent = ({theme}) => {
    return (
        <Col xs={6}>
            <Line size={'xl'} color={theme} style={{marginBottom: '10px'}}/>
            <Line size={'md'} color={'#1e2957'} className={'mbot-p5'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#1e2957'}/>
        </Col>
    );
};

export default MyComponent;
