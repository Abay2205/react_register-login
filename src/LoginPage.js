import React, {useState} from 'react';
import './Style.sass'
import {Button, Container, Nav, Dropdown, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import basket from './images/Basket2.png'
import contacts from './images/Contacts.png'
import persData from './images/Personal data.png'
import persAccount from './images/personal_account.png'
import myProfile from './images/myProfile.png'
import currentOrders from './images/currentOrders.png'
import ordersHistory from './images/ordersHistory.png'
import ordersProfiles from './images/ordersProfiles.png'
import subscribe from './images/subscribe.png'

const LoginPage = (props) => {
    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    const check = () => {
        if (inputLogin !== props.login || inputPassword !== props.password) {
            alert('Incorrect login or password')
        } else {
            alert(`Welcome ${inputLogin}!`)
            setIsLogin(false);
        }
        setInputLogin('')
        setInputPassword('')
    }
    return (
        <div>
            {isLogin && <div className="loginPage">
                <input className="login_input" type="text" placeholder="Login" value={inputLogin}
                       onChange={(event) => setInputLogin(event.target.value)}/>
                <br/>
                <input className="login_input" type="text" placeholder="Password" value={inputPassword}
                       onChange={(event) => setInputPassword(event.target.value)}/>
                <br/>
                <Button variant="outline-primary" className='login_btn' onClick={check}>Sign in</Button>
            </div>}
            {!isLogin && <div className="user_cabinet">
                <div className="personal_page">
                    <Dropdown.Menu show className="Dropdown">
                        <Dropdown.Item eventKey="1" className="Dropdown_text">My profile</Dropdown.Item>
                        <Dropdown.Item eventKey="3" className="Dropdown_text">Personal account</Dropdown.Item>
                        <Dropdown.Item eventKey="4" className="Dropdown_text">Personal data</Dropdown.Item>
                        <Dropdown.Item eventKey="2" className="Dropdown_text">Current orders</Dropdown.Item>
                        <Dropdown.Item eventKey="5" className="Dropdown_text">Change password</Dropdown.Item>
                        <Dropdown.Item eventKey="5" className="Dropdown_text">Order's profiles</Dropdown.Item>
                        <Dropdown.Item eventKey="7" className="Dropdown_text">Basket</Dropdown.Item>
                        <Dropdown.Item eventKey="6" className="Dropdown_text">Order history</Dropdown.Item>
                        <Dropdown.Item eventKey="7" className="Dropdown_text">Subscriptions</Dropdown.Item>
                        <Dropdown.Item eventKey="8" className="Dropdown_text">Contacts</Dropdown.Item>
                        <Dropdown.Item eventKey="9" href="/login" className="Dropdown_text">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </div>
                <Container className="container_card">
                    <Row>
                        <Col>
                            <Card className="cards">
                                <Card.Img variant="center" src={myProfile} className="card_img"/>
                                <Card.Body>
                                    <Card.Title>My profile</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cards">
                                <Card.Img variant="center" src={currentOrders} className="card_img"/>
                                <Card.Body>
                                    <Card.Title>Current orders</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cards">
                                <Card.Img variant="center" src={ordersHistory} className="card_img"/>
                                <Card.Body>
                                    <Card.Title>Orders history</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={persAccount} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Personal account</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={ordersProfiles} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Order's profiles</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={subscribe} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Subscriptions</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={persData} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Personal data</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={basket} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Basket</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col>
                    <Card className="cards">
                        <Card.Img variant="center" src={contacts} className="card_img"/>
                        <Card.Body>
                            <Card.Title>Contacts</Card.Title>
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                </Container>
            </div>}
        </div>
    );
};

export default LoginPage;