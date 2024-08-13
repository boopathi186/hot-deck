import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from "../components/toggle/Toggle";
import { Col, Row, Container, Card, Spinner } from 'react-bootstrap';
import '../css/DashBoard.css';
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    if (loading)
        return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"><Spinner animation="border" /></h4>;

    return (
        <>
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow-sm d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className='p-0 m-0'>
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <Container fluid>
                    <Row className="d-flex  m-0 mt-4 p-0">
                        <Col md={6} sm={12} className="fw-semibold mb-4 fs-4 text-md-start text-center">Dashboard</Col>
                        </Row>
                        <Row className=" row-cols-1  row-cols-md-2 row-cols-xl-4 g-4 mt-3">
                            
                            <Col>
                                <Link className=' text-decoration-none text-white fw-bold' to='/dashboard/themes'>
                                    <Card className="theme h-100 shadow-sm rounded text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="  text-secondary fw-normal  text-start ms-2 fs-5">Theme</Col>
                                            <Col className="text-end text-success fs-4">
                                            <i className="bi bi-suit-club-fill"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col  className="  text-secondary  text-start ms-2 mt-3 fs-2">32</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card></Link>
                            </Col>
                            <Col>
                            <Link className=' text-decoration-none text-white fw-bold' to='/dashboard/decks'>
                            <Card className="theme h-100 shadow-sm rounded-2 text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="  text-secondary fw-normal   text-start ms-2 fs-5 ">Decks</Col>
                                            <Col className="text-end text-info fs-4">
                                            <i className="bi bi-suit-diamond-fill"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col  className=" text-secondary  text-start ms-2 mt-3 fs-2">{(sessionStorage.getItem('DeckLength'))}</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card></Link>
                            </Col>
                            <Col>
                            <Link className=' text-decoration-none text-white fw-bold' to='/dashboard/challenges'>
                            <Card className="theme h-100 shadow-sm rounded-4  text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className=" text-secondary fw-normal  text-start ms-2 fs-5 ">Challenges</Col>
                                            <Col className="text-end text-danger fs-4">
                                            <i className="bi bi-suit-heart-fill"></i></Col>
                                        </Row>
                                        <Row>
                                        <Col  className="  text-secondary  text-start ms-2 mt-3 fs-2">{(sessionStorage.getItem('challengeLength'))}</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card></Link>
                            </Col>
                            <Col>
                            <Link className=' text-decoration-none text-white fw-bold' to='/dashboard/customers'>
                            <Card className="theme h-100 shadow-sm rounded-2 text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="   text-secondary  fw-normal  text-start ms-2 fs-5">Customers</Col>
                                            <Col className="text-end text-warning fs-4">
                                            <i className="bi bi-suit-spade-fill"></i></Col>
                                        </Row>
                                        <Row>
                                        <Col  className=" text-secondary  text-start ms-2 mt-3 fs-2">{(sessionStorage.getItem('customerLength'))}</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card></Link>
                            </Col>
                        </Row>
                       
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
