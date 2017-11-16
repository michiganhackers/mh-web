import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '../../components';
import { SectionHeader } from './section_components.jsx';

const Wrapper = styled.div`
	background: ${props => props.theme.secondary}
	padding: 80px 0;
`;

const InfoHeader = styled.h2`
    fontSize: 30px;
    color: ${props => props.theme.highlight};
    text-align: center;
    fontWeight: 300;
    textAlign: center;
`;

const TextBox = styled.input`
	width: 33%;
	margin: auto;
	display: block;
	padding: 10px;
	font-size: 18px;
	background: ${props => props.theme.secondary}
	border-color: #ffffff;
	border-style: solid;
	border-radius: 50px;
	text-align: center;
	color: #ffffff;
`;

const SignUpButton = styled.input`
	width: 10%;
	margin: auto;
	display: block;
	background: ${props => props.theme.secondary}
	border-color: #ffffff;
	border-style: solid;
	border-radius: 50px;
	text-align: center;
	color: #ffffff;
`;

class EmailList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			emailText: ''
		}
		this.testFunction = this.testFunction.bind(this);
		this.emailTextChange = this.emailTextChange.bind(this);
	}

	testFunction(e){
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
					<InfoHeader>Join our email list to receive weekly emails detailing upcoming events, tech talks, hackathons, and the latest Hacker news!</InfoHeader>
					<form onSubmit={this.testFunction}>
						<TextBox 
							type="email" 
							name="email" 
							id="signUpEmail" 
							placeholder="YOUR EMAIL"
							value={this.state.emailText}
							onChange={this.emailTextChange}/><br></br>
						<SignUpButton type="submit" name="signup" value="SUBMIT" /><br></br>
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
