import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Aux from '../../hoc/Auxiliary';

const StyledButton = styled(Button) `
&& {
    background: ${props => props.theme.colors.secondary};
    border-radius: 0px;
    height: 42px;
    color: ${props => props.theme.colors.textSecondary};
}
`;

const BaseButton = (props) => {
    return (
        <Aux>
            <StyledButton>
                {props.children}
            </StyledButton>
        </Aux>
    );
};

export default BaseButton;