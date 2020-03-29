import React from 'react';
import {Col} from "react-bootstrap";
import Line from "./Line";

const Summary = () => {
    return (
        <Col xs={'6'}>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'lg'} color={'#1e2957'} style={{marginBottom: '5px'}}/>
        </Col>
    );
};

export default Summary;
