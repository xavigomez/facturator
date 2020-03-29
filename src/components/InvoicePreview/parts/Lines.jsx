import React from 'react';
import Line from "./Line";
import {Col} from "react-bootstrap";

const MyComponent = ({theme}) => {
    return (
        <Col xs={12}>
            <Line size={'lg'} color={theme} style={{marginBottom: '10px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
            <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
        </Col>
    );
};

export default MyComponent;
