import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StoryLayout from './storyLayout';

const Stories = () => {
  return (
    <>
      <Container className='text-light'>
        <h1 className='my-3'>Stories</h1>
        <div className='d-flex'>
          <StoryLayout />
          <StoryLayout />
          <StoryLayout />
        </div>
      </Container>
    </>
  );
}

export default Stories;