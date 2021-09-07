import React, { Component } from 'react'
import HornbeastData from "./data.json"
import HornBeast from './HornBeast'
import 'bootstrap/dist/css/bootstrap.min.css';



class Main extends Component {
    render() {
        return (
            < div style={{
                // display: "flex",
                // justifyContent: "center",
                margin: 'auto',
                width: '50 %',
                border: '3px solid green',
                padding: '10px',
                alignItems: "center",
                backgroundColor: "gray"
            }}>
                {/* <h2>{this.props.title}</h2>
                <img alt={this.props.keyword} style={{ width: "600px" }} src={this.props.image_url} />;

                <p>Number Of Horns: {this.props.horns}</p>

                <p>{this.props.description}</p>
                
                */}{
                    HornbeastData.map(elem =>{
                    return(
                        <HornBeast 
                        title={elem.title}
                        image_url={elem.image_url}
                        description={elem.description}
                        modal={this.props.modalselect}

                        />
                    )
                })
                }

            </div>
        )
    }
}

export default Main
