import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import thumbsUp from '../../images/hand.png';

function ThankYou() {
    return (
        <React.Fragment>

            <div className='feedback-top'/>
            <Container fluid={false} className='feedback-top1'>
                <Row>
                    <Col lg={{span: 9}} xs={{span: 10, offset: 1}} md={{span: 10, offset: 1}} className='mt-5 pb-3 feedback pt-4 pb-5'>
                        <Image src={thumbsUp} className='thumbs-up'/>
                        <p className='thank-you'>Thank you for Order</p>
                        <p className='order-id'>Order ID: 123</p>
                        <p className='email-copy'>Copy of your order details has been emailed to you.</p>
                    </Col>
                </Row>

                <Row className="d-flex flex-row-reverse mt-lg-4">
                    <Col xs={12} sm={12} md={3} lg={3} className='mt-5 mb-5'>
                        <div className="continue-shopping-btn mt-lg-5">
                            <Button variant='outline-secondary' className='shopping-btn'>
                                Continue Shopping ></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ThankYou;
