import {useState} from "react";
import {Redirect, Link} from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";

function GuestUser () {
    const [isLogin, setIsLogin] = useState(false); //go to signin

    const handleSignRedirect = () => {
        return <Redirect to='#'/>;
    };

    return (
        <Card className='guest-user'>
            {isLogin && handleSignRedirect()}

            <Card.Body>
                <Row>
                    <Col xs={7} md={8} lg={8}>
                        <p className='title-text'>Already have an account?</p>
                    </Col>
                    <Col xs={5} md={4} lg={4}>
                        <Link to={'/customer/access/signin'}>
                            <Button variant='primary' className='sign-in-btn'>
                                Log in
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default GuestUser;
