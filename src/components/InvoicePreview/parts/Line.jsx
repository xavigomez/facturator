import React from 'react';
import styled from "@emotion/styled";

const sizes = {'md': 5, 'lg': 10, 'xl': 15};

const Wrapper = styled.div`
    height: ${props => sizes[props.size]}px;
    border-radius: ${props => sizes[props.size]}px;
    background: ${props => props.color};
`;

const Line = ({color, size, style}) => {
    return (
        <Wrapper color={color} size={size} style={style}/>
    );
};

export default Line;
