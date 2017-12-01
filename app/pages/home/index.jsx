import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components';

import Landing from './landing.jsx';
import Faq from './faq.jsx';
import Welcome from './welcome.jsx';
import Sponsorship from './sponsorship.jsx';
import ComingUp from './coming_up.jsx';

// Add overflow: hidden to container to prevent floating squares from escaping container
const StyledPageContainer = styled(PageContainer)`overflow: hidden;`;

/* Page Component */
class HomePage extends React.Component {
    render() {
        return (
            <StyledPageContainer ref="pagecontainer">
                <Landing />
                <Welcome />
                <Faq />
                <ComingUp />
                <Sponsorship />
            </StyledPageContainer>
        );
    }
}

export default HomePage;
