import React from 'react';
import {
    Segment,
    Sidebar,
    Grid
  } from 'semantic-ui-react'; 
import NavRoutes from './routes';
import Logo from './logo.js';
import logoSrc from './images/Logo-dark.png'
import DesktopMenu from './desktopmenu';
import DesktopFooter from './desktopfooter';

export const Desktop = () => {
    let logo = "logo";
    return (
        <div>
            <DesktopMenu></DesktopMenu>
            <Grid>
                <Grid.Column width={3}>
                    <Logo src={logoSrc} alt="Blackwood Gypsy Horses" shape={logo} border="2px solid black"/>
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={8}>
                    <Sidebar.Pusher>
                        <Segment basic style={{ marginTop: '4em', height: '100%' }}>
                            <NavRoutes></NavRoutes>         
                        </Segment>
                    </Sidebar.Pusher>
                </Grid.Column>
            </Grid>
            <DesktopFooter></DesktopFooter>
        </div>
    )
}