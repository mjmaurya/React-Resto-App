import React,{Component} from 'react'
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Home';
import Contact from './ContactComponents';
import Dishdetails from "./DishdetailComponent";
import About from "./AboutComponents";

import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      comments:COMMENTS,
      promotions:PROMOTIONS
    }
  }
   
  render(){
    const HomePage=()=>{
      return(
        <Home 
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]} 
        leader={ this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }
    
    const DishWithID=({match})=>{
      return(
        <Dishdetails 
        dish={this.state.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId==parseInt(match.params.dishId,10))}
        />
      )

    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path='/contactus' component={Contact} />} />
          <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>} />} />
          <Route path="/menu/:dishId" component={DishWithID}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
    }
}

export default Main;
