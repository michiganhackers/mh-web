import styled from 'styled-components';
import { devices } from '../../styles';

const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% - 60px);
    maxWidth: 1200px;
    margin: 0 auto;

    z-index: 98;

    ${devices.tablet`
        width: calc(100% - 100px);
    `} ${devices.desktop`
        width: calc(100% - 140px);
    `} ${devices.giant`
        width: calc(100% - 160px);
    `};
`;

const SectionHeader = styled.h2`
    fontSize: 48px;
    letterSpacing: 5px;
    color: ${props => (props.dark ? 'white' : props.theme.secondary)};
    textTransform: uppercase;
    fontWeight: bold;
    textAlign: left;

    ${devices.tablet`
    fontSize: 72px;
    letterSpacing: 10px;
    `};
`;

const SectionSubheader = styled.h3`
    fontSize: 24px;
    letterSpacing: 2px;
    color: ${props => (props.dark ? 'white' : props.theme.secondary)};
    fontWeight: book;
    textAlign: left;

    ${devices.tablet`
    fontSize: 36px;
    letterSpacing: 5px;
    `};
`;

const SectionBody = styled.p`
    fontSize: 16px;
    color: ${props => (props.dark ? 'white' : props.theme.secondary)};
    fontWeight: book;
    textAlign: left;

    ${devices.tablet`
    fontSize: 24px;
    `};
`;

const Brick = styled.div`
    width: 100px;
    height: 12px;
    background: ${props => props.theme.highlight};
`;

export {
    CenteredContainer,
    SectionHeader,
    SectionSubheader,
    SectionBody,
    Brick
};
