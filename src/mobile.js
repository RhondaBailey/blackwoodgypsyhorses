import React from 'react';
import {
    Container,
    Menu,
    Segment,
    Sidebar,
    Icon,
    Dropdown
  } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Logo from './logo.js';
import logoSrc from './images/Logo-dark.png'
import NavRoutes from './routesmow';
import MobileFooter from './mobilefooter.js';

export class NavBar extends React.Component {
    state = {
      visible: false
    };
  
    handlePusher = () => {
      const { visible } = this.state;
  
      if (visible) this.setState({ visible: false });
    };
  
    handleToggle = () => {
        this.setState({ visible: !this.state.visible });
    };
    render() {
        const { visible } = this.state;
        
        return (
            <div>
                <Mobile
                    onPusherClick={this.handlePusher}
                    onToggle={this.handleToggle}
                    visible={visible}>
                </Mobile> 
            </div>
            
        );
    }
}

export const Mobile = (props) => {
    library.add(fab, fas); 
    let logo = "logoMow";
    const {
        onPusherClick,
        onToggle,
        visible
      } = props;

    return (
            <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    vertical
                    width="wide"
                    visible={visible}>
                        <Menu.Item onClick={onToggle} name="sidebar" as={NavLink} to="/">Home</Menu.Item>
                        <Dropdown inverted item simple className="right" text='Our Horses'>
                            <Dropdown.Menu>
                                <Dropdown.Item inverted onClick={onToggle} name="sidebar" as={NavLink} to="/MissMe">Starfire's Imperial Mistress</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Nova">HGR Champagne Supernova of Blackwood</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar"as={NavLink} to="/Bree">Blackwood's The Strawberry Lass</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Effie">Blackwood's The Ineffable Game</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Kima">Blackwood's Lady Kima</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Maestro">Northstar Maestro</Dropdown.Item>
                                {/* <Dropdown.Item item simple text='Sold Horses'></Dropdown.Item> */}
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Valkyrie">Blackwood's Warrior Goddess</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Tumblena">Tumblena</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Max">Maximus Roman of Bella Vista</Dropdown.Item>
                                <Dropdown.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Sale">Sale Horses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Breed">About the Breed</Menu.Item>
                        <Menu.Item onClick={onToggle} name="sidebar" as={NavLink} to="/Links">Links</Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher
                        dimmed = {visible}
                        onClick={onPusherClick}
                        style={{ minHeight: "100vh" }}>
                        <Menu fixed="top" inverted>
                            <Menu.Item  position="right">
                                <Icon onClick={onToggle} name="sidebar" />
                            </Menu.Item>
                        </Menu>
                        <Container ui padded text>
                            <Logo src={logoSrc} alt="Blackwood Gypsy Horses" shape={logo} border="2px solid black" isMobile="true"/>
                            <Container ui padded text style={{ marginTop: '15em', height: '100%' }}>
                            <NavRoutes></NavRoutes>
                            </Container>  
                        </Container> 
                        <MobileFooter></MobileFooter>    
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
    )
}