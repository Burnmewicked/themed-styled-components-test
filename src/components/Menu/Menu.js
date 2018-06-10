import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components';

const StyledDiv = styled.div`
&& {
    flex-grow: 1;
}
`;

const StyledAppBar = styled(AppBar) `
&& {
    background: ${props => props.theme.colors.primary};
}
`;

const StyledIconButton = styled(IconButton) `
&& {
    margin-left: -12;
    margin-right: 20;
    color: ${props => props.theme.colors.textPrimary};
}
`;

const StyledTypography = styled(Typography) `
&& {
    flex: 1;
    color: ${props => props.theme.colors.textPrimary};
}
`;

class Menu extends Component {
    render() {
        return (
            <StyledDiv position="static">
                <StyledAppBar>
                    <Toolbar>
                        <StyledIconButton aria-label="menu">
                            <MenuIcon />
                        </StyledIconButton>
                        <StyledTypography variant="title">
                            The Weather App
                        </StyledTypography>
                    </Toolbar>
                </StyledAppBar>
            </StyledDiv>
        );
    }
}

export default Menu;