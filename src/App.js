

import { React, Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import HornbeastData from "./component/data.json"
import BestSelect from "./component/BestSelect";

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{


  constructor(props){
    super(props);
    this.state ={
      animalData :HornbeastData,
      show:false,
      datamodel:{},
    }
  }
  showhand= (data) =>{
    this.setState({
      show:true,
      datamodel:data,


    })
  }
  closehand=() =>{
    this.setState({
      show:false,
    })
  }
  render(){

   

   
    
    return(
      <div style={{
        // display: "flex",
        // justifyContent: "center",
        margin: 'auto',
        width: '50 %',
        border: '3px solid green',
        padding: '10px',
        alignItems: "center",
        backgroundColor: "silver"
    }}>
      <Header/>
      <Main modalselect={this.showhand} data={this.state.animalData}/>

     <BestSelect exitHandler={this.closehand} dataShow={this.state.show } datamodel={this.state.datamodel}/>
      <Footer/>

      </div>
    )
  }
}

export default App;




