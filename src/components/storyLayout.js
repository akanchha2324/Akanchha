import React from 'react';
import postImg from "../assets/images/bg2.jpg";
import personImg from "../assets/images/person1.jpg";
const StoryLayout = () => {
    return (
        <>
            <div className='bg-secondary mx-3' style={{width: "150px", borderRadius: "1.5em", overflowX: "hidden"}}>
                <img src={postImg} style={{backgroundColor: "#2F2F2F", height: "200px", borderRadius: "1.5em 1.5em 0 0"}} />
                <img src={personImg} className='bg-dark' style={{height:"50px", width: "50px", borderRadius: "50%", position: "absolute", transform: "translate(100%, -2em)"}} />
                <div className='d-flex align-items-center justify-content-center p-3'>Adison Mango</div>
            </div>
        </>
    );
}

export default StoryLayout;