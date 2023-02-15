import React from 'react';
import PostLayout from './postLayout';
import {Button, Container} from 'react-bootstrap'
const Main = () => {
    return (
        <>
          <Container>
            <div className="d-flex justify-content-center my-4">
              <span style={{backgroundColor: "#6c757d", borderRadius: "2em", width: "min-content"}} className="d-flex p-1">
                <Button style={{ borderRadius: "2em"}} className="px-5">Explore</Button>
                <Button variant="secondary" style={{ borderRadius: "2em"}} className="px-5">Discover</Button>
              </span>
            </div>
            <PostLayout />
          </Container>
        </>
    );
}

export default Main;