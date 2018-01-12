import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '../../components';
import { SectionHeader } from './section_components.jsx';

const Wrapper = styled.div`padding: 80px 0;`;

const InfoHeader = styled.h2`
    fontSize: 30px;
    color: ${props => props.theme.highlight};
    text-align: center;
    fontWeight: 300;
    textAlign: center;
`;

const TextBox = styled.input`
    display: block;
    padding: 10px;
    margin-right: 5px;
    width: 33%;
    font-size: 18px;
    border-color: ${props => props.theme.secondary};
    border-style: solid;
    color: ${props => props.theme.secondary};
`;

const SignUpButton = styled.input`
    display: block;
    padding: 10px;
    margin-left: 5px;
    width: 10%;
    border: none;
    font-size: 18px;
    background: ${props => props.theme.secondary};
    text-align: center;
    color: #ffffff;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`;

class EmailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: ''
        };
        this.testFunction = this.testFunction.bind(this);
        this.emailTextChange = this.emailTextChange.bind(this);
    }

    testFunction(e) {
        e.preventDefault();
        alert(this.state.emailText);
    }

    emailTextChange(e) {
        this.setState({ emailText: e.target.value });
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <SectionHeader>Sign Up!</SectionHeader>
                    <InfoHeader>
                        Join our email list to receive weekly emails detailing
                        upcoming events, tech talks, hackathons, and the latest
                        Hacker news!
                    </InfoHeader>
                    <form onSubmit={this.testFunction}>
                        <FormContainer>
                            <TextBox
                                type="email"
                                name="email"
                                id="signUpEmail"
                                placeholder="YOUR EMAIL"
                                value={this.state.emailText}
                                onChange={this.emailTextChange}
                            />
                            <SignUpButton
                                type="submit"
                                name="signup"
                                value="SIGN UP"
                            />
                        </FormContainer>
                    </form>
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

export default connect(mapStateToProps)(EmailList);
