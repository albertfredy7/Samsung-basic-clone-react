import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import NewIn from './NewIn';
import Mobile from './Mobile';
import TV from './TV';


function Highlights() {
    const [number, setNumber] = useState(1);
    const handleClickNewIn = (e) => {
        e.preventDefault(); 
        setNumber((prevNumber) => (prevNumber === 1 ? 0 : 1));
      };
    
      const handleClickMobile = (e) => {
        e.preventDefault();
        setNumber((prevNumber) => (prevNumber === 2 ? 0 : 2));
      };
      const handleClickTV = (e) => {
        e.preventDefault();
        setNumber((prevNumber) => (prevNumber === 3 ? 0 : 3));
      };
    
      const renderComponent = () => {
        switch (number) {
          case 1:
            return <NewIn />;
          case 2:
            return <Mobile />;
          case 3:
            return <TV/>
          default:
            return null;
        }
      }
    
    
  return (
    <Container>
        <div>
            <h1 className='text-center my-5'>This Week Highlights</h1>
            <div className='highlights-items'>
                <ul className='d-flex gap-4 justify-content-center'>
                    <li onClick={handleClickNewIn}><a href=''>New In</a></li>
                    <li onClick={handleClickMobile}><a href=''>Mobile</a></li>
                    <li><a href='' onClick={handleClickTV}>TV</a></li>
                    <li><a href=''>Appliances</a></li>
                    <li><a href=''>Galaxy Ecosystem</a></li>
                    <li><a href=''>Samsung Live</a></li>
                </ul>
            </div>
            <div>
            {renderComponent()}
            </div>
            
        </div>
    </Container>
  )
}

export default Highlights