import React, { Component } from 'react'
 
  class HornBeast extends Component {

       constructor(props){
           super(props);
           this.status=  {
              
               votForIt:0
           }
       }
    //    changingVoting=()=>{

    //     this.setState({
    //         votForIt:this.state.votForIt+1,
    //         lovingIt:this.state.lovingIt+1,
    //     })
    //    }

    //         clickOnMe= ()=>{
    //             this.props.modal({
    //                 title: this.props.title,
    //                 img_url: this.props.img_url,
    //                 description: this.props.description
    //             })
    //         }
    handleCick=()=>{
        this.setState({
            votForIt:this.state.votForIt+1
        })
    }

     render() {
         return (
             <div>
                  {/* <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                  <Card style={{ width: "60%", height: "80%" }} >
                      <Card.Img width = {300} height= {400} src={this.props.img_url} alt={this.props.title}/>
                      <Card.Body>
                          <Card.Title > {this.props.title}</Card.Title>
                          <Card.Text>{this.props.description}</Card.Text>
                      </Card.Body>
                      <Button>💖 {this.props.votForIt}</Button>
                      <Button onClick={this.clickOnMe} > click here</Button>

                      </Card>

                
                      </Col> */}


                      <h2>{this.props.title}</h2>
                      <img onClick={this.handleCick}  src={this.props.image_url} title={this.props.title} alt='imgdata'/>
                      <h3>{this.state.votForIt}💖</h3>
                      <h4>{this.props.description}</h4>
                      <h4>{this.props.keyword}</h4>
                      <h4>{this.props.horns}</h4>
             </div>
         )
     }
 }
 
 export default HornBeast
 