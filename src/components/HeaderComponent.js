import React,{Component} from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{


    render(){
        return(
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <h1>Ristorante Con Fusion</h1>
                    <p>

                    </p>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header