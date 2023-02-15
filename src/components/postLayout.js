import React from 'react';
import {Card, Image, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsis, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import postImg from "../assets/images/bg2.jpg";
import personImg from "../assets/images/person1.jpg";
const PostLayout = () => {
    return (
        <>
        <Card className='card-post'>
          <Card.Header style={{backgroundColor: "inherit"}} className="d-flex justify-content-between">
            <div className='d-flex'>
              <img src={personImg} style={{height: "50px", width: "50px", borderRadius: "50%", border: "2px solid blue"}} />
              <Stack className='px-3'>
                <div>Ahmad Dorwat</div>
                <div>10 mins</div>
              </Stack>
            </div>
            <div style={{backgroundColor: "#6c757d", borderRadius: "50%"}} className="d-flex px-3 align-items-center">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </Card.Header>
          <Card.Body>
            <img src={postImg} style={{borderRadius: "1.5em", width:"100%", aspectRatio: "5/4"}} />
            <div className='my-3 px-1 ms-1'>
              <FontAwesomeIcon icon={faHeart} className="px-2" />
              <FontAwesomeIcon icon={faComment} className="px-2" />
              <FontAwesomeIcon icon={faPaperPlane} className="px-2" />
            </div>
            <div className='my-3 px-2'>
              <span className='px-2 me-1'>
                <span className='fw-bold'>229</span> Likes 
              </span>
              . 
              <span className='ms-1 px-2'>
                <span className='fw-bold'>200</span> Comments
              </span>
            </div>
          </Card.Body>
        </Card>
        </>
    );
}

export default PostLayout;