import React, { Component } from 'react'
import HornbeastData from "./data.json"
import HornBeast from './HornBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';




class Main extends Component {


    update = (event) => {
        let numOfHorns = parseInt(event.target.value)
        let allofHornes = HornbeastData;
        let resultdata;
        if (numOfHorns) {
                        // eslint-disable-next-line array-callback-return
            resultdata = allofHornes.filter(item => {
                if (item.horns === numOfHorns){
                    return item;}
            })

        } else {
            resultdata = allofHornes;
        };
        this.props.filterhorn(resultdata)
    }


    render() {
        console.log(this.props)

        return (
            < div className="row" style={{
                // display: "flex",
                // justifyContent: "center",
                margin: 'auto',
                
                border: '3px solid green',
                padding: '10px',
                alignItems: "center",
                backgroundColor: "gray"
            }}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select the hornedbeast depend on horned numbe :</Form.Label>
                        <Form.Control as="select" custom onChange={this.update}>
                            <option value="1">One horn</option>
                            <option value="2">Two horns</option>
                            <option value="3">Three horns</option>
                            <option value="100">more and more horns</option>
                            <option value="a">All horns</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
               {
                    HornbeastData.map((item ,index)=>{
                    return(
                        <HornBeast 
                        title={item.title}
                        image_url={item.image_url}
                        description={item.description}
                        key={index}
                        selected={this.props.selected}
                        

                        />
                    )
                })
                }

            </div>
        )
    }
}

export default Main
