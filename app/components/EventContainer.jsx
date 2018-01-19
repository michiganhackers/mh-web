import React from 'react';
import styled from 'styled-components';
import {
    SectionHeader,
    SectionBody
} from './../pages/home/section_components.jsx';
import { devices } from '../styles';

const Wrapper = styled.div`
    background: white;
    border: solid;
    border-color: ${props => props.theme.secondary};
    border-width: medium;
    width: 100%;
    margin: 10px;
    text-align: left;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px 20px;

    ${devices.tablet`
        width: 30%;
    `};
`;

const StyledSectionBody = styled(SectionBody)`
    color: ${props => props.theme.secondary};
`;

const StyledSectionDate = styled(SectionBody)`
    color: black;
    text-align: right;
`;

const StyledSectionHeader = styled(SectionHeader)`
    fontSize: 24px;
    ${devices.small`
    fontSize: 24px;
    `};
`;

class EventContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <StyledSectionDate>{this.props.date}</StyledSectionDate>
                <StyledSectionBody>{this.props.eventBody}</StyledSectionBody>
                <StyledSectionHeader>
                    {this.props.eventName}
                </StyledSectionHeader>
            </Wrapper>
        );
    }
}

export default EventContainer;
