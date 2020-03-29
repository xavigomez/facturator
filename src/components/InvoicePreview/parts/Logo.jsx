import React from 'react';
import styled from "@emotion/styled";
import {Col} from "react-bootstrap";

const Wrapper = styled.div`
    height: 50px;
    background: #dcdcdc;
    border-radius: 4px;
`;

const Logo = () => {
    return (
        <Col xs={6}>
            <Wrapper/>
        </Col>
    );
};

export default Logo;
