import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from './section_components.jsx';

const Wrapper = styled.div`
    background: orange;
    border: solid;

    padding: 80px;
    textAlign: center;
`;

class Timer extends React.Component {
    startTimer(e) {
        e.preventDefault();
        if (!this.state.timerRunning) {
            this.poll = setInterval(() => {
                this.setState(prevState => {
                    return { counter: prevState.counter + 1 };
                });
            }, 1000);
            this.setState({ timerRunning: true });
        }
    }

    resetTimer(e) {
        e.preventDefault();

        this.setState({ counter: 0, timerRunning: false });
        clearInterval(this.poll);
    }

    constructor(props) {
        super(props);

        this.state = { counter: 0, timerRunning: false };

        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentWillUnmount() {
        this.setState({ counter: 0, timerRunning: false });
        clearInterval(this.poll);
    }

    render() {
        return (
            <Wrapper>
                <SectionHeader>{this.props.name}</SectionHeader>
                <SectionHeader>{this.state.counter}</SectionHeader>
                {this.state.timerRunning ? (
                    <button onClick={this.resetTimer}>Reset Timer</button>
                ) : (
                    <button onClick={this.startTimer}>Start Timer</button>
                )}
            </Wrapper>
        );
    }
}

export default Timer;
