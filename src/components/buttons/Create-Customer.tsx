
import React from 'react';
import { Button, Col } from "react-bootstrap";

const CreateDeckButton: React.FC = () => {
  return (
    <>
      <Col className='d-none d-md-block'>
        <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3' variant='none'>
          + Create Customer
        </Button>
      </Col>
      <Col className='d-md-none d-block text-center'>
        <Button className='bg-danger border border-none shadow-sm text-white mt-3 rounded-3 py-2' variant='none'>
          + Create Customer
        </Button>
      </Col>
    </>
  );
};

export default CreateDeckButton;
