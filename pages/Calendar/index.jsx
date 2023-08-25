import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Breadcrumb from '../../src/components/Common/Breadcrumb'
import AddEvents from './AddEvents';
import Schedule from './Schedule';
function Calendar() {
    return (
        <Container fluid>
            <Breadcrumb title="Admin" breadcrumbItem="Shedule" />
            <div className='col-12'>
                <div className='card-body'>
                    <Row>
                        <Col xl="4">
                            <AddEvents />
                        </Col>
                        <Col xl="8">
                            <Schedule />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Calendar