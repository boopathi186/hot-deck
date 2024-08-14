// DeckTable.tsx
import React from 'react';
import { Table } from "react-bootstrap";
import moment from 'moment';

interface Deck {
  id: string;
  phone_number: string;
  no_of_decks: number;
  referral: string;
  status: number;
  lastlogin: string;
}

interface DeckTableProps {
  records: Deck[];
  firstIndex: number;
}

const DeckTable: React.FC<DeckTableProps> = ({ records, firstIndex }) => {
  return (
    <div className="t1 table-responsive shadow mt-3">
      <Table bordered variant='border border-white'>
        <thead className='sticky-top shadow-sm text-center'>
          <tr>
            {['ID', 'Phone Number', 'No Of Decks', 'Referral', 'Last-Login', 'Status'].map((field) => (
              <th key={field} className='text-secondary bg-light bg-opacity-100 rounded border border-white fs-6 p-2'>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((product, index) => (
              <tr className='border-bottom ' key={product.id}>
                <td className='text-center text-secondary'>{firstIndex + 0 + index}</td>
                <td className='text-center'>{product.phone_number}</td>
                <td className='text-center'>{product.no_of_decks}</td>
                <td className='text-center'>
                  {product.referral ?
                    (<small className='refferal px-2 fw-semibold rounded py-1'>{product.referral}</small>) :
                    (<small className='refferal px-4 fw-semibold rounded py-1'>No Referral</small>)
                  }
                </td>
                <td className='text-center'>{moment().format('LL')}</td>
                <td className='text-center'>
                  {product.status === 1 ?
                    (<small className='active rounded-2 border-none p-1 px-3 mx-2 m-2'>Active</small>) :
                    (<small className='inactive rounded-2 border-none p-1 mx-2'>Disabled</small>)
                  }
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
