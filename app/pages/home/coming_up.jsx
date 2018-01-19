import React from 'react';
import EventContainer from '../../components/EventContainer.jsx';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    background: ${props => props.theme.primary}
    display: flex;
    padding: 80px 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

class ComingUp extends React.Component {
    render() {
        return (
            <Wrapper>
                <EventContainer
                    date="24 Nov"
                    eventName="First event"
                    eventBody="Described this event"
                />
                <EventContainer
                    eventName="Second event"
                    eventBody="Described this event. "
                />
                <EventContainer
                    eventName="Third event"
                    eventBody="Described this event"
                />
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(ComingUp);
