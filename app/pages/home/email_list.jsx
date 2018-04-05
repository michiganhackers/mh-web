import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '../../components';
import { EmailListThunks } from '../../actions';
import { SectionHeader, SectionBody } from './section_components.jsx';

const Wrapper = styled.div`
    background: ${props => props.theme.secondary};
    padding: 80px 0;
`;

const StyledSectionBody = styled(SectionBody)`
    color: ${props => props.theme.highlight};
    text-align: center;
`;

const TextBox = styled.input`
    display: block;
    padding: 10px;
    margin-right: 5px;
    width: 33%;
    font-size: 18px;
    border-color: ${props => props.theme.highlight};
    border-style: solid;
    color: ${props => props.theme.secondary};
`;

const SignUpButton = styled.input`
    display: block;
    padding: 10px;
    margin-left: 5px;
    width: 10%;
    border-color: ${props => props.theme.highlight};
    font-size: 18px;
    background: ${props => props.theme.secondary};
    text-align: center;
    color: #ffffff;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

class EmailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: ''
        };
        this.addToEmailList = this.addToEmailList.bind(this);
        this.emailTextChange = this.emailTextChange.bind(this);
    }

    // Make this function add an email to our MailJet email list.
    // Going to take the form of the function joinTeam() below
    addToEmailList(e) {
        e.preventDefault();

        const data = {
            // "Email" is the only mandatory field required by MailJet. Does it need to be capitalized? 
            email: this.state.emailText
        };
        this.props.dispatch(EmailListThunks.addToEmailList(data));

        alert('Check MailJet to see if this email was added: ' + this.state.emailText);
    }

    emailTextChange(e) {
        this.setState({ emailText: e.target.value });
    }

    render() {
        return (
            <Wrapper id="email-list">
                <Container>
                    <SectionHeader dark>Sign Up!</SectionHeader>
                    <StyledSectionBody>
                        Join our email list to receive weekly emails detailing
                        upcoming events, tech talks, hackathons, and the latest
                        Hacker news!
                    </StyledSectionBody>
                    <form onSubmit={this.addToEmailList}>
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
