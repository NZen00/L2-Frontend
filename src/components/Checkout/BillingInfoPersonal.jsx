import React, {useEffect, useState} from 'react';
import {Col, Form, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPersonalDetails} from "../../store/actions/orderActions";
import {AppState} from "../../store/reducers";

function BillingInfoPersonal() {

    const personalDetailsInStore = useSelector((state: AppState) => state.order.userBillingInformation);

    const dispatch = useDispatch();

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [tel, setTel] = useState('');

    useEffect(() => {
        personalDetails = personalDetailsInStore ? personalDetailsInStore : personalDetails;

        (fullName !== personalDetails.fullName && personalDetails.fullName) && setFullName(personalDetails.fullName);
        (address !== personalDetails.address && personalDetails.address) && setAddress(personalDetails.address);
        (city !== personalDetails.city && personalDetails.city) && setCity(personalDetails.city);
        (postcode !== personalDetails.postcode && personalDetails.postcode) && setPostcode(personalDetails.postcode);
        (tel !== personalDetails.tel && personalDetails.tel) && setTel(personalDetails.tel);
    });

    let personalDetails = {
        fullName: null,
        address: null,
        city: null,
        postcode: null,
        tel: null,
    };

    console.log(fullName);

    const handleChangeFullName = (fullName) => {
        dispatch(setPersonalDetails({...personalDetails, fullName}))
    }

    const handleChangeAddress = (address) => {
        dispatch(setPersonalDetails({...personalDetails, address}))
    }

    const handleChangeCity = (city) => {
        dispatch(setPersonalDetails({...personalDetails, city}))
    }

    const handleChangePostCode = (postcode) => {
        dispatch(setPersonalDetails({...personalDetails, postcode}))
    }

    const handleChangeTel = (tel) => {
        dispatch(setPersonalDetails({...personalDetails, tel}))
    }

    return (
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomFullName">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Your Full Name"
                    onChange={(e => handleChangeFullName(e.target.value))}
                    defaultValue={fullName}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide your full name
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustomAddress">
                <Form.Label>Address*</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Street Address"
                    onChange={(e => handleChangeAddress(e.target.value))}
                    defaultValue={address}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide your address
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomCity">
                <Form.Label>City / suburb*</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="City / suburb"
                    onChange={(e => handleChangeCity(e.target.value))}
                    defaultValue={city}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide city / suburb
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomPostCode">
                <Form.Label>Postal Code*</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Postal Code"
                    onChange={(e => handleChangePostCode(e.target.value))}
                    defaultValue={postcode}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide post code
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustomPhone">
                <Form.Label>Contact Number*</Form.Label>

                <InputGroup>
                    <InputGroup.Prepend>
                        {/*<InputGroup.Text id="basic-addon1">*/}
                        {/*    <div className='flag'>*/}
                        {/*        /!*<ReactCountryFlag countryCode="LK" svg*!/*/}
                        {/*        <ReactCountryFlag countryCode={countryCode} svg*/}
                        {/*                          style={{*/}
                        {/*                              fontSize: '1.2em',*/}
                        {/*                              lineHeight: '1em',*/}
                        {/*                              width: '2.5em',*/}
                        {/*                              height: '.8em',*/}
                        {/*                          }}*/}
                        {/*                          aria-label="Sri Lanka"/>*/}
                        {/*    </div>*/}
                        {/*    {callingCode}*/}
                        {/*</InputGroup.Text>*/}
                    </InputGroup.Prepend>
                    <Form.Control
                        required
                        type="text"
                        placeholder="0777 123 456"
                        className='prepended-control'
                        onChange={(e => handleChangeTel(e.target.value))}
                        defaultValue={tel}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide phone number
                    </Form.Control.Feedback>
                </InputGroup>

            </Form.Group>

        </Form.Row>
    )

}

export default BillingInfoPersonal;
