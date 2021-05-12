import React,{Component} from 'react'
import { Nav,Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem, Jumbotron, Button,Modal,ModalHeader,ModalBody
    ,Form,FormGroup,Label,Input } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
constructor(props){
    super(props);
    this.state={
        isOpenTogler:false,
        isModalOpen:false
    }
    this.ToggleNav=this.ToggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);

}
ToggleNav(){
    this.setState({
        isOpenTogler:!this.state.isOpenTogler
    });
}
toggleModal() {
    console.log(this.isModalOpen)
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
handleLogin(event){
    const user=this.username.value;
    const pass=this.password.value;
    if (user.length===0 || pass.length===0) {
        alert("User name Or password should not be Empty");
    }
    else{
        this.toggleModal();
        alert("Username: "+user+"Password: "+pass);
    }
    event.preventDefault();
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
                    <Nav navbar className="ml-auto">
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>Login</Button>
                    </NavItem>

                    </Nav>
                </Navbar>
                <Jumbotron>
                    <h1>Resto</h1>
                    <p>

                    </p>
                </Jumbotron>
                    <Modal isOpen={this.state.isModalOpen}  toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup >
                                    <Label htmlFor="username">User Name</Label>
                                    <Input type="text" id="username" name="username"
                                    innerRef={(input)=> this.username =input}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                    innerRef={(input)=>this.password=input}/>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" id="remember" name="remember"
                                    innerRef={(input)=>this.remember=input}/>
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>

                        </ModalBody>
                    
                    </Modal>
            </React.Fragment>
        )
    }
}

export default Header