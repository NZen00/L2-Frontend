import React, {useState} from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";
import {FiCreditCard} from "react-icons/fi";
import {HiOutlineCash} from "react-icons/hi";

function PaymentMethodSelect() {
    const [isCardPayment, setIsCardPayment] = useState(true);
    const [isCashPayment, setIsCashPayment] = useState(false);

    const handleSetCardPayment = () => {
        setIsCardPayment(true);
        setIsCashPayment(false);
    }

    const handleSetCashPayment = () => {
        setIsCashPayment(true);
        setIsCardPayment(false);
    }

    return (
        <React.Fragment>
            <p className='payment-method-title'>Select Payment Method</p>
            <Row>
                <Col xs={6} sm={6} md={3} lg={3} className='pr-0' onClick={handleSetCardPayment}>
                    <Card className={isCardPayment ? 'payment-method-select-card-active' : 'payment-method-select-card'}>
                        <Card.Header className='text-center'>
                            <Form.Check
                                type='radio'
                                inline
                                id='mobile'
                                className='form-check'
                                name="payment-option-group"
                                checked={isCardPayment}
                                onChange={handleSetCardPayment}
                                custom
                            />
                        </Card.Header>
                        <Card.Body className='text-center'>
                            <FiCreditCard
                                fontSize={35}
                                color={'#9E9E9E'}
                            />
                            <p>Credit/Debit Card</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} sm={6} md={3} lg={3} className='pl-0' onClick={handleSetCashPayment}>
                    <Card className={isCashPayment ? 'payment-method-select-card-active' : 'payment-method-select-card'}>
                        <Card.Header className='text-center'>
                            <Form.Check
                                type='radio'
                                inline
                                id='credit'
                                className='form-check'
                                name="payment-option-group"
                                checked={isCashPayment}
                                onChange={handleSetCashPayment}
                                custom
                            />
                        </Card.Header>
                        <Card.Body className='text-center'>
                            <HiOutlineCash
                                fontSize={35}
                                color={'#9E9E9E'}
                            />
                            <p>Cash on Delivery</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default PaymentMethodSelect;
