import React, { Component } from 'react'
import { Card, CardImg, Breadcrumb,BreadcrumbItem, CardText, CardBody, CardTitle, Button,Modal,ModalBody,ModalHeader,Row, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form'

const minLenght=(len)=>(val)=> !(val) || (val.length>=len);
const maxLenght=(len)=>(val)=> (val) && (val.length<=len);
const required=(val)=>(val) && val.length

class Dishdetails extends Component{
    constructor(props){
        super(props);
        this.state={
            isModeOpen:false
        }
        this.togleModel=this.togleModel.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    togleModel(){
        this.setState({
            isModeOpen:!this.state.isModeOpen
        })
    }

    handleSubmit(values){
        alert('Values'+JSON.stringify(values));
        this.togleModel()
    }
    renderDish(details){
        if(details!=null){
            return(
                    <div className="col-11 col-md-6">
                    <Card>
                <CardImg width="100%" src={details.image} alt={details.name}/>
                <CardBody>
                    <CardTitle>
                    {details.name}
                    </CardTitle>
                    <CardText>
                        {details.description}
                    </CardText>
                </CardBody>
            </Card>

                    </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    renderComments(comments){
        if(comments==null){
            return(
                <div></div>
            )
        }
        const commments=comments.map((comment)=>{
            return (
                <Card key={comment.id} className="p-2">
                    <CardTitle>
                        {comment.author}
                    </CardTitle>
                    <CardText>
                        <p>
                        {comment.comment}
                        </p>
                        <p><b>Rating:{comment.rating}</b></p>
                        <code>{new Intl.DateTimeFormat('en-US',{
                            year:'numeric',
                            month:'long',
                            day:'2-digit'
                        }).format(new Date(comment.date))}</code>
                    </CardText>
                </Card>
            )
        })

        return(
            <div className="col-12 col-md-6">
                <div className="container">
                    <h1>
                        Comments
                    </h1>
                    {commments}
                </div>
                <Button className="m-5" outline onClick={this.togleModel} >New Review</Button>
            </div>
        )

    }
    render() {
        const details=this.props.dish;
        if (details==null){
            return(
                <div></div>
            )
        }
        const dish=this.renderDish(details);
        const comments=this.renderComments(this.props.comments);

        return (
            <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            </div>
                <div className="row">
                {dish}
                {comments}
            </div>
            <Modal isOpen={this.state.isModeOpen} toggle={this.togleModel}>
                <ModalHeader toggle={this.togleModel}>
                    <h2>Review Form</h2>
                </ModalHeader>
                <ModalBody className="container p-5">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                        <Label htmlfor="rating">Rating</Label>
                        <Control.select model=".rating" name="rating" className="form-control"
                        >
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Control.select>
                        </Row>
                        <Row className="form-group">
                        <Label htmlfor="fullname">Full Name</Label>
                        <Control.text model=".fullname" name="fullname" className="form-control"
                        validators={{
                            required,
                            minLenght:minLenght(3),
                            maxLenght:maxLenght(15)
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".fullname"
                        show="touched"
                        messages={{
                            required:"This Field is Mandatory",
                            minLenght:"Name should be atleast 3 letters",
                            maxLenght:"Name should be atmost 15 letters"
                        }}
                        />
                        </Row>
                        <Row className="form-group">
                        <Label htmlfor="message">Message</Label>
                        <Control.textarea model=".message" name="message" className="form-control"
                        rows="5"
                        />
                        </Row>
                        <Button type="submit" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>

            </div>

        )
    }
}

export default Dishdetails
