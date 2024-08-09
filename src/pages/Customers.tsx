import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Toggle from "../components/toggle/Toggle";


const Customers = () => {
    return (
        <Row className="m-0 p-0">
            <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                <Sidebar />
            </div>
            <div className="col-12 col-xl-10 col-lg-10 p-0 m-0">
                <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                    <Header />
                </div>
                <div className='d-lg-none d-block shadow'>
                    <Toggle />
                </div>
                <div className="text-end container-fluid">
                <Row className="d-flex mt-2 m-0 p-0">
                <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Customers</Col></Row>
                    <div className='row'>
                        <Col md={6}>
                            <div className="w-100 p-3 mt-3 position-relative">
                                <i className="search bi bi-search text-secondary fs-3"></i>
                                <input
                                    className='searchbar w-100 ps-5 shadow-sm rounded-4 border-0 p-3'
                                    // onChange={handleSearch}
                                    type="text"
                                    // value={searchTerm}
                                    placeholder="Search for names..."
                                    title="Type in a name"
                                />
                            </div>
                        </Col>
                        <Col className='d-none d-md-block'>

                            <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3' variant='none'>
                                + Create Product
                            </Button>

                        </Col>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default Customers;