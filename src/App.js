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
  };
  filterhorn=(horns)=>{
    this.setState({
      animalData:horns,
    })
  }
  selected=(title) =>{
    // eslint-disable-next-line array-callback-return
    let findanimal = HornbeastData.find(element => {
      if (element.title === title) {
        return element;
        
      }})

      this.setState({
        show : true,
        datamodel:findanimal
      })
    }
  // showhand= (data) =>{
  //   this.setState({
  //     show:true,
  //     datamodel:data,


  //   })
  // }
  closehand=() =>{
    this.setState({
      show:false,
    })
  }
  render(){

   
    console.log(this.props)

   
    
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
      <Main 
      animalData={this.state.animalData}
      selected={this.selected}
      filterhorn={this.filterhorn}
      />

     <BestSelect
      
      dataShow={this.state.show } 
      exitHandler={this.closehand}
      datamodel={this.state.datamodel}/>
      <Footer/>

      </div>
    )
  }
}

export default App;