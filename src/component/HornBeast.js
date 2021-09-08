import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Col} from 'react-bootstrap';

  class HornBeast extends Component {

       constructor(props){
           super(props);
           this.state=  {
              
               votForIt:0,
               lovingIt:0,
           }
       }
       changingVoting=()=>{

        this.setState({
            votForIt:this.state.votForIt+1,
            lovingIt:this.state.lovingIt+1,
        })
       }

            clickOnMe= ()=>{
                // this.props.modal({
                //     title: this.props.title,
                //     image_url: this.props.image_url,
                //     description: this.props.description
                // })
                this.props.selected(this.props.title);
            }
    // handleCick=()=>{
    //     this.setState({
    //         votForIt:this.state.votForIt+1
    //     })
    // }
    

     render() {
        console.log(this.props)

         return (
             <>
                 <Col xs={4}>
                  <Card style={{ width: "70%", height: "50%"   }} bg={'warning'} >
                      <Card.Img width = {600} height= {400} onClick={this.changingVoting} variant="top" src={this.props.image_url} alt={this.props.title}/>
                      <Card.Body>
                          <Card.Title > {this.props.title}</Card.Title>
                          <Card.Text>{this.props.description}</Card.Text>
                      </Card.Body>
                      <Button  variant="info">💖 {this.state.lovingIt}</Button>
                      <Button onClick={this.clickOnMe} >  click here</Button>

                      </Card>
                      </Col>
                


                      {/* <h2>{this.props.title}</h2>
                      <img style={{width : "500px"}} onClick={this.handleCick}  src={this.props.image_url} title={this.props.title} alt='imgdata'/>
                      <h3>{this.state.votForIt}💖</h3>
                      <h4>{this.props.description}</h4>
                      <h4>{this.props.keyword}</h4>
                      <h4>{this.props.horns}</h4> */}
             </>
         )
     }
 }
 
 export default HornBeast