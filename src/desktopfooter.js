import React from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

const DesktopFooter = () => {
    library.add(fab); 
    library.add(fas);  
    
    return(
        <Menu inverted style={{justifyContent: 'center'}}>
            <Segment inverted vertical style={{ margin: '2em 0em 0em 0em' }}>
            <Container textAlign='center'>
                    <Grid divided inverted stackable>
                    <Grid.Row columns={7}>
                        <Grid.Column ></Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Find us on...' />
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Facebook' />
                            <List link inverted>
                                <List.Item class="fa-cog" as='a' href='https://www.facebook.com/blackwoodgypsy'>
                                <FontAwesomeIcon icon={['fab', 'facebook']} /></List.Item>
                            </List>    
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Twitter' />
                            <List link inverted>
                                <List.Item class="fa-cog" as='a' href='https://twitter.com/blackwoodgypsy'>
                                <FontAwesomeIcon icon={['fab', 'twitter']} /></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Instagram' />
                            <List link inverted>
                                <List.Item class="fa-cog" as='a' href='https://www.instagram.com/blackwoodgypsy/'>
                                <FontAwesomeIcon icon={['fab', 'instagram']} /></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Email' />
                            <List link inverted>
                                <List.Item class="fa-cog" as='a' href='mailto: blackwoodgypsies@gmail.com'>
                                <FontAwesomeIcon icon={['fas', 'envelope']} /> </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section />
                    <List horizontal  size='small' >
                        <List.Item>
                            © 2022 Blackwood Gypsy Horses. All rights reserved.
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </Menu>
      );
    };
    
    export default DesktopFooter;