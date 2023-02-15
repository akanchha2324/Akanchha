import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Container style={{color: "whitesmoke"}}>
          <div className='my-4 px-3 mx-3 d-flex justify-content-between'>
            <h1 className='d-flex align-items-center'>Sosmad</h1>
            <div className='d-flex align-items-center'>
              <span className='bg-secondary px-2 py-3 mx-2' style={{borderRadius: "50%"}}>
                <FontAwesomeIcon icon={faBell} className="px-2" size='xl' />
              </span>
              <span className='bg-secondary px-2 py-3 mx-2' style={{borderRadius: "50%"}}>
                <FontAwesomeIcon icon={faMessage} className="px-2" size='xl' />
              </span>
            </div>
          </div>
        </Container>
        </>
    );
}

export default Header;