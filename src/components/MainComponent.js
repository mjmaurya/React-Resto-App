import React,{Component} from 'react'
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Home';
import Contact from './ContactComponents';
import Dishdetails from "./DishdetailComponent";
import About from "./AboutComponents";

import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const  mapStateToprops=(state)=>
{
  return{
  dishes:state.dishes,
  promotions:state.promotions,
  leaders:state.leaders,
  comments:state.comments
}}

class Main extends Component {
  render(){
    const HomePage=()=>{
      return(
        <Home 
        dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]} 
        leader={ this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }
    
    const DishWithID=({match})=>{
      return(
        <Dishdetails 
        dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />
      )

    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
          <Route path='/contactus' component={Contact} />} />
          <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>} />} />
          <Route path="/menu/:dishId" component={DishWithID}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
    }
}

export default withRouter(connect(mapStateToprops)(Main));
