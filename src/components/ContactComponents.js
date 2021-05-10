import React,{Component} from 'react';
import {Form,FormFeedback,FormGroup,Col,Label,Input,Button} from 'reactstrap'

class Contact extends Component {
    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            contactType: 'tel',
            message: '',
            agree: false,
            touched:{
                firstname:false,
                lastname: false,
                mobile: false,
                email: false,
                } 
            
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
    }
    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'? target.checked : target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event){
        const data =JSON.stringify(this.state);
        console.log(data);
        alert(data);
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, mobile, email) {
        const errors = {
            firstname: '',
            lastname: '',
            mobile: '',
            email: ''
        };
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';
        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';
        const reg = /^\d+$/;
        if (this.state.touched.mobile && !reg.test(mobile) )
            errors.mobile = 'Tel. Number should contain only numbers';
        else if (this.state.touched.mobile && (mobile.length > 10 || mobile.length < 10))
            errors.mobile = 'Last Name should be = 10 characters';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.mobile,this.state.email);
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        Patliputra Road<br />
                        Patna, Bihar<br />
                        India<br />
                        <i className="fa fa-phone"></i>: +919977556655<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:resto@food.net">resto@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+919977556655"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:resto@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            {/* Contact Feedback form */}

            <div className="row row-content">
            <div className="col-12">
                <h1>Feedback  Form</h1>
            </div>
            <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === '' && this.state.touched.firstname}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === '' && this.state.touched.lastname}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="mibile" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="mobile" name="mobile"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.mobile === '' && this.state.touched.mobile}
                                        invalid={errors.mobile !== ''}
                                        onBlur={this.handleBlur('mobile')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === '' && this.state.touched.email}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

            </div>

            </div>
        </div>
    );
}
}

export default Contact;