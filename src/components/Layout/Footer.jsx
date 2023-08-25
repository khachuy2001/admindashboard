import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col md={6}>{new Date().getFullYear()} Website</Col>
                    <Col md={6} className='text-sm-end d-none d-sm-block'>
                        Made by HuyTruong
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
