import React,{ Component } from "react";
import {Control,Errors,LocalForm} from 'react-redux-form'
import {Label,Row,Col,Button} from 'reactstrap'


const required=(val)=> (val) && val.length;
const minLength=(len)=>(val)=>!(val) || val.length>=len;
const maxLength=(len)=>(val)=> (val)  && (val.length<=len);
const isNumber=(val)=> !isNaN(Number(val));
const isEmail=(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact2 extends Component{
    constructor(props){
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    render(){
        return(
            <div>
                <div className="container">
                <h1>Redux Form</h1>
                </div>
                <div className="container">
                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname"
                                        placeholder="First Name"  className="form-control"
                                        validators={
                                            {required,
                                            minLength:minLength(3),
                                            maxLength:maxLength(20)
                                            }
                                        }
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required:'Required',
                                            minLength:'First Name should be More than 2 letters',
                                            maxLength:'First Name should not be grether than 20 letters'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname"
                                        placeholder="Last Name"  className="form-control"
                                        validators={
                                            {required,
                                            minLength:minLength(3),
                                            maxLength:maxLength(20)
                                            }
                                        }
                                        />
                                         <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required:'Required',
                                            minLength:'Last Name should be More than 2 letters',
                                            maxLength:'Last Name should not be grether than 20 letters'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="mibile" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".mobile" name="mobile"
                                        placeholder="Tel. Number" className="form-control" 
                                        validators={
                                            {required,
                                            minLength:minLength(10),
                                            maxLength:maxLength(10),
                                            isNumber
                                            }
                                        }
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".mobile"
                                        show="touched"
                                        messages={{
                                            required:'Required',
                                            minLength:'Mobile Number should be 10 digits',
                                            maxLength:'Mobile Number should be 10 digits',
                                            isNumber:'Mobile should be a number'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email"
                                        placeholder="Email" className="form-control"
                                        validators={
                                            {required,
                                            isEmail
                                            }
                                        }
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required:'Required',
                                            isEmail:'Email should be in specific Format "[a-z0-9]@[a-z0-9].[a-z]"'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"  className="form-check-input"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message"
                                        rows="12" className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                    <Errors
                                    className="text-danger"
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required:'Required'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                </div>
            </div>
        )
    }
}
export default Contact2