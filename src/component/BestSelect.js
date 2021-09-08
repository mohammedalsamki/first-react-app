import React, { Component } from 'react'

import { Modal, Button, Card } from 'react-bootstrap'

class BestSelect extends Component {
    render() {
        console.log(this.props);
        return (
            <>

                <Modal show={this.props.dataShow} >
                    <Modal.Header>
                        <Modal.Title >{this.props.datamodel.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <Card >
                                <Card.Img width={200}
                                height={280} src={this.props.datamodel.image_url} alt={this.props.title} />
                                <Card.Body>
                                    <Card.Text>
                                        {this.props.datamodel.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.exitHandler}>Close</Button>
                        </Modal.Footer>
                        </Modal>




                    </>
                    )




    }
}
                    export default BestSelect