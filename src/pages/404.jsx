import React from "react";
import styled from 'styled-components';
import { headline1 } from '@sberdevices/plasma-tokens';

const AppStyled = styled.div`
    padding-top: 190px;
    padding-bottom: 430px;
    padding-left: 200px;
    padding-right: 170px;
`;

const NotFound = () => {
    return(
        <div>
            <AppStyled>
                <h1 style={headline1}>404 Not Found</h1>
            </AppStyled>
        </div>
    );
};

export default NotFound;