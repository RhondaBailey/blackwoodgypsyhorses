import React from 'react';
import { NavLink } from "react-router-dom";
import {
    Container,
    Dropdown,
    Menu
  } from 'semantic-ui-react';

const DesktopMenu = () => {
      return(
      
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <Menu.Item as={NavLink} to="/About">Our Story</Menu.Item>
            <Dropdown item simple style={{width: '160px'}} text='Our Horses'>
                <Dropdown.Menu>
                    <Dropdown item simple text='Mares and Fillies'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/MissMe">Starfire's Imperial Mistress</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Nova">HGR Champagne Supernova of Blackwood</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Bree">Blackwood's The Strawberry Lass</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Effie">Blackwood's The Ineffable Game</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Kima">Blackwood's Lady Kima</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item simple text='Geldings'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/Maestro">Northstar Maestro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Item as={NavLink} to="/Sale">Sale Horses</Dropdown.Item>
                    <Dropdown item simple text='Sold Horses'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/Valkyrie">Blackwood's Warrior Goddess</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Tumblena">Tumblena</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Max">Maximus Roman of Bella Vista</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as={NavLink} to="/Breed">About the Breed</Menu.Item>
            <Menu.Item as={NavLink} to="/Links">Links</Menu.Item>
        </Container>
    </Menu>
      );
    };
    
    export default DesktopMenu;