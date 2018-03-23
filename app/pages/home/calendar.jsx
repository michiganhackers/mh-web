import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import request from 'superagent';
import config from '../../../config/default.js';

let baseUrl = `https://www.googleapis.com/calendar/v3/calendars/${config.calendar_id}/events?key=${config.google_calendar_api_key}`
var pageUrl = baseUrl;
var nextPageToken = '';

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
        this.getEvents = this.getEvents.bind(this);
    }

    getEvents() {
        request
            .get(pageUrl)
            .end((err, resp) => {
                if (!err) {
                    var body = JSON.parse(resp.text);
                    nextPageToken = body.nextPageToken || '';
                    body.items.map((event) => {
                        if (event.status != 'cancelled'){
                            var start = event.start.date || event.start.dateTime;
                            var end = event.end.date || event.end.dateTime;
                            var title = event.summary;
                            if (start && end && title){
                                this.state.events.push({
                                    start: new Date(start),
                                    end: new Date(end),
                                    title: title,
                                })
                            }
                        }
                    })
                    if (nextPageToken != ''){
                        pageUrl = baseUrl + '&pageToken=' + nextPageToken;
                        this.getEvents();
                    }
                }
            })
    }

    componentDidMount() {
        this.getEvents();
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
