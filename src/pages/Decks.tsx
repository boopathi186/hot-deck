// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
// import '../css/Decks.css';
// import Header from "../components/header/Header";
// import Sidebar from "../components/sidebar/Sidebar";
// import Toggle from '../components/toggle/Toggle';
// import moment from 'moment';
// // import '../css/';
// import React from 'react';
// import { useGetDecksQuery } from '../redux/ApiSlice';

// type Tables = {
//   id: number;
//   title: string;
//   price: number;
//   displayId: string;
//   description: string;
//   createdAt: string;
//   item:string[]
// }
// type tableValue = Tables[];
// const Decks = () => {

//   const [searchTerm, setSearchTerm] = useState<string>();
//   const [currentPage, setCurrentPage] = useState(0);
//   const [filteredData, setFilteredData] = useState<tableValue>([]);
//    const{ data, isLoading, refetch } = useGetDecksQuery([]);
//   //FOR PAGINATION
//   const recordsPerPage = 10;
//   const firstIndex = currentPage * recordsPerPage;                        // 0 * 10 = 0
//   const lastIndex = firstIndex + recordsPerPage;                         // 0 + 10 = 10
//   const records = filteredData.slice(firstIndex, lastIndex);             // slice(0,10)
//   const pageCount = Math.ceil(filteredData.length / recordsPerPage);       // ceil(40/10) => 4 pages in the table

//   useEffect(() => {
//     refetch()
//     if (data) {
//       setFilteredData(data);
//     }
//   }, [data, refetch]);


//   // SERACH AN ELEMENTS IN THE TABLE
//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (data) {
//       const filtered = data.filter((product: Tables) =>
//         product.title.includes(value) ||
//         product.id.toString().includes(value) ||
//         product.price.toString().includes(value)
//       );
//       setFilteredData(filtered);
//       setCurrentPage(0);
//     }
//   };
//   // TO DISPLAY THE CURRENT ACTIVE TABL PAGE
//   const handlePageClick = (event: { selectedPage: number; selected: number }) => {
//     const selectedPage = event.selected;
//     setCurrentPage(selectedPage);
//     console.log(event);
    
//   };
//   return (
//     <div>
//       {isLoading ? (
//         <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100">
//           <Spinner animation="border" />
//         </h4>
//       ) : (
//         <Row className="m-0 p-0">
//           <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
//             <Sidebar />
//           </div>
//           <div className="col-12 col-xl-10 col-lg-10 p-0 m-0">
//             <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
//               <Header />
//             </div>
//             <div className='d-lg-none d-block shadow'>
//               <Toggle />
//             </div>
//             <div className="text-end container-fluid">
//             <Row className="d-flex  m-0 p-0">
//             <Col md={6} sm={12} className="fw-semibold fs-4 text-md-start text-center">Decks</Col></Row>
//               <div className='row'>
//                 <Col md={6}>
//                   <div className="w-100 p-3 mt-3 position-relative">
//                     <i className="search bi bi-search text-secondary fs-3"></i>
//                     <input
//                       className='searchbar w-100 ps-5 shadow-sm rounded-4 border-0 p-3'
//                      onChange={handleSearch}
//                       type="text"
//                       value={searchTerm}
//                       placeholder="Search for names..."
//                       title="Type in a name"
//                     />
//                   </div>
//                 </Col>
//                 <Col className='d-none d-md-block'>
//                   <Link to="/userprofile/create">
//                     <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3' variant='none'>
//                       + Create Product
//                     </Button>
//                   </Link>
//                 </Col>
//               </div>
//               <div className="t1 table-responsive shadow mt-3">
//                 <Table bordered variant='border border-white'>
//                   <thead className='sticky-top shadow-sm text-center'>
//                     <tr>
//                       {['ID', 'Title', 'Subtitle', 'Image','Card Count','Creation Date','Status' , 'Actions'].map((field) => (
//                         <th key={field} className='text-secondary bg-light bg-opacity-100 rounded border border-white fs-6 p-2'>{field}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {records.length > 0 ?
//                       (
//                         records.map((product: Tables) => (
//                           <tr className='border-bottom ' key={product.id}>
//                             <td className='text-center text-secondary'>{product.item.displayId}</td>
//                             <td className='text-center'>
//                               <Link className="text-decoration-none text-secondary " to={`/userProfile/${product.id}`}>{product.title}</Link>
//                             </td>
//                             <td className='text-center'>
//                               <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>
//                                 <span className='fw-bold'>$</span> {product.price}
//                               </Link>
//                             </td>
//                             <td className='text-center'>
//                               <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment().format('LL')}</Link>
//                             </td>
//                             <td className='text-center'>
//                               <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment().format('LT')}</Link>
//                             </td>
//                             <td className='text-center'>
//                               <Button variant='none px-sm-1 px-0'>
//                                 <i className="bi bi-trash3-fill text-danger px-1 "></i>
//                               </Button>
                             
//                                 <i className="edit bi bi-pencil-square "></i>
                          
//                             </td>
//                           </tr>
//                         ))
//                       ) :
//                       (
//                         <tr>
//                           <td colSpan={6} className="text-center text-danger">
//                             No matches found
//                           </td>
//                         </tr>
//                       )}
//                   </tbody>
//                 </Table>
//               </div>
//               <Col className='d-md-none d-block text-center'>
//                 <Link to="/userprofile/create">
//                   <Button className='bg-danger border border-none shadow-sm text-white mt-3 rounded-3 py-2 ' variant='none'>
//                     + Create Product
//                   </Button>
//                 </Link>
//               </Col>
//                {/* props for pagination */}
//               <div className='mt-3'>
//                 {/* <Paginate pageCount={pageCount} handlePageClick={handlePageClick} /> */}
//               </div>
//             </div>
//           </div>
//         </Row>
//       )}
//     </div>
//   );
// };

// export default Decks;
import React from 'react';
import { useGetDecksQuery } from '../redux/ApiSlice';

// Define the TypeScript interfaces
interface Deck {
    deckId: string;
    displayId: string;
    title: string;
    subtitle: string;
    deckType: number;
    description: string;
    coverImageUrl: string;
    playableCardCount: number;
    supportCardCount: number;
    totalCardCount: number;
    status: number;
    createdAt: string;
    coverImageFileName: string;
}

interface DecksResponse {
    totalCount: number;
    items: Deck[];
}

const DecksComponent: React.FC = () => {
  // Use the useGetDecksQuery hook and type the return value
  const { data, error, isLoading } = useGetDecksQuery([]) as { data?: DecksResponse, error?: any, isLoading: boolean };

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    // Inspect and handle the error object appropriately
    const errorMessage = error.data?.message || error.error || "An unknown error occurred.";
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Decks</h1>
      <ul>
        {data?.items?.map((deck) => (
          <li key={deck.deckId}>
            <h2>{deck.title}</h2>
            <p>{deck.description}</p>
            <img src={deck.coverImageUrl} alt={deck.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DecksComponent;


