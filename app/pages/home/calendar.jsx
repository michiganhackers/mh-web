import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import request from 'superagent'


const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com'
const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

function getEvents(callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const Wrapper = styled.div`
    background: ${props => props.theme.primary};
    padding: 100px;
    height: calc(100vh - 80px);
    zIndex: 98;
`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        getEvents((events) => {
            this.setState({events})
        })
    }
    render() {
        return (
            <Wrapper>
                <BigCalendar
                    selectable
                    events={this.state.events}
                    views={allViews}
                    step={60}
                    onSelectEvent={event => alert(event.title)}
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

export default connect(mapStateToProps)(Calendar);
