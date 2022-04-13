import React, {useState} from 'react';
import './Style.sass'
import {Button, Row, Form, Col, InputGroup} from "react-bootstrap";


const RegisterPage = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState([])
    const [disable, setDisable] = useState(true)

    const checkValidation = (currentValue) => {
        const validationMessages = [];
        for (let i = 0; i <= currentValue.length; i++) {
            if (currentValue[i] === ' ') {
                validationMessages.push('Username cant has spaces')
            }
        }
        if (currentValue.length <= 5) {
            validationMessages.push('Username has to be >5 symbols')
        }
        if (validationMessages.length === 0) {
            setDisable(false)
        } else {
            setDisable(true)
        }
        setValidation(validationMessages)
    }

    const authorization = {
        llogin: '', ppassword: ''
    }
    const registration = () => {
        authorization.llogin = login
        authorization.ppassword = password
        props.callBack(authorization.llogin, authorization.ppassword)

    }
    const onChange = (event) => {
        setLogin(event.target.value)
        checkValidation(event.target.value)
    }
    //BOOTSTRAP
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (<div className="registerPage">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
        <div className="registerPage">
            <input className="login_input" type="text" placeholder="Username" value={login}
                   onChange={onChange}
                   required/>
            <input className="login_input" type="text" placeholder="Password" value={password}
                   onChange={(event) => setPassword(event.target.value)}
                   required/>
            {/*<Link to="/login">*/}
                <Button disabled={disable} variant="outline-primary" className='login_btn'
                        onClick={registration}>Register</Button>
            {/*</Link>*/}
            <ul>
                {validation.map(el => <li key={el}>{el}</li>)}
            </ul>
            НАЙТИ КАК ДОБАВИТЬ ЛИНК В БАТТОН
        </div>
    </div>);
};

export default RegisterPage;