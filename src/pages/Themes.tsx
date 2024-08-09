import { Card, Col, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from "../components/toggle/Toggle";

const Theme = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 d-lg-block d-none shadow">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className=' col-12 d-lg-none d-block shadow'><Toggle /></div>
                    <div className="row m-0 p-0 mt-4">
                        <Row className=" row-cols-1  row-cols-md-2 row-cols-xl-4 g-4 mt-3  m-0">
                            <Col>
                                    <Card className="theme h-100 shadow-sm rounded text-center border-0">
                                        <Card.Body className="bg-light bg-opacity-75 p-0 m-0 text-dark fw-bold  ">
                                            <Row className="d-flex align-items-center h-100 justify-content-center text-danger fs-4 rounded-3 bg-white shadow-sm">
                                                Create Themes +
                                            </Row>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Theme;