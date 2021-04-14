import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import {FaRegTrashAlt} from 'react-icons/fa'
import {smallCentsWithPrefix} from "../../util/uiComponents";

function CartItem() {
    return (
        <Container>
            <Row>
                <Col xs={7} sm={7} md={8} lg={8} className='pl-0 pr-0'>
                    <Row>
                        <Col xs={12}><p className='cart-item-text'>I will paint your car from top to bottom</p></Col>
                    </Row>
                </Col>
                <Col xs={5} sm={5} md={4} lg={4} className='item-price pr-0 text-right'>
                    <label>
                        <NumberFormat value={4444.44} thousandSeparator={true}
                                      displayType='text'
                                      prefix={'LKR '}
                                      decimalScale={2} fixedDecimalScale={true}
                                      renderText={smallCentsWithPrefix}
                        />
                    </label>

                    <FaRegTrashAlt fontSize={10} cursor='pointer' color='#757575'/>
                </Col>
            </Row>
        </Container>
    )

}

export default CartItem;
