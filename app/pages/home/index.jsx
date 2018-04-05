import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components';

import Landing from './landing.jsx';
import Calendar from './calendar.jsx';
import EmailList from './email_list.jsx';
import Welcome from './welcome.jsx';

// Add overflow: hidden to container to prevent floating squares from escaping container
const StyledPageContainer = styled(PageContainer)`overflow: hidden;`;

/* Page Component */
class HomePage extends React.Component {
    render() {
        return (
            <StyledPageContainer ref="pagecontainer">
                <Landing />
                <Welcome />
                <EmailList />
                <Calendar />
            </StyledPageContainer>
        );
    }
}

export default HomePage;
