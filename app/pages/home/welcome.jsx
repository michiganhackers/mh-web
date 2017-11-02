import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
    CenteredContainer,
    SectionHeader,
    SectionBody,
    Brick
} from './section_components.jsx';

const Wrapper = styled.div`
    background: ${props => props.theme.primary}
    padding: 80px 0;
`;

class Welcome extends React.Component {
    render() {
        return (
            <Wrapper>
                <CenteredContainer>
                    <Brick />
                    <SectionHeader>
                        Welcome to<br /> Michigan Hackers
                    </SectionHeader>
                    <SectionBody>Get learnt and turnt</SectionBody>
                </CenteredContainer>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Welcome);
