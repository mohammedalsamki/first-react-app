

import { React, Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";


class App extends Component{


  // constructor(props){
  //   super(props);
  //   this.state ={
  //     animalData :data,
  //     show:false,
  //     datamodel:{},
  //   }
  // }
  // showhand= (data) =>{
  //   this.setState({
  //     show:true,
  //     datamodel:data,


  //   })
  // }
  // closehand=(data) =>{
  //   this.setState({
  //     show:false,
  //   })
  // }
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
      {/* <Main title={hornedBeastAnimal[0].title} image_url={hornedBeastAnimal[0].image_url}   description={hornedBeastAnimal[0].description} >  */}
      <Header/>
      <Main />

     
      <Footer/>

      </div>
    )
  }
}

export default App;




