import React from 'react';
import styled from "@emotion/styled";
import {Col} from "react-bootstrap";

const Wrapper = styled.div`
    height: 50px;
    background: #dcdcdc;
    border-radius: 4px;
    display: ${props => props.hasLogo ? 'block' : 'none'};
`;

const Logo = ({hasLogo}) => {
    return (
        <Col xs={6}>
            <Wrapper hasLogo={hasLogo}/>
        </Col>
    );
};

export default Logo;
