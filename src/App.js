import './Style.sass'
import './App.css'

import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Home from "./Home";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

function App() {

    const [login1, setLogin1] = useState('')
    const [password1, setPassword1] = useState('')
    const callBack = (login, password) => {
        setLogin1(() => login)
        setPassword1(() => password)
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant={"dark"}>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/login">Login</Link>

                            <Link className="nav-link" to="/register">Register</Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage callBack={callBack} login={login1} password={password1}/>}/>
                <Route path="/register" element={<RegisterPage callBack={callBack}/>}/>
            </Routes>

        </div>
    );
}

export default App;
