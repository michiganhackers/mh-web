import React from 'react';
import styled from 'styled-components';
import {
    SectionHeader,
    SectionSubheader,
    SectionBody
} from './section_components.jsx';
import { connect } from 'react-redux';
const Logo = require('../../../static/icons/logo-title.png');
import { devices } from '../../styles';

const Wrapper = styled.div`
    background: ${props => props.theme.primary};
    padding: 0;
    height: calc(100vh - 80px);
    zIndex: 98;
`;

const Container = styled.div`
    height: 100%;
    width: calc(100% - 60px);
    maxWidth: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ${devices.tablet`
        width: calc(100% - 100px);
    `} ${devices.desktop`
        width: calc(100% - 140px);
    `} ${devices.giant`
        width: calc(100% - 160px);
    `};
`;

const LogoImage = styled.img`
    height: auto;
    width: auto;
    max-height: 50%;
    max-width: 90%;

    margin-bottom: 20px;
    z-index: 99;
`;

class Landing extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <LogoImage src={Logo} />
                    <SectionHeader>Michigan Hackers Header</SectionHeader>
                    <SectionSubheader>
                        Michigan Hackers Subheader text
                    </SectionSubheader>
                    <SectionBody>
                        Michigan Hackers body text will be here
                    </SectionBody>
                </Container>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Landing);
