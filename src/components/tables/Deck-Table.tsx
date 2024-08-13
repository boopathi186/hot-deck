import React from 'react';
import { Table } from "react-bootstrap";
import moment from 'moment';

interface Deck {
  id: string;
  display_id: string;
  title: string;
  subtitle: string;
  parent_card_count: string;
  status: number;
}

interface DeckTableProps {
  records: Deck[];
}

const DeckTable: React.FC<DeckTableProps> = ({ records }) => {
  return (
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
                <td className='text-center'>{product.title}</td>
                <td className='text-center'>{product.subtitle}</td>
                <td className='text-center'><i className="text-info text-opacity-75 bi bi-person-bounding-box"></i></td>
                <td className='text-center'>{product.parent_card_count}</td>
                <td className='text-center'>{moment().format('LL')}</td>
                <td className='text-center'>
                  {product.status === 1 ? (
                    <small className='active rounded-2 border-none p-1 mx-2 m-2 px-3'>Active</small>
                  ) : (
                    <small className='inactive rounded-2 border-none p-1 mx-2'>Disabled</small>
                  )}
                </td>
                <td className='text-center'>
                  <i className="edit bi bi-pencil-fill"></i>
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
  );
};

export default DeckTable;
