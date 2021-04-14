import React from 'react';
import {Card, Form} from "react-bootstrap";
import BillingInfoPersonal from "./BillingInfoPersonal";

function BillingInfo () {
    return (
        <Card className='payment-card mb-4'>
            <Card.Header>
                <Card.Title>
                    Billing Address
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Form noValidate className='billing-info'>
                    <BillingInfoPersonal/>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default BillingInfo;
