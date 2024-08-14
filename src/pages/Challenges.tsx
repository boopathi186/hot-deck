import React, { useState, useEffect } from 'react';
import { Col, Nav, Row, Spinner, Tab } from "react-bootstrap";
import '../css/Challenges.css';
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from '../components/toggle/Toggle';
import { useGetChallengesQuery } from '../redux/ApiSlice';
import Paginate from './Paginate';
import SearchBar from '../pages/Search-Bar';
import ChallengesTable from '../components/tables/Challenge-Table';
import CreateButton from '../components/buttons/Create-Challenge';



interface Challenge {
  challenge_id: string;
  response_type: number;
  tags: string;
  challenge_name: string;
  display_id: string;
  status: number;
}
const Challenges: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState<Challenge[]>([]);
  const { data, isLoading } = useGetChallengesQuery();

  useEffect(() => {
    console.log(data);


    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (data) {
      const filtered = data.filter((challenge: Challenge) =>
        challenge.challenge_name.includes(value.toLowerCase()) ||
        challenge.display_id.toString().includes(value.toLowerCase()) ||
        challenge.response_type.toString().includes(value)
      );
      setFilteredData(filtered);
      setCurrentPage(0);
    }
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const recordsPerPage = 10;
  const firstIndex = currentPage * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(filteredData.length / recordsPerPage);

  const total: number = filteredData.length;
  sessionStorage.setItem('challengeLength', JSON.stringify(total))
  return (
    <div>
      {isLoading ? (
        <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </h4>
      ) : (
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
              <Row className="d-flex m-0 p-0">
                <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Challenges</Col>
              </Row>
              <Row className='m-0 p-0 mt-3'>
                <Tab.Container defaultActiveKey="playable">
                  <Nav  variant="tabs">
                    <Nav.Item className='bg-light'>
                      <Nav.Link eventKey="playable" className="custom-tab bg-light border-light ">
                        Playable Card Challenges
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item  className='bg-light'>
                      <Nav.Link eventKey="support" className="custom-tab bg-light border-light">
                        Support Card Challenges
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </Row>
              <div className='row '>
                <Col md={6}>
                  <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
                </Col>
                <CreateButton />
              </div>

              <ChallengesTable records={records} />
              <div className='mt-3'>
                <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
              </div>
            </div>
          </div>
        </Row>
      )}
    </div>
  );
};

export default Challenges;
