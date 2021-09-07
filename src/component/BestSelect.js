import React, { Component } from 'react'

import { Modal, Button, Card } from 'react-bootstrap'

class BestSelect extends Component {
    render() {
        return (
            <>

                <Modal Show={this.props.dataShow}>
                    <Modal.Header>
                        <Modal.Title>{this.props.datamodel}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <Card>
                                <Card.Img src={this.props.datamodel.image_url} alt={this.props.title} />
                                <Card.Body>
                                    <Card.Text>
                                        {this.props.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.props.exitHandler}>Close</Button>
                        </Modal.Footer>
                        </Modal>




                    </>
                    )




    }
}
                    export default BestSelect