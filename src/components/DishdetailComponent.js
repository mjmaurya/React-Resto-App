import React, { Component } from 'react'
import { Card, CardImg, Breadcrumb,BreadcrumbItem, CardText, CardBody, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

class Dishdetails extends Component{

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
            </div>
        )
    }
}

export default Dishdetails
