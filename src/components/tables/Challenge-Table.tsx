import React from 'react';
import { Table } from "react-bootstrap";

interface Challenge {
  status: number;
  challenge_id: string;
  response_type: number;
  tags: string;
  challenge_name: string;
  display_id: string;
}

interface ChallengesTableProps {
  records: Challenge[];
}

const ChallengesTable: React.FC<ChallengesTableProps> = ({ records }) => {
  return (
    <div className="t1 table-responsive shadow mt-3">
      <Table bordered variant='border border-white'>
        <thead className='sticky-top shadow-sm text-center'>
          <tr>
            {['ID', 'Challenges', 'Tags', 'Response Type','Status', 'Action'].map((field) => (
              <th key={field} className='text-secondary bg-light bg-opacity-100 rounded border border-white fs-6 p-2'>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((datas: Challenge) => (
              <tr className='border-bottom ' key={datas.challenge_id}>
                <td className='text-center text-secondary'>{datas.challenge_id}</td>
                <td className='text-center'>{datas.challenge_name}</td>
                <td className='text-center'>{(datas.tags).split(",").length}</td>
                <td className='text-center'>
                  {datas.response_type === 1 ? (
                    <>
                      <i className="text-secondary text-opacity-50 bi bi-card-text m-1"></i>
                      <i className="text-secondary text-opacity-50 bi bi-card-image m-1"></i>
                      <i className="m-1 text-secondary text-opacity-50 bi bi-camera-reels"></i>
                    </>
                  ) : (
                    <>
                      <i className="text-secondary text-opacity-50 bi bi-camera-reels m-1"></i>
                      <i className="m-1 text-secondary text-opacity-50 bi bi-card-image"></i>
                    </>
                  )}
                </td>
                <td className='text-center'>
                  {datas.status === 1 ? (
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
              <td colSpan={8} className="text-center text-danger">No matches found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ChallengesTable;
