import React,{Component} from 'react'
import { Nav,Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
constructor(props){
    super(props);
    this.state={
        isOpenTogler:false
    }
    this.ToggleNav=this.ToggleNav.bind(this);

}
ToggleNav(){
    this.setState({
        isOpenTogler:!this.state.isOpenTogler
    });
}
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.ToggleNav}/>
                    <NavbarBrand href="/">Resto</NavbarBrand>
                    <Collapse isOpen={this.state.isOpenTogler} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home"><span>Home</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus"><span>About Us</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus"><span>Contact Us</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu"><span>Menu</span></NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <h1>Resto</h1>
                    <p>

                    </p>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header