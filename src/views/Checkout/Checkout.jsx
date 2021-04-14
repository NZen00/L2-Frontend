import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Navbar} from "../../components/navbar";
import {Footer} from "../../components/footer";
import PaymentMethodSelect from "../../components/Checkout/PaymentMethodSelect";
import GuestUser from "../../components/Checkout/GuestUser";
import BillingInfo from "../../components/Checkout/BillingInfo";
import OrderSummery from "../../components/Checkout/OrderSummery";

function Checkout() {
    return (
        <React.Fragment>
            <Navbar/>
            <Container fluid={true} className='checkout pl-xl-5 pr-xl-5'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h2 className='checkout-header'>Checkout</h2>

                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <PaymentMethodSelect/>
                                {/*<GuestUser/>*/}
                                <BillingInfo/>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={{span: 5, offset: 1}}>
                                <OrderSummery/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default Checkout;
