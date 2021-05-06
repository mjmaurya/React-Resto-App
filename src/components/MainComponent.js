import React,{Component} from 'react'
import { DISHES } from '../shared/dishes';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }
  dishSelected(dishId){
    this.setState({
        selectedDish:dishId
    });
    
}
  render(){
    return (
      <div className="App">
        <Header/>
          <MenuComponent dishes={this.state.dishes} onClick={(dishId)=>this.dishSelected(dishId)}/>
          <DishdetailComponent selectedDish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
    }
}

export default Main;
