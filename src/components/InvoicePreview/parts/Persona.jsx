import React from 'react';
import Line from "./Line";
import {Col} from "react-bootstrap";

const Persona = ({style}) => {
    return (
        <Col xs={6}>
            {
                style === '1' ?
                    <>
                        <Line size={'lg'} color={'#1e2957'} style={{marginBottom: '10px'}}/>
                        <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
                        <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
                        <Line size={'md'} color={'#dcdcdc'} style={{marginBottom: '5px'}}/>
                    </>
                    :
                    null
            }
        </Col>
    );
};

export default Persona;
