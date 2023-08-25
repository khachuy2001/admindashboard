import React from 'react'
import { Card, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function AddEvents() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card className='overflow-hidden  border-0 align-items-center   '>
                <Row>
                    <Col>
                        <Col className=''>
                            <Button variant='primary' onClick={handleShow} className='btn-create' type='button'>
                                <span className='icon-circle'>
                                    <FontAwesomeIcon icon={faCirclePlus} />
                                </span>
                                Create New Event
                            </Button>
                        </Col>

                        <div className='mt-3'>
                            <p>Drag and drop your event or click in the calendar</p>
                            <div>Event 1</div>
                            <div>Event 2</div>
                            <div>Event 3</div>
                            <div>Event 4</div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="sm-5"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Insert Event Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option>Success</option>
                                <option>Danger</option>
                                <option>Primary</option>
                                <option>Info</option>
                                <option>Dark</option>
                                <option>Warning</option>
                            </Form.Select>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default AddEvents