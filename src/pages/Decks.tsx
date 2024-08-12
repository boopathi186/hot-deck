import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
import '../css/Decks.css';
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Toggle from '../components/toggle/Toggle';
import moment from 'moment';
import { useGetDecksQuery } from '../redux/ApiSlice';
import Paginate from './Paginate';

interface Deck {
  parent_card_count: string;
  cover_image_url: string;
  id: string;
  items: any;
  price: number;
  deckId: string;
  display_id: string;
  title: string;
  subtitle: string;
  deckType: number;
  description: string;
  coverImageUrl: string;
  status: number;
  createdAt: string;
  coverImageFileName: string;
  totalCount: number;
}

interface DecksResponse {
  items: Deck[];
}

const Decks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState<Deck[]>([]);
  const { data, isLoading } = useGetDecksQuery();

  const recordsPerPage = 10;
  const firstIndex = currentPage * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(filteredData.length / recordsPerPage);

  useEffect(() => {
    console.log(data)
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (data) {
      const filtered = data.filter((product: Deck) =>
        product.title.includes(value) ||
        product.display_id.toString().includes(value) ||
        product.price.toString().includes(value)
      );
      setFilteredData(filtered);
      setCurrentPage(0);
    }
  };
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
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
                <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Decks</Col>
              </Row>
              <div className='row'>
                <Col md={6}>
                  <div className="w-100 p-3 mt-3 position-relative">
                    <i className="search bi bi-search text-secondary fs-3"></i>
                    <input
                      className='searchbar w-100 ps-5 shadow-sm rounded-4 border-0 p-3'
                      onChange={handleSearch}
                      type="text"
                      value={searchTerm}
                      placeholder="Search for names..."
                      title="Type in a name"
                    />
                  </div>
                </Col>
                <Col className='d-none d-md-block'>
                  <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3' variant='none'>
                    + Create Deck
                  </Button>
                </Col>
              </div>
              <div className="t1 table-responsive shadow mt-3">
                <Table bordered variant='border border-white'>
                  <thead className='sticky-top shadow-sm text-center'>
                    <tr>
                      {['ID', 'Title', 'Subtitle', 'Image', 'Card Count', 'Creation Date', 'Status', 'Actions'].map((field) => (
                        <th key={field} className='text-secondary bg-light bg-opacity-100 rounded border border-white fs-6 p-2'>{field}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {records.length > 0 ? (
                      records.map((product: Deck) => (
                        <tr className='border-bottom ' key={product.id}>
                          <td className='text-center text-secondary'>{product.display_id}</td>
                          <td className='text-center'>{product.title}
                          </td>
                          <td className='text-center'>{product.subtitle}  </td>
                          <td className='text-center'><i className="text-info text-opacity-75 bi bi-person-bounding-box"></i></td>
                          <td className='text-center'>{product.parent_card_count} </td>
                          <td className='text-center'>{moment().format('LL')} </td>
                          <td className='text-center'>
                            {product.status === 1 ?
                              (<small className='active  rounded-2 border-none p-1 mx-2 m-2'>Active</small>) : (
                                <small className='inactive rounded-2 border-none p-1 mx-2'>Disabled</small>
                              )}
                          </td>
                          <td className='text-center'>
                            <i className="edit bi bi-pencil-square "></i>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="text-center text-danger">
                          No matches found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
              <Col className='d-md-none d-block text-center'>
                <Link to="/userprofile/create">
                  <Button className='bg-danger border border-none shadow-sm text-white mt-3 rounded-3 py-2 ' variant='none'>
                    + Create Product
                  </Button>
                </Link>
              </Col>
              {/* props for pagination */}
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
