import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from "react-bootstrap";
import '../css/Decks.css';
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from '../components/toggle/Toggle';
import { useGetDecksQuery } from '../redux/ApiSlice';
import Paginate from './Paginate';
import SearchBar from '../pages/Search-Bar';
import CreateDeckButton from '../components/buttons/Create-Deck';
import DeckTable from '../components/tables/Deck-Table';
interface Deck {
  data: string[];
  parent_card_count: string;
  cover_image_url: string;
  id: string;
  display_id: string;
  title: string;
  subtitle: string;
  coverImageUrl: string;
  status: number;
  coverImageFileName: string;
  totalCount: number;
}


const Decks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<Deck[]>([]);
  const { data, isLoading } = useGetDecksQuery();

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (data) {
      const filtered = data.filter((product: Deck) =>
        product.title.includes(value.toLowerCase()) ||
        product.display_id.toString().includes(value.toLowerCase()) ||
        product.subtitle.toString().includes(value.toLowerCase())
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
  const total: number  = filteredData.length;
  sessionStorage.setItem('DeckLength', JSON.stringify(total))
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
                <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Decks</Col>
              </Row>
              <Row className='align-items-center'>
                
                <Col md={6}>
                  <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
                </Col>
                <CreateDeckButton />
              </Row>
              <DeckTable records={records} />
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

export default Decks;
