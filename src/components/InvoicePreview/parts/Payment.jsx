import React from 'react';
import Line from "./Line";
import {Col} from "react-bootstrap";

const Payment = () => {
    return (
        <Col xs={6} className={'d-flex flex-column justify-content-end'}>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#1e2957'} style={{marginBottom: '5px'}}/>
        </Col>
    );
}

export default Payment;