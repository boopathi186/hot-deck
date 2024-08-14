import React, { useState, useEffect } from 'react';
import { Col, Row, Spinner } from "react-bootstrap";
import '../css/Customer.css';
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from '../components/toggle/Toggle';
import { useGetCustomerQuery } from '../redux/ApiSlice';
import Paginate from './Paginate';
import SearchBar from '../pages/Search-Bar';
import DeckTable from '../components/tables/Customer-Table';
import CreateDeckButton from '../components/buttons/Create-Customer';
interface CustomerData {
  status: number;
  referral: string;
  phone_number: string;
  no_of_decks: number;
  lastlogin: string;
  id: string;
  title: string;
}

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState<CustomerData[]>([]); 
  const { data, isLoading} = useGetCustomerQuery();

  const recordsPerPage = 10;
  const firstIndex = currentPage * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(filteredData.length / recordsPerPage);
  const total: number  = filteredData.length;
  sessionStorage.setItem('customerLength', JSON.stringify(total))
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
      const filtered = data.filter((product: CustomerData) =>
        product.phone_number.includes(value) ||
        product.id.toString().includes(value.toLowerCase()) ||
        product.no_of_decks.toString().includes(value)
      );
      setFilteredData(filtered);
      setCurrentPage(0);
    }
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    console.log(event);
  };

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
                <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Customers</Col>
              </Row>
              <div className='row'>
                <Col md={6}>
                  <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
                </Col>
                <CreateDeckButton />
              </div>
              <DeckTable records={records} firstIndex={firstIndex} />
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

export default Customers;
