import React, { Component } from 'react'
import { Card, CardImg, Breadcrumb,BreadcrumbItem, CardText, CardBody, CardTitle, Button,Modal,ModalBody,ModalHeader,Row, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form';


const minLenght=(len)=>(val)=> !(val) || (val.length>=len);
const maxLenght=(len)=>(val)=> (val) && (val.length<=len);
const required=(val)=>(val) && val.length;


class CommentForm extends Component{
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
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        alert('Values'+JSON.stringify(values));
        this.togleModel()
    }

    render(){
        return(
            <div>
                <Button className="m-5" outline onClick={this.togleModel} >New Review</Button>
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
                        <Label htmlfor="author">Full Name</Label>
                        <Control.text model=".author" name="author" className="form-control"
                        validators={{
                            required,
                            minLenght:minLenght(3),
                            maxLenght:maxLenght(15)
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                            required:"This Field is Mandatory",
                            minLenght:"Name should be atleast 3 letters",
                            maxLenght:"Name should be atmost 15 letters"
                        }}
                        />
                        </Row>
                        <Row className="form-group">
                        <Label htmlfor="comment">Message</Label>
                        <Control.textarea model=".comment" name="comment" className="form-control"
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

const DishDetail=({dish,comments,addComment})=>{
    return(
        <React.Fragment>  
            <RenderDish dish={dish} comments={comments} addComment={addComment}/>
        </React.Fragment>
    )
}

const  RenderDish=({dish,comments,addComment})=>{
        if(dish!=null){
            return(
                <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
                <div className="row">
                    <div className="col-11 col-md-6">
                    <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                    {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>

            </div>
            <RenderComments comments={comments} addComment={addComment} dishId={dish.id} />
            </div>
            </div>
            </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    };

   function RenderComments({comments,addComment,dishId}){
       console.log("dishId: "+dishId)
        if(comments.length==undefined){
            return(
                <div>Nothing Here</div>
            );
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
            );
        });
    
        return(
            <div className="col-12 col-md-6">
                <div className="container">
                    <h1>
                        Comments
                    </h1>
                    {commments}
                </div>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
        
    }
 

export default DishDetail;
