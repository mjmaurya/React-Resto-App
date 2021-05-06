import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props){
        super(props);
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
                
            </div>
        )

    }
    render() {
        const details=this.props.selectedDish;
        if (details==null){
            return(
                <div></div>
            )
        }
        const dish=this.renderDish(details);
        const comments=this.renderComments(details.comments);

        return (
            <div className="container">
                <div className="row">
                {dish}
                {comments}
            </div>
            </div>
        )
    }
}

export default DishdetailComponent
