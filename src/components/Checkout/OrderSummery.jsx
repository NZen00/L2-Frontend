import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import CartItem from "./CartItem";
import {smallCentsWithPrefix} from "../../util/uiComponents";

function OrderSummery() {
    return (
        <div className='order-summery mb-4'>
            <Card className='order-summery-card'>
                <Card.Header>
                    Order Summery
                </Card.Header>
                <Card.Body>
                    <CartItem/>

                    <hr/>
                    <Container>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} className='pl-0'>
                                <p className='total-amount-text'>Total Amount</p>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className='item-price-total text-right pr-0'>
                                <label>
                                    <NumberFormat value={88888.99} thousandSeparator={true}
                                                  displayType='text'
                                                  prefix={'LKR '}
                                                  decimalScale={2} fixedDecimalScale={true}
                                                  renderText={smallCentsWithPrefix}
                                    /> <br/>
                                </label>
                            </Col>
                        </Row>
                    </Container>

                    <div className='terms-text mb-3'>
                        <Form.Check type='checkbox'>
                            <Form.Check.Input type='checkbox' id='order-agreement'
                            />
                            <Form.Check.Label htmlFor='order-agreement'>
                                By completing your purchase you agree to these <a href='#'>Terms of
                                Service</a></Form.Check.Label>
                        </Form.Check>
                    </div>

                    <Button variant='success' className='order-btn float-right' type='submit'>
                        Order
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderSummery;
